"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />

      {/* Content */}
      <div className="container mx-auto px-4 z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Join the <span className="text-primary">GDG on Campus</span>{" "}
              Community
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              We bring together tech enthusiasts at Ankara University to
              collaborate, learn, and innovate through events and workshops.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="group"
                onClick={() => (window.location.href = "#portfolio")}
              >
                Explore Our Events
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() =>
                  (window.location.href =
                    "https://docs.google.com/forms/d/e/1FAIpQLSf2euEq7f6Fs3flqQE1h_zTKuB31o7J4VZ71VpRcCwde2bZIw/viewform?fbclid=PAZXh0bgNhZW0CMTEAAaa-H3E5cKZ-Mr8xUMtU2e4sliwkd63HC4PFecVeeTfJKZHJEUIbKZ9wSiQ_aem_SHm-Nc-eMUJD-bAJfVVOXg")
                }
              >
                Join the Community
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
              <video
                src="gdgvideo.mp4"
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                frameBorder="0"
                allow="autoplay; fullscreen"
              ></video>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-primary/20 rounded-full blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
