import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Backend-Django Developer
            </h3>
            <p className="text-muted-foreground mb-4">
  I'm a full-stack developer with a strong emphasis on backend development, specializing in Django. I build robust, secure, and scalable web applications using Django's powerful ORM, class-based views, and REST framework. My experience includes designing clean architectures, integrating third-party APIs, optimizing database performance with PostgreSQL, and implementing secure authentication systems using JWT and OAuth2. I follow industry best practices to ensure maintainability, performance, and scalability.
</p>

<p className="text-muted-foreground">
I’ve built real-world applications including full-featured marketplace platforms with seamless frontend experiences using modern JavaScript frameworks, while leveraging Python and Django on the backend to handle complex business logic, secure payments, and scalable data management.
</p>


            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Backend Development</h4>
                  <p className="text-muted-foreground">
                    Building scalable services, secure APIs, and distributed systems using modern backend technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Building Web Experiences with React & Next.js</h4>
                  <p className="text-muted-foreground">
                  Building smooth web apps with React and Next.js, connecting frontend and backend seamlessly.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">System Design & Ops</h4>
                  <p className="text-muted-foreground">
                    Architecting services, securing infrastructure, and managing deployments using modern DevOps practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
