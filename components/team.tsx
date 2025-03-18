"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const team = [
  {
    name: "Deniz Karaca",
    role: "Leader",
    bio: "Leads the team with passion and dedication, always looking for innovative solutions.",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQEIcr-B_HBrcw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723659809335?e=1747872000&v=beta&t=oYTGdLwJ-ljZQZDr3UuywD2rzdOSl65bJS8qVL327Ko",
    social: {
      linkedin: "https://www.linkedin.com/in/deniz-karaca0/",
      github: "https://github.com/denizscodes",
    },
  },
  {
    name: "Savaş Takan",
    role: "Advisor",
    bio: "Provides expert guidance in strategic planning and business development.",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQGBz-D96_YXEg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1729271691285?e=1747872000&v=beta&t=vs_pZ_KuxEniT7fJZumHCM0Bpb5kAIF2Fe8pPu-t7Ng",
    social: {
      linkedin: "https://www.linkedin.com/in/savastakan/",
      github: "#",
    },
  },
  {
    name: "Beran Kemal",
    role: "Co-leader",
    bio: "Supports the team in leadership and ensures effective collaboration for project success.",
    image: "berhanbaba.png",
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Cansu Altıntaş",
    role: "Organization Leader",
    bio: "Specializes in organizing and streamlining operations for optimal team performance.",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQF5lQFqN3y16A/profile-displayphoto-shrink_400_400/B4DZPfQPbkHUAk-/0/1734617398319?e=1747872000&v=beta&t=uKare1-6z1h7eXdTZXSyxC-5qVxzrRpMk25oaNYkUFc",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
];

export function Team() {
  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our talented team of creatives, strategists, and developers are
              passionate about delivering exceptional results.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg aspect-square mb-4">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={member.social.twitter}
                    aria-label={`${member.name}'s Twitter`}
                  >
                    <Button
                      size="icon"
                      variant="ghost"
                      className="text-white hover:text-primary hover:bg-white/10"
                    >
                      <Twitter className="h-5 w-5" />
                    </Button>
                  </a>
                  <a
                    href={member.social.linkedin}
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Button
                      size="icon"
                      variant="ghost"
                      className="text-white hover:text-primary hover:bg-white/10"
                    >
                      <Linkedin className="h-5 w-5" />
                    </Button>
                  </a>
                  <a
                    href={member.social.github}
                    aria-label={`${member.name}'s GitHub`}
                  >
                    <Button
                      size="icon"
                      variant="ghost"
                      className="text-white hover:text-primary hover:bg-white/10"
                    >
                      <Github className="h-5 w-5" />
                    </Button>
                  </a>
                </div>
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-primary mb-2">{member.role}</p>
              <p className="text-muted-foreground">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
