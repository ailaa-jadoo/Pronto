import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import CloseIcon from '@mui/icons-material/Close';

const items = [
  {
    id: 1,
    title: "Title 1",
    subtitle: "Subtitle 1",
  },
  {
    id: 2,
    title: "Title 2",
    subtitle: "Subtitle 2",
  },
  {
    id: 3,
    title: "Title 3",
    subtitle: "Subtitle 3",
  },
  {
    id: 4,
    title: "Title 4",
    subtitle: "Subtitle 4",
  },
];

export const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const selectedItem = items.find((item) => item.id === selectedId);

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
        <div className="grid grid-cols-5 gap-5 w-full">
          <motion.div
            key={items[0].id}
            layoutId={items[0].id}
            className="bg-gray-600 p-8 rounded-lg shadow-lg text-center h-40 cursor-pointer col-span-3"
            onClick={() => setSelectedId(items[0].id)}
          >
            <motion.h5>{items[0].subtitle}</motion.h5>
            <motion.h2>{items[0].title}</motion.h2>
          </motion.div>

          <motion.div
            key={items[1].id}
            layoutId={items[1].id}
            className="bg-gray-600 p-8 rounded-lg shadow-lg text-center h-40 cursor-pointer col-span-2"
            onClick={() => setSelectedId(items[1].id)}
          >
            <motion.h5>{items[1].subtitle}</motion.h5>
            <motion.h2>{items[1].title}</motion.h2>
          </motion.div>

          <motion.div
            key={items[2].id}
            layoutId={items[2].id}
            className="bg-gray-600 p-8 rounded-lg shadow-lg text-center h-40 cursor-pointer col-span-2"
            onClick={() => setSelectedId(items[2].id)}
          >
            <motion.h5>{items[2].subtitle}</motion.h5>
            <motion.h2>{items[2].title}</motion.h2>
          </motion.div>

          <motion.div
            key={items[3].id}
            layoutId={items[3].id}
            className="bg-gray-600 p-8 rounded-lg shadow-lg text-center h-40 cursor-pointer col-span-3"
            onClick={() => setSelectedId(items[3].id)}
          >
            <motion.h5>{items[3].subtitle}</motion.h5>
            <motion.h2>{items[3].title}</motion.h2>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {selectedId && selectedItem && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
              onClick={() => setSelectedId(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              layoutId={selectedId}
              className="fixed inset-0 flex items-center justify-center z-50"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <div className="bg-gray-600 p-8 rounded-lg shadow-lg text-center relative h-72 w-72">
                <motion.h5>{selectedItem.subtitle}</motion.h5>
                <motion.h2>{selectedItem.title}</motion.h2>
                <motion.button
                  className="absolute top-2 right-2 bg-blue-500 text-white rounded-full p-2"
                  onClick={() => setSelectedId(null)}
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
