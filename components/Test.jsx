import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

export const Test = () => {
  const [selectedId, setSelectedId] = useState(null);

  // Find the selected item object based on the selectedId
  const selectedItem = items.find((item) => item.id === selectedId);

  return (
    <>
      {items.map((item, index) => (
        <motion.div
          key={index}
          layoutId={item.id}
          onClick={() => setSelectedId(item.id)}
        >
          <motion.h5>{item.subtitle}</motion.h5>
          <motion.h2>{item.title}</motion.h2>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedId && selectedItem && (
          <motion.div layoutId={selectedId}>
            <motion.h5>{selectedItem.subtitle}</motion.h5>
            <motion.h2>{selectedItem.title}</motion.h2>
            <motion.button onClick={() => setSelectedId(null)}>
              Close
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};