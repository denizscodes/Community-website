"use client";

import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Globe,
  Megaphone,
  Lightbulb,
  BarChart,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const communityServices = [
  {
    title: "Networking",
    description:
      "Connect with like-minded individuals and expand your professional circle.",
    icon: Code,
  },
  {
    title: "Collaboration",
    description:
      "Collaborate on projects and share knowledge to drive collective growth.",
    icon: Palette,
  },
  {
    title: "Skill Sharing",
    description:
      "Share your expertise and learn from others in our community events.",
    icon: Megaphone,
  },
  {
    title: "Support",
    description:
      "Get help, advice, and guidance from experienced community members.",
    icon: Lightbulb,
  },
  {
    title: "Events",
    description:
      "Join workshops, webinars, and meetups to enhance your skills.",
    icon: Globe,
  },
  {
    title: "Mentorship",
    description:
      "Become a mentor or find a mentor to grow your career together.",
    icon: BarChart,
  },
];

export function Services() {
  return (
    <section id="community" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Community
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join our vibrant community of professionals, creators, and
              innovators dedicated to helping each other grow.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communityServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full transition-all hover:shadow-md">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
