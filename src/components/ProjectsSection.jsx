import { ArrowRight, ExternalLink, Github, PlayCircle } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Learn Management System",
    description:
    "A frontend for a Learning Management System (LMS) built with Next.js, delivering intuitive user interfaces for course management, progress tracking, and student engagement, with Zustand for efficient client-side state management.",
    image: "/projects/lms.png",
    tags: ["NestJS", "Javascript", "Html", "Css"],
    demoUrl: "https://selamnew.com/",
    githubUrl: "#",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 2,
    title: "E-Commerce",
    description:
    "An e-commerce frontend built with HTML, CSS, and JavaScript, delivering a responsive and user-friendly shopping experience with dynamic product displays and seamless interactions.",
    image: "/projects/js.png",
    tags: ["Javascript", "Html", "Css"],
    demoUrl: "#",
    githubUrl: "#",
    videoUrl: "https://www.youtube.com/watch?v=Kh6VIzkX5Ts"
  },
  {
    id: 3,
    title: "Market Place",
    description:
    "A full-featured marketplace platform built with Django, featuring secure authentication, product management, and order processing. The backend handles business logic and data flow, while the frontend delivers a clean, responsive user experience using Django templates or React.",
    image: "/projects/microserives.png",
    tags: ["Django", "Python3", "Docker-file", "Html", "Css"],
    demoUrl: "#",
    githubUrl: "#",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
];

export const ProjectsSection = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          These projects reflect my backend-first full-stack capabilities — from complex architectures to clean interfaces and secure systems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <button
                  onClick={() => setActiveVideo(project.videoUrl)}
                  className="absolute top-2 right-2 p-1 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition"
                >
                  <PlayCircle size={20} />
                </button>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {activeVideo && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="relative w-full max-w-3xl aspect-video">
              <iframe
                src={activeVideo.replace("watch?v=", "embed/")}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              ></iframe>
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-2 right-2 bg-white text-black rounded-full px-2 py-1 hover:bg-red-600 hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Yabiti"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
