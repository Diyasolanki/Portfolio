import Image from "next/image";

const page = () => {
  return (
    <section className="py-24 bg-white dark:bg-gray-900 px-4">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center">

        {/* Left: About Me Text */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white text-center md:text-left">
            About <span className="text-primary">Me</span>
          </h2>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-justify">
            I&apos;m <span className="font-semibold text-primary">Diya Solanki</span>, a dedicated MERN Stack Developer with a strong foundation in computer science fundamentals and backend development. I am passionate to building web applications using technologies like <strong>React, Node.js, Express, and MongoDB</strong>. I&apos;m also enthusiastic about <strong>Cloud Computing</strong> and actively explore AWS and Linux.
            <br /><br />
            I have a strong ability to <strong>handle spontaneous problems</strong> with a calm and solution-oriented mindset. Whether it&apos;s troubleshooting device issues, resolving unexpected bugs, or adapting to real-time challenges during development, I stay composed and efficient under pressure. My <strong>strong communication skills</strong> enable me to clearly convey technical details, collaborate effectively with teams, and ensure smooth understanding across both technical and non-technical audiences.
            <br /> <br />
            Beyond technical skills, I have a creative side—I enjoy <strong>story writing</strong> and expressing ideas through words. My passion for tech is balanced with my love for writing, which helps me communicate clearly and creatively. I also have experience in languages like <strong>Python, Java, C++, and C</strong>, and a solid grip on <strong>Linux and system fundamentals</strong>.
          </p>

          {/* Resume Download Button */}
          <div className="mt-8 text-center md:text-left">
            <a
              href="/Diya_resume.pdf"
              download
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg shadow hover:bg-primary/80 transition"
            >
              📄 Download Resume
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center md:justify-end mb-8 md:mb-0">
          <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden ring-4 ring-primary shadow-xl">
            <Image
              src="/Diya Photo.jpg"
              alt="Diya Solanki"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
