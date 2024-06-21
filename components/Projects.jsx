import React, { useRef, useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import CloseIcon from '@mui/icons-material/Close';

const items = [
  {
    id: 1,
    title: "Title 1",
    subtitle: "Subtitle 1",
    data: "1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt nisi tempore aliquam eligendi ducimus consequuntur, corrupti iste consequatur veniam, aspernatur explicabo cumque recusandae modi, tempora nam pariatur labore dolorum alias."
  },
  {
    id: 2,
    title: "Title 2",
    subtitle: "Subtitle 2",
    data: "2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt nisi tempore aliquam eligendi ducimus consequuntur, corrupti iste consequatur veniam, aspernatur explicabo cumque recusandae modi, tempora nam pariatur labore dolorum alias."
  },
  {
    id: 3,
    title: "Title 3",
    subtitle: "Subtitle 3",
    data: "3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt nisi tempore aliquam eligendi ducimus consequuntur, corrupti iste consequatur veniam, aspernatur explicabo cumque recusandae modi, tempora nam pariatur labore dolorum alias."
  },
  {
    id: 4,
    title: "Title 4",
    subtitle: "Subtitle 4",
    data: "4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt nisi tempore aliquam eligendi ducimus consequuntur, corrupti iste consequatur veniam, aspernatur explicabo cumque recusandae modi, tempora nam pariatur labore dolorum alias."
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
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedId, closeModal]);

  return (
    <div className="h-screen">
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
        <motion.div layout className="grid grid-cols-5 gap-5 w-full">
          <AnimatePresence>
            {items.map((item) => (
              selectedId === null || item.id !== selectedId ? (
                <motion.div
                  layout
                  key={item.id}
                  layoutId={`container-${item.id}`}
                  className={`bg-gray-600 p-8 rounded-lg shadow-lg text-center h-40 cursor-pointer ${
                    (item.id === 2 || item.id === 3) ? 'col-span-3' : 'col-span-2'
                  }`}
                  onClick={() => setSelectedId(item.id)}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.h5 layoutId={`subtitle-${item.id}`}>{item.subtitle}</motion.h5>
                  <motion.h2 layoutId={`title-${item.id}`}>{item.title}</motion.h2>
                </motion.div>
              ) : null
            ))}
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
              transition={{ duration: 0.3 }}
            />
            <motion.div
              layoutId={`container-${selectedId}`}
              className="fixed inset-0 flex items-center justify-center z-50"
              transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
            >
              <div 
                ref={modalRef}
                className="bg-gray-600 p-8 rounded-lg shadow-lg text-center relative w-full max-w-lg max-h-[80vh] overflow-auto"
              >
                <motion.h5 layoutId={`subtitle-${selectedId}`}>{selectedItem.subtitle}</motion.h5>
                <motion.h2 layoutId={`title-${selectedId}`}>{selectedItem.title}</motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {items[selectedId-1].data}
                </motion.p>
                <motion.button
                  className="absolute top-2 right-2 bg-blue-500 text-white rounded-full p-2"
                  onClick={closeModal}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <CloseIcon />
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};