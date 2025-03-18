"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content:
      "Our community members’ feedback on this project has been invaluable. Their input shaped our approach and made all the difference in the outcome. We couldn’t be more pleased with the results.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marketing Director, GreenLife",
    content:
      "Collaborating with this team has been a game-changer for our digital marketing strategy. We now engage with our community in a way that resonates deeply and authentically.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Founder, StyleHouse",
    content:
      "The collaborative efforts with our community helped us refine our branding. Their feedback allowed us to better serve our audience, ensuring every detail was aligned with our values.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [current, autoplay]);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Community Says
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here's how our community members have contributed to the success
              of our journey. Their experiences and feedback are at the core of
              our growth.
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-none bg-background/50 shadow-lg">
            <CardContent className="p-8">
              <div
                className="relative"
                onMouseEnter={() => setAutoplay(false)}
                onMouseLeave={() => setAutoplay(true)}
              >
                <div className="absolute -top-12 -left-12 text-primary/10">
                  <Quote size={80} />
                </div>

                <div className="relative overflow-hidden">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                  >
                    {testimonials.map((testimonial) => (
                      <div
                        key={testimonial.id}
                        className="w-full flex-shrink-0 px-4"
                      >
                        <div className="flex flex-col items-center text-center">
                          <p className="text-lg mb-8 relative z-10">
                            "{testimonial.content}"
                          </p>
                          <div className="mt-4">
                            <h4 className="font-bold">{testimonial.name}</h4>
                            <p className="text-muted-foreground">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center mt-8 gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prev}
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  {testimonials.map((_, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      size="sm"
                      onClick={() => setCurrent(index)}
                      className={`w-2 h-2 p-0 rounded-full ${
                        current === index ? "bg-primary" : "bg-muted"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={next}
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
