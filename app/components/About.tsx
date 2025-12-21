import Image from "next/image";

const About = () => {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "TailwindCSS",
    "JavaScript",
    "Node.js",
    "Express",
    "Git",
  ];

  return (
    <section id="about-section" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-center">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64 rounded-lg overflow-hidden border-2 border-blue-400/30">
              <Image
                src="/skinstric.png"
                alt="Keylan - Frontend Developer"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Bio & Skills */}
          <div>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              I&apos;m a frontend developer passionate about building beautiful,
              performant web experiences. With expertise in React and Next.js, I
              create modern applications that users love. I&apos;m
              detail-oriented, always learning, and committed to writing clean,
              maintainable code.
            </p>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">
                Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/50 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
