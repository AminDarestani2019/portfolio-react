import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Ecommerce app(ASP.Net core)",
    description: "Acquired practical experience in microservice architecture, DDD, and Razor-based web development by completing Mehmet Ozkaya’s advanced ASP.NET Core Full Stack course.",
    image: "/projects/project1.png",
    tags: ["ASP.net core", "Razor pages", "DDD"],
    demoUrl: "#",
    githubUrl: "https://github.com/AminDarestani2019/EShopMicroservices",
  },
  {
    id: 2,
    title: "Ecommerce app(ASP.net core + Angular)",
    description:
      "Developed a full-featured e-commerce web application using ASP.NET Core 8 and Angular, implementing features such as user authentication, product catalog, shopping cart, order processing, and RESTful API integration. Focused on performance, modular architecture, and responsive UI.",
    image: "/projects/project2.png",
    tags: ["TypeScript", "ASP.net core"],
    demoUrl: "#",
    githubUrl: "https://github.com/AminDarestani2019/ecommerce",
  },
  {
    id: 3,
    title: "Food order app(React+nodejs)",
    description:
      "Developed a responsive Food Order application using React for the frontend and Node.js for the backend. The app supports real-time menu browsing, cart management, and order placement. Built with RESTful APIs and clean UI design.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js","tailwindcss"],
    demoUrl: "#",
    githubUrl: "https://github.com/AminDarestani2019/foodOrderApp",
  },
    {
    id: 4,
    title: "Language quiz app(React + tailwindcss)",
    description:
      "Created a dynamic language quiz application using React, featuring interactive multiple-choice questions, real-time scoring, and responsive UI. Designed to support vocabulary learning and self-assessment.",
    image: "/projects/project4.png",
    tags: ["React", "tailwindcss"],
    demoUrl: "#",
    githubUrl: "https://github.com/AminDarestani2019/LanguageQuiz",
  },
  {
    id: 5,
    title: "Place picker app(React + tailwindcss)",
    description:
      "Built a React-based location chooser app for selecting travel or picnic destinations. Includes visual cards, user selection memory, and a lightweight, responsive UI for an engaging experience.",
    image: "/projects/project5.png",
    tags: ["React", "tailwindcss"],
    demoUrl: "#",
    githubUrl: "https://github.com/AminDarestani2019/placeChooser",
  },
    {
    id: 6,
    title: "Place picker app(React + tailwindcss)",
    description:
      "Developed an employee task management application using React and TailwindCSS, allowing users to create, assign, and track tasks with a clean and responsive user interface. Designed with a focus on usability, task filtering, and state management.",
    image: "/projects/project6.png",
    tags: ["React", "tailwindcss"],
    demoUrl: "#",
    githubUrl: "https://github.com/AminDarestani2019/ProjectManagement",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={`${project.id}-${tag}`} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
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

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/machadop1407"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
