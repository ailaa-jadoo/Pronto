import { useState, useEffect, useRef } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Poppins } from "next/font/google";
import Avatar from '@mui/material/Avatar';

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
// @ts-ignore
const AnimatedElement = ({ children }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};
// @ts-ignore
function TimelineItemWrapper({ children }) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: "easeOut",
            delay: 0.3,
          }
        }
      }}
      initial="hidden"
      animate={controls}
    >
      {children}
    </motion.div>
  );
}

export default function CustomizedTimeline() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 786);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`max-w-[1200px] mx-auto`}>
      <AnimatedElement>
        <motion.div className='text-md text-[#e0e0e0] font-thin text-center'>WHAT I HAVE DONE SO FAR</motion.div>
      </AnimatedElement>
      <AnimatedElement>
        <motion.div className='text-6xl text-center mb-10 font-extrabold'>Work Experience</motion.div>
      </AnimatedElement>

      <Timeline>
        <TimelineItemWrapper> 
          <TimelineItem className='gap-2'>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
              color="white"
              className="text-left bg-gray-800 bg-opacity-50 p-4 border-b-2 rounded-2xl"
            >
              <AnimatedElement>
                <Typography variant="h4" component="div" className={`${poppins.className} text-[#FF69B4] `}>Frontend Developer</Typography>
                <Typography variant="h6" component="div" className={`${poppins.className} text-[#FF69B4] font-light`}>Kreativ Web Solutions</Typography>
              </AnimatedElement>

              <AnimatedElement>
                <Typography className={`${poppins.className} list-disc ml-5 mt-2 leading-7`} component="ul">
                  <li>Designing and developing user interfaces using Angular ,HTML, CSS, and Bootstrap</li>
                  <li>Developing responsive UI designs and maintaining cross-browser compatibility</li>
                  <li>Assuring that all user input is validated before submitting to the backend</li>
                  <li>Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products</li>
                  <li>Merging web pages to the angular system</li>
                </Typography>
              </AnimatedElement>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <AnimatedElement>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                  <TimelineDot>
                    <Avatar
                      src="/kreative_!.png"
                      alt="Practo Logo"
                      sx={{ width: 50, height: 50 }}
                    />
                  </TimelineDot>
                </motion.div>
              </AnimatedElement>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <AnimatedElement>
                <Typography variant="h6" component="span" className={`${poppins.className} text-[#FF69B4] text-lg`}>
                  Jul 2022 - Aug 2022 (2 Months)
                </Typography>
              </AnimatedElement>
            </TimelineContent>
          </TimelineItem>
        </TimelineItemWrapper>

        <TimelineItemWrapper>
          <TimelineItem className='gap-2'>
            <TimelineOppositeContent
              sx={{ py: '12px', px: 2 }} className='mt-20'
            >
              <AnimatedElement>
                <Typography variant="h6" component="span" className={`${poppins.className} text-[#00BFFF] text-lg`}>
                  Jan 2024 - June 2024 (6 Months)
                </Typography>
              </AnimatedElement>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <AnimatedElement>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                  <TimelineDot>
                    <Avatar
                      src="/practo.png"
                      alt="Practo Logo"
                      sx={{ width: 50, height: 50 }}
                    />
                  </TimelineDot>
                </motion.div>
              </AnimatedElement>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
              color="white"
              className="text-left bg-gray-800 bg-opacity-50 p-4 border-b-2 rounded-2xl mt-20"
            >
              <AnimatedElement>
                <Typography variant="h4" component="div" className={`${poppins.className} text-[#00BFFF] `}>SDE Intern</Typography>
                <Typography variant="h6" component="div" className={`${poppins.className} text-[#00BFFF] font-light`}>Practo</Typography>
              </AnimatedElement>

              <AnimatedElement>
                <Typography className={`${poppins.className} list-disc ml-5 mt-2 leading-7`} component="ul">
                  <li>Designing and developing user interfaces using Angular ,HTML, CSS, and Bootstrap</li>
                  <li>Developing responsive UI designs and maintaining cross-browser compatibility</li>
                  <li>Assuring that all user input is validated before submitting to the backend</li>
                  <li>Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products</li>
                  <li>Merging web pages to the angular system</li>
                </Typography>
              </AnimatedElement>
            </TimelineContent>
          </TimelineItem>
        </TimelineItemWrapper>
      </Timeline>
    </div>
  );
}




