import React, { useRef, useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import {
  Card,
  CardFooter,
  Image,
  Button,
  CardBody,
} from "@nextui-org/react";

const items = [
  {
    id: 1,
    title: "Title 1",
    subtitle: "Subtitle 1",
    img: "https://harsh-porto.netlify.app/assets/yelp-c05c2024.png",
    data: "1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt nisi tempore aliquam eligendi ducimus consequuntur, corrupti iste consequatur veniam, aspernatur explicabo cumque recusandae modi, tempora nam pariatur labore dolorum alias.",
  },
  {
    id: 2,
    title: "Title 2",
    subtitle: "Subtitle 2",
    img: "https://harsh-porto.netlify.app/assets/LL-5ae8cfb5.png",
    data: "2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt nisi tempore aliquam eligendi ducimus consequuntur, corrupti iste consequatur veniam, aspernatur explicabo cumque recusandae modi, tempora nam pariatur labore dolorum alias.",
  },
  {
    id: 3,
    title: "Title 3",
    subtitle: "Subtitle 3",
    img: "https://harsh-porto.netlify.app/assets/movie_search-0e9e1867.png",
    data: "3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt nisi tempore aliquam eligendi ducimus consequuntur, corrupti iste consequatur veniam, aspernatur explicabo cumque recusandae modi, tempora nam pariatur labore dolorum alias.",
  },
  {
    id: 4,
    title: "Title 4",
    subtitle: "Subtitle 4",
    img: "https://nextui.org/images/hero-card.jpeg",
    data: "4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt nisi tempore aliquam eligendi ducimus consequuntur, corrupti iste consequatur veniam, aspernatur explicabo cumque recusandae modi, tempora nam pariatur labore dolorum alias.",
  },
  {
    id: 5,
    title: "Title 5",
    subtitle: "Subtitle 5",
    img: "https://nextui.org/images/hero-card.jpeg",
    data: "5 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt nisi tempore aliquam eligendi ducimus consequuntur, corrupti iste consequatur veniam, aspernatur explicabo cumque recusandae modi, tempora nam pariatur labore dolorum alias.",
  },
];

export const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);
  const ref = useRef(null);
  const modalRef = useRef(null);
  const isInView = useInView(ref, { once: true });

  const selectedItem = items.find((item) => item.id === selectedId);

  const closeModal = useCallback(() => {
    setSelectedId(null);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (selectedId) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedId, closeModal]);

  return (
    <div className={`h-full mb-12 px-4`}>
      <motion.div
        className="text-4xl font-bold dark:text-white text-black mt-20 mb-10"
        id="projects"
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        Projects
      </motion.div>

      <div className="flex justify-center items-center">
        <motion.div layout className="grid grid-cols-3 lg:grid-cols-5 lg:gap-5 gap-10 w-full">
          <AnimatePresence>
            {items.map((item) => {
              const itemRef = useRef(null);
              const itemInView = useInView(itemRef, { once: true });

              return selectedId === null || item.id !== selectedId ? (
                <motion.div
                  layout
                  key={item.id}
                  ref={itemRef}
                  layoutId={`card-${item.id}`}
                  className={`${
                    item.id === 2 || item.id === 3 ? "col-span-3" : "lg:col-span-2 col-span-3"
                  }`}
                  onClick={() => setSelectedId(item.id)}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={itemInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
                  exit={{ opacity: 0 }}
                >
                  <Card isFooterBlurred radius="lg" className="border-none h-full max-h-[400px]">
                    <Image
                      alt="Project image"
                      className="md:object-cover"
                      src={item.img}
                    />
                    <CardFooter className="cursor-pointer justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                      <p className="text-tiny text-white/80">{item.title}</p>
                      <Button
                        className="text-tiny text-white bg-black/20"
                        variant="flat"
                        color="default"
                        radius="lg"
                        size="sm"
                      >
                        Click to know more!!!
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ) : null;
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedId && selectedItem && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
            />
            <motion.div
              layoutId={`card-${selectedId}`}
              className="fixed inset-0 flex items-center justify-center px-4 z-50"
              transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
            >
              <Card
                isFooterBlurred
                radius="lg"
                ref={modalRef}
                className="border-none bg-[#0e0e10] md:bg-transparent backdrop-blur-xl text-center relative w-full max-w-xl max-h-[80vh] overflow-auto"
              >
                <CardBody>
                  <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                    <div className="relative col-span-6 md:col-span-4">
                      <Image
                        alt="Project image"
                        className="object-cover"
                        shadow="md"
                        src={selectedItem.img}
                      />
                    </div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.3 }}
                      className="flex flex-col col-span-6 md:col-span-8"
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex flex-col gap-0">
                          <h5>{selectedItem.subtitle}</h5>
                          <h2>{selectedItem.title}</h2>
                          <p>{selectedItem.data}</p>
                        </div>
                      </div>

                      <div className="flex flex-col mt-3 gap-1">
                        <div className="flex justify-between">
                          <p className="font-semibold">Visit</p>
                          <p className="font-semibold">Github</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </CardBody>

                <motion.button
                  className="absolute top-2 right-2 bg-blue-500 text-white rounded-full p-2 z-10"
                  onClick={closeModal}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <CloseIcon />
                </motion.button>
              </Card>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
