"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const categories = [
  "All",
  "Web Development",
  "Mobile Development",
  "AI/ML",
  "Workshops",
  "Events",
];

const projects = [
  {
    id: 1,
    title: "Web Development Workshop",
    category: "Workshops",
    image:
      "https://images.pexels.com/photos/7130472/pexels-photo-7130472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Gerçek bir görsel ekleyin
  },
  {
    id: 2,
    title: "Mobile App Development Project",
    category: "Mobile Development",
    image:
      "https://images.pexels.com/photos/7130472/pexels-photo-7130472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Gerçek bir görsel ekleyin
  },
  {
    id: 3,
    title: "AI/ML Study Jam",
    category: "AI/ML",
    image:
      "https://images.pexels.com/photos/7130472/pexels-photo-7130472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Gerçek bir görsel ekleyin
  },

  {
    id: 7,
    title: "PyTorch Workshop",
    category: "Workshops",
    image:
      "https://images.pexels.com/photos/7130472/pexels-photo-7130472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 8,
    title: "Machine Learning Project",
    category: "AI/ML",
    image:
      "https://images.pexels.com/photos/7130472/pexels-photo-7130472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 9,
    title: "DevFest Ankara",
    category: "Events",
    image:
      "https://images.pexels.com/photos/7130472/pexels-photo-7130472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Portfolio
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our latest projects, workshops, and events, showcasing our
              community's dedication to Google technologies and learning.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="mb-2"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold">
                    {project.title}
                  </h3>
                  <p className="text-white/80 mt-2">{project.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg">View All Activities</Button>
        </div>
      </div>
    </section>
  );
}