// import * as React from 'react';
// import { useState, useEffect } from 'react';
// import Timeline from '@mui/lab/Timeline';
// import TimelineItem from '@mui/lab/TimelineItem';
// import TimelineSeparator from '@mui/lab/TimelineSeparator';
// import TimelineConnector from '@mui/lab/TimelineConnector';
// import TimelineContent from '@mui/lab/TimelineContent';
// import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
// import TimelineDot from '@mui/lab/TimelineDot';
// import Typography from '@mui/material/Typography';
// import { motion, useAnimation, useInView } from 'framer-motion';
// import { Poppins } from "next/font/google";
// import Avatar from '@mui/material/Avatar';

// const poppins = Poppins({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-poppins",
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// });

// // @ts-ignore
// const AnimatedElement = ({ children }) => {
//   const controls = useAnimation();
//   const ref = React.useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.2 });

//   React.useEffect(() => {
//     if (isInView) {
//       controls.start("visible");
//     }
//   }, [controls, isInView]);

//   return (
//     <motion.div
//       ref={ref}
//       variants={{
//         hidden: { opacity: 0, y: 20 },
//         visible: { opacity: 1, y: 0 }
//       }}
//       initial="hidden"
//       animate={controls}
//       transition={{ duration: 0.5, ease: "easeOut" }}
//     >
//       {children}
//     </motion.div>
//   );
// };

// // @ts-ignore
// function TimelineItemWrapper({ children }) {
//   const controls = useAnimation();
//   const ref = React.useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.5 });

//   React.useEffect(() => {
//     if (isInView) {
//       controls.start("visible");
//     }
//   }, [controls, isInView]);

//   return (
//     <motion.div
//       ref={ref}
//       variants={{
//         hidden: { opacity: 0, y: 50 },
//         visible: {
//           opacity: 1,
//           y: 0,
//           transition: {
//             duration: 0.5,
//             ease: "easeOut",
//             delay: 0.3,
//           }
//         }
//       }}
//       initial="hidden"
//       animate={controls}
//     >
//       {children}
//     </motion.div>
//   );
// }

// export default function CustomizedTimeline() {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 786);
//     };

//     // Set the initial value
//     handleResize();

//     // Add event listener
//     window.addEventListener('resize', handleResize);

//     // Remove event listener on cleanup
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <div className={`max-w-[1200px] mx-auto ${isMobile ? 'p-4' : ''}`}>
//       <AnimatedElement>
//         <motion.div className='text-md text-[#e0e0e0] font-thin text-center'>WHAT I HAVE DONE SO FAR</motion.div>
//       </AnimatedElement>
//       <AnimatedElement>
//         <motion.div className='text-6xl text-center mb-10 font-extrabold'>Work Experience</motion.div>
//       </AnimatedElement>

//       <Timeline position={isMobile ? "right" : "alternate"}>
//         <TimelineItemWrapper>
//           <TimelineItem className={`gap-2 ${isMobile ? 'flex-col' : ''}`}>
//             <TimelineOppositeContent
//               sx={{ m: 'auto 0' }}
//               align={isMobile ? "left" : "right"}
//               variant="body2"
//               color="white"
//               className={`text-left bg-gray-800 bg-opacity-50 p-4 border-b-2 rounded-2xl ${isMobile ? 'mb-4' : ''}`}
//             >
//               <AnimatedElement>
//                 <Typography variant="h4" component="div" className={`${poppins.className} text-[#FF69B4] `}>Frontend Developer</Typography>
//                 <Typography variant="h6" component="div" className={`${poppins.className} text-[#FF69B4] font-light`}>Kreativ Web Solutions</Typography>
//               </AnimatedElement>

