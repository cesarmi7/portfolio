"use client";
import React, {useState, useRef} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag  from './ProjectTag';
import {motion, useInView} from "framer-motion";

const projectsData = [
{
    id:1,
    title: "LlamaStudio Website",
    description: "LlamaStudio is a vibrant travel blog designed to share experiences, tips, and insights from various countries. It serves as a resource for travelers, featuring stories, photographs, and practical information.",
    image: "/images/llamastudio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/cesarmi7/blog",
    previewUrl: "https://llamastudio.netlify.app",
},
{
    id:2,
    title: "Pathfinder App",
    description: "This project is a visual demonstration of the Dijkstra algorithm, a pathfinding algorithm that finds the shortest path between two nodes in a graph. It's built using React and showcases interactive visualization of the algorithm in action. Users can visualize the algorithm's step-by-step process in finding the most optimal path.",
    image: "/images/pathfinder.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/cesarmi7/pathfindervisualizer",
    previewUrl: "https://pathfinderrr.netlify.app",
},
{
    id:3,
    title: "Weather App",
    description: "This weather application provides real-time weather updates for any location entered by the user. It utilizes the OpenWeatherMap API to fetch weather data, including temperature, humidity, wind speed, and weather conditions (clear, rain, snow, etc.).",
    image: "/images/weatherapp.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/cesarmi7/weather-app",
    previewUrl: "https://weatherapp-cesar.netlify.app",
},
];

const ProjectsSection = () => {

  const [tag, setTag] = useState("All");

  const ref = useRef(null);

  const isInView = useInView(ref, {once:true});
  
  const handleTabChange = (newTag) => {
    
    setTag(newTag);

  };

  const filteredProjects = projectsData.filter((project) => 

    project.tag.includes(tag)
  
    );

  const cardVariants = {
    initial: {y: 50, opacity: 0},
    animate: {y: 0, opacity: 1},
  };

  return (
    <section>
        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-4'>
            My Projects
        </h2>
        <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
            <ProjectTag 
            onClick={handleTabChange} 
            name="All" 
            isSelected={tag === "All"} 
            />
            <ProjectTag 
            onClick={handleTabChange} 
            name="Web" 
            isSelected={tag === "Web"} 
            />
        </div>
        <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {filteredProjects.map((project, index) => (
            <motion.li 
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate": "initial"}
            transition={{duration: 0.3, delay: index * 0.4}}>
            <ProjectCard 
            key={project.id} 
            title={project.title} 
            description={project.description} 
            imgUrl={project.image} 
            tag={project}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
            />
            </motion.li>
            ))}
        </ul>
    </section>
  )
}

export default ProjectsSection