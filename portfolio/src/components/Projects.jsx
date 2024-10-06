import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className=" border-b border-neutral-900 pb-4">
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className=" my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((pro, index) => (
          <div key={index} className=" mb-8 flex-wrap flex lg:justify-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className=" w-full lg:w-1/4"
            >
              <a href={pro.link}>
                <img
                  src={pro.image}
                  width={300}
                  height={300}
                  className=" mb-6 rounded"
                  alt={pro.title}
                />
              </a>
            </motion.div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className=" w-full max-x-xl lg:w-3/4"
            >
              <h6 className=" mb-2 font-semibold">{pro.title}</h6>
              <p className=" mb-4 text-neutral-400">{pro.description}</p>
              {pro.technologies.map((tech, index) => (
                <span
                  key={index}
                  className=" mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