//               <AnimatedElement>
//                 <Typography className={`${poppins.className} list-disc ml-5 mt-2 leading-7`} component="ul">
//                   <li>Designing and developing user interfaces using Angular ,HTML, CSS, and Bootstrap</li>
//                   <li>Developing responsive UI designs and maintaining cross-browser compatibility</li>
//                   <li>Assuring that all user input is validated before submitting to the backend</li>
//                   <li>Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products</li>
//                   <li>Merging web pages to the angular system</li>
//                 </Typography>
//               </AnimatedElement>
//             </TimelineOppositeContent>
//             <TimelineSeparator>
//               <TimelineConnector />
//               <AnimatedElement>
//                 <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
//                   <TimelineDot>
//                     <Avatar
//                       src="/kreative_!.png"
//                       alt="Practo Logo"
//                       sx={{ width: 50, height: 50 }}
//                     />
//                   </TimelineDot>
//                 </motion.div>
//               </AnimatedElement>
//               <TimelineConnector />
//             </TimelineSeparator>
//             <TimelineContent sx={{ py: '12px', px: 2 }} className={isMobile ? 'text-left' : ''}>
//               <AnimatedElement>
//                 <Typography variant="h6" component="span" className={`${poppins.className} text-[#FF69B4] text-lg`}>
//                   Jul 2022 - Aug 2022 (2 Months)
//                 </Typography>
//               </AnimatedElement>
//             </TimelineContent>
//           </TimelineItem>
//         </TimelineItemWrapper>

//         <TimelineItemWrapper>
//           <TimelineItem className={`gap-2 ${isMobile ? 'flex-col' : ''}`}>
//             <TimelineOppositeContent
//               sx={{ py: '12px', px: 2 }} 
//               className={`mt-20 ${isMobile ? 'text-left' : ''}`}
//             >
//               <AnimatedElement>
//                 <Typography variant="h6" component="span" className={`${poppins.className} text-[#00BFFF] text-lg`}>
//                   Jan 2024 - June 2024 (6 Months)
//                 </Typography>
//               </AnimatedElement>
//             </TimelineOppositeContent>
//             <TimelineSeparator>
//               <TimelineConnector />
//               <AnimatedElement>
//                 <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
//                   <TimelineDot>
//                     <Avatar
//                       src="/practo.png"
//                       alt="Practo Logo"
//                       sx={{ width: 50, height: 50 }}
//                     />
//                   </TimelineDot>
//                 </motion.div>
//               </AnimatedElement>
//               <TimelineConnector />
//             </TimelineSeparator>
//             <TimelineContent 
//               sx={{ m: 'auto 0' }}
//               align={isMobile ? "left" : "right"}
//               variant="body2"
//               color="white"
//               className={`text-left bg-gray-800 bg-opacity-50 p-4 border-b-2 rounded-2xl mt-20 ${isMobile ? 'mb-4' : ''}`}
//             >
//               <AnimatedElement>
//                 <Typography variant="h4" component="div" className={`${poppins.className} text-[#00BFFF] `}>SDE Intern</Typography>
//                 <Typography variant="h6" component="div" className={`${poppins.className} text-[#00BFFF] font-light`}>Practo</Typography>
//               </AnimatedElement>

//               <AnimatedElement>
//                 <Typography className={`${poppins.className} list-disc ml-5 mt-2 leading-7`} component="ul">
//                   <li>Designing and developing user interfaces using Angular ,HTML, CSS, and Bootstrap</li>
//                   <li>Developing responsive UI designs and maintaining cross-browser compatibility</li>
//                   <li>Assuring that all user input is validated before submitting to the backend</li>
//                   <li>Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products</li>
//                   <li>Merging web pages to the angular system</li>
//                 </Typography>
//               </AnimatedElement>
//             </TimelineContent>
//           </TimelineItem>
//         </TimelineItemWrapper>
//       </Timeline>
//     </div>
//   );
// }