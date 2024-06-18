import React from "react";
import { Card, CardBody, Image } from "@nextui-org/react";
import { motion } from "framer-motion";

type Project = {
    image: string;
    title: string;
    content: string;
    subtext: string;
    tech_stack: string[];
    url: string;
};

const projects: Project[] = [
    {
        image: "https://i.ibb.co/9hBRs7V/6424d753f8eb7a9e69c372fc-Gantt-Chart-Online-Software-Instagantt-Ideation-2.webp",
        title: "Frontend Radio",
        content: "Lorem ipsum dolor sit amet. Est dolorem voluptas et ipsa illum est quam sint sit amet facere est omnis consequatur. In numquam molestias qui perferendis placeat ad neque laborum in quia aliquam.",
        subtext: "yoyyoyoyoyoyoy",
        tech_stack: ["node", "express", "ReactJS"],
        url: "yo"
    },
    {
        image: "https://nextui.org/images/album-cover.png",
        title: "Frontend Radio",
        content: "Lorem ipsum dolor sit amet. Est dolorem voluptas et ipsa illum est quam sint sit amet facere est omnis consequatur. In numquam molestias qui perferendis placeat ad neque laborum in quia aliquam.",
        subtext: "yoyyoyoyoyoyoy",
        tech_stack: ["node", "express", "ReactJS"],
        url: "yo"
    },
    {
        image: "https://nextui.org/images/album-cover.png",
        title: "Frontend Radio",
        content: "Lorem ipsum dolor sit amet. Est dolorem voluptas et ipsa illum est quam sint sit amet facere est omnis consequatur. In numquam molestias qui perferendis placeat ad neque laborum in quia aliquam.",
        subtext: "yoyyoyoyoyoyoy",
        tech_stack: ["node", "express", "ReactJS"],
        url: "yo"
    },
    {
        image: "https://nextui.org/images/album-cover.png",
        title: "Frontend Radio",
        content: "Lorem ipsum dolor sit amet. Est dolorem voluptas et ipsa illum est quam sint sit amet facere est omnis consequatur. In numquam molestias qui perferendis placeat ad neque laborum in quia aliquam.",
        subtext: "yoyyoyoyoyoyoy",
        tech_stack: ["node", "express", "ReactJS"],
        url: "yo"
    }
];

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.5
        }
    }
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

type WorkProps = {
    projects: Project[];
};

const Work: React.FC<WorkProps> = ({ projects }) => {

    return (
        <motion.div
            // className="flex justify-center items-center flex-wrap gap-6 gap-y-11 p-5"
            className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-6"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {projects.map((project, index) => (
                <motion.div key={index} variants={item}>
                    <Card
                        isBlurred
                        className="border-none bg-background/60 dark:bg-default-100/50 w-[370px] sm:w-[420px] md:w-[500px] lg:w-[540px] xl:w-[610px] mx-auto"
                        shadow="sm"
                    >
                        <CardBody>
                            <div className="grid grid-cols-6 lg:grid-cols-12 gap-6 md:gap-4">
                                <div className="relative col-span-6 lg:col-span-5">
                                    <Image
                                        alt="Album cover"
                                        className="object-cover lg:h-60"
                                        shadow="md"
                                        src={project.image}
                                        width="100%"
                                    />
                                </div>
                                <div className="flex flex-col col-span-6 lg:col-span-7 justify-between">
                                    <div className="flex flex-col gap-0">
                                        <h1 className="text-2xl font-medium my-2">{project.title}</h1>
                                        <h3 className="text-foreground/90">{project.content}</h3>
                                        <p className="text-small text-foreground/80">{project.subtext}</p>
                                    </div>
                                    <div className="flex flex-col mt-3 gap-1">
                                        <div className="font-semibold flex justify-between">
                                            <p className="text-small text-foreground/50">Visit</p>
                                            <p className="text-small text-foreground/50">Github</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default function App() {
    return <Work projects={projects} />;
}
