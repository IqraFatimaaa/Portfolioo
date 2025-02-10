import React, { useState } from "react";
import projects from "./components/projects"; // Adjust path based on your project structure

const PortfolioPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="bg-gray-100 font-sans">
      {/* Navigation Bar */}
      <header className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-lg font-bold text-gray-700">Portfolio</h1>
          <nav>
            <ul className="flex space-x-6 font-extrabold">
              <li>
                <a
                  href="#about"
                  className="text-gray-600 hover:text-purple-600"
                >
                  About me
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-600 hover:text-purple-600"
                >
                  My skills
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-gray-600 hover:text-purple-600"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#certificates"
                  className="text-gray-600 hover:text-purple-600"
                >
                  Certificates
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-600 hover:text-purple-600"
                >
                  Contacts
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-screen flex items-center justify-center text-center"
        style={{ backgroundImage: "url('src/assets/image.jpg')" }}
      >
        <div>
          <h1 className="text-2xl font-bold text-gray-800 ">
            Hi My Name Is Iqra Nadeem <br></br>Welcome To My Portfolio Website
          </h1>

          <a
            href="src\assets\cvv.pdf"
            download
            className="mt-6 px-6 py-3 bg-purple-600 text-white text-lg rounded-full shadow-md hover:bg-purple-700 inline-block"
          >
            Download the CV
          </a>
        </div>
      </section>

      {/* About Me Section */}
      <section
        id="about"
        className="bg-cover bg-center h-screen flex items-center justify-center"
        style={{ backgroundImage: "url('/src/assets/about1.jpg')" }}
      >
        <div className="bg-white bg-opacity-80 w-3/4 md:w-2/3 lg:w-3/5 xl:w-1/2 p-16 rounded-lg shadow-lg flex items-center justify-between transition-transform duration-150 hover:scale-105 hover:shadow-[0_0_20px_10px_rgba(128,0,255,0.5)]">
          {/* About Me Text */}
          <div className="w-3/5 pr-10">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
              About Me
            </h2>
            <p className="text-sm font-semibold text-gray-700 leading-relaxed">
              Hi! I’m Iqra Nadeem, a software developer passionate about machine
              learning, artificial intelligence, and web development. I enjoy
              exploring innovative technologies to build intelligent and
              scalable solutions. With expertise in deep learning, NLP, and
              AI-driven applications, I focus on creating seamless and
              user-centric digital experiences. Always eager to learn and grow,
              I thrive on solving complex problems and pushing the boundaries of
              technology. Let’s connect and innovate together!
            </p>
          </div>

          {/* Image Placeholder */}
          <div className="w-80 h-80 border-4 border-gray-400 shadow-lg">
            <img
              src="src/assets/pico.png" // Replace with your actual image path
              alt="Iqra Nadeem"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio">
        <div className="flex flex-col items-center justify-center py-10 bg-sky-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">Portfolio</h2>

          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md-grid-cols-3 lg:grid-cols-4 gap-6 px-6">
            {/* Project Card */}
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative bg-white rounded-lg shadow-md overflow-hidden group transition-all duration-300 hover:shadow-neon"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-70 text-white p-4 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-bold">{project.title}</h3>
                  <p className="text-sm mt-2">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          <h4 className="text-xl font-small text-gray-800 mt-12">
            Note: All projects code is available on my GitHub account publicly,
            link given below.
          </h4>
        </div>
      </section>

      <style>
        {`
          .hover\:shadow-neon:hover {
            box-shadow: 0 0 10px #00ffff, 0 0 40px #00ffff;
          }
        `}
      </style>
      <section id="skills" className="py-5 bg-sky-200">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Skills</h2>
        </div>
        <div className="container mx-auto grid grid-cols-1 gap-8 px-6">
          {/* First Row */}
          <div className="grid grid-cols-4 gap-6">
            <div className="flex flex-col items-center skill-card">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="JavaScript"
                className="skill-icon"
              />
              <p className="mt-2 text-lg font-medium text-gray-800">
                JavaScript
              </p>
            </div>
            <div className="flex flex-col items-center skill-card">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="React"
                className="skill-icon"
              />
              <p className="mt-2 text-lg font-medium text-gray-800">React</p>
            </div>
            <div className="flex flex-col items-center skill-card">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg"
                alt="Bootstrap"
                className="skill-icon"
              />
              <p className="mt-2 text-lg font-medium text-gray-800">
                Bootstrap
              </p>
            </div>
            <div className="flex flex-col items-center skill-card">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt="HTML5"
                className="skill-icon"
              />
              <p className="mt-2 text-lg font-medium text-gray-800">HTML5</p>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-4 gap-6">
            <div className="flex flex-col items-center skill-card">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                alt="Redux"
                className="skill-icon"
              />
              <p className="mt-2 text-lg font-medium text-gray-800">Redux</p>
            </div>
            <div className="flex flex-col items-center skill-card">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                alt="TypeScript"
                className="skill-icon"
              />
              <p className="mt-2 text-lg font-medium text-gray-800">
                TypeScript
              </p>
            </div>
            <div className="flex flex-col items-center skill-card">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                alt="Python"
                className="skill-icon"
              />
              <p className="mt-2 text-lg font-medium text-gray-800">Python</p>
            </div>
            <div className="flex flex-col items-center skill-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 154"
                className="skill-icon"
                fill="none"
              >
                <path
                  fill="#06B6D4"
                  d="M128 0c-34.4 0-57.6 20.8-69.6 62.4 13.6-20 28.8-24.8 45.6-14.4 6.4 4 11.2 10.4 16 18.4 12.8 20 28.8 42.4 67.2 42.4 34.4 0 57.6-20.8 69.6-62.4-13.6 20-28.8 24.8-45.6 14.4-6.4-4-11.2-10.4-16-18.4-12.8-20-28.8-42.4-67.2-42.4Z"
                />
              </svg>
              <p className="mt-2 text-lg font-medium text-gray-800">
                TailwindCSS
              </p>
            </div>
          </div>

          {/* Additional Skills */}
          <div className="grid grid-cols-4 gap-6">
            <div className="flex flex-col items-center skill-card">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                alt="Firebase"
                className="skill-icon"
              />
              <p className="mt-2 text-lg font-medium text-gray-800">Firebase</p>
            </div>
            <div className="flex flex-col items-center skill-card">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                alt="Git"
                className="skill-icon"
              />
              <p className="mt-2 text-lg font-medium text-gray-800">Git</p>
            </div>
            <div className="flex flex-col items-center skill-card">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="GitHub"
                className="skill-icon"
              />
              <p className="mt-2 text-lg font-medium text-gray-800">GitHub</p>
            </div>
            <div className="flex flex-col items-center skill-card">
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons/icons/figma.svg"
                alt="Figma"
                className="skill-icon"
              />
              <p className="mt-2 text-lg font-medium text-gray-800">Figma</p>
            </div>
          </div>
        </div>
      </section>

      <style>
        {`
          .skill-icon {
            width: 5rem;
            height: 5rem;
            border-radius: 50%;
            border: 2px solid #ccc;
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          }
          .skill-card:hover .skill-icon {
            transform: scale(1.1);
            box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.4);
          }
        `}
      </style>

      <section
        id="certificates"
        className="py-12"
        style={{
          backgroundColor: "#a3d8f4", // PMS 2975 Blue
        }}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Certificates</h2>
          <p className="text-lg text-gray-700 mt-2">
            Showcasing my achievements and completed courses
          </p>
        </div>

        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-10">
          {/* Certificate Cards */}
          {[
            {
              img: "src/assets/ai-certificate.PNG",
              title: "AI/ML IBM Certified",
            },
            {
              img: "src/assets/javascript.PNG",
              title: "Javascript Coursera Certified",
            },
            {
              img: "src/assets/mongodb.PNG",
              title: "MongoDb Official Certification",
            },
            {
              img: "src/assets/figma.PNG",
              title: "Figma Course Coursera Certified",
            },
            {
              img: "src/assets/technets.jpg",
              title: "Internship",
              description:
                "Three Months Internship At Tech Net Cloud (Karachi)",
            },
            {
              img: "src/assets/beeneural.jpg",
              title: "Internship",
              description: "Internship At BeeNeural Network (Gilgit)",
            },
          ].map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-blue-400"
              style={{ maxWidth: "95%", margin: "auto" }}
            >
              <img
                src={cert.img}
                alt={cert.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800">
                  {cert.title}
                </h3>
                {cert.description && (
                  <p className="text-gray-600 mt-2 text-sm">
                    {cert.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="py-20"
        style={{
          backgroundColor: "#f9f9f9",
        }}
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
          {/* Image Section */}
          <div className="flex justify-center items-center">
            <img
              src="src\assets\contact.PNG"
              alt="Contact Section"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Contact Form Section */}

          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Feel free to reach out for collaborations
            </p>
            <form
              className="space-y-6"
              action="https://formsubmit.co/aa8a0347748bc175cb0403cd5f501a4f"
              method="POST"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name Fields */}
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="fname"
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lname"
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Email"
                />
              </div>
              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-sky-300 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <footer className="py-12 bg-black text-white text-center">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          {/* Left Section: WeChat QR Code */}
          <div className="mb-6 md:mb-0 md:w-1/3 text-left ml-7">
            <h3 className="text-xl font-semibold mb-2">Connect on WeChat</h3>
            <div className="w-36 h-32 border border-gray-700 rounded-md bg-white flex items-center justify-center mt-10">
              <img
                src="src\assets\we.jpg" // Replace with certificate image URL
                alt="Certificate 4"
              />
            </div>
          </div>

          {/* Center Section: Portfolio Details */}
          <div className="md:w-1/3">
            {/* Title */}
            <h2 className="text-2xl font-bold mb-2">Iqra's Portfolio</h2>
            {/* Description */}
            <p className="text-gray-400 mb-6">
              Welcome to my portfolio! Here, you'll find my projects, skills,
              and achievements. Let's connect and build something amazing
              together.
            </p>
            {/* Social Icons */}
            <div className="flex justify-center space-x-6 mb-6">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/iqraaa5365/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.333 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.333-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.062-1.366.333-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.265-.058 1.645-.07 4.849-.07M12 0C8.741 0 8.332.013 7.052.072c-1.411.065-2.684.337-3.779 1.432C2.34 2.66 2.068 3.933 2.004 5.344.013 8.332 0 8.741 0 12s.013 3.668.072 4.948c.065 1.411.337 2.684 1.432 3.779 1.095 1.095 2.368 1.367 3.779 1.432 1.28.059 1.689.072 4.948.072s3.668-.013 4.948-.072c1.411-.065 2.684-.337 3.779-1.432 1.095-1.095 1.367-2.368 1.432-3.779.059-1.28.072-1.689.072-4.948s-.013-3.668-.072-4.948c-.065-1.411-.337-2.684-1.432-3.779C19.735 2.34 18.462 2.068 17.051 2.004 15.771.013 15.362 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.124a3.962 3.962 0 1 1 0-7.924 3.962 3.962 0 0 1 0 7.924zm6.406-11.845a1.44 1.44 0 1 0-2.88 0 1.44 1.44 0 0 0 2.88 0z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/iqra-nadeem-8a6b79239/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.75 0-5 2.25-5 5v14c0 2.75 2.25 5 5 5h14c2.75 0 5-2.25 5-5v-14c0-2.75-2.25-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.285c-.966 0-1.75-.79-1.75-1.757s.784-1.757 1.75-1.757c.966 0 1.75.79 1.75 1.757s-.784 1.757-1.75 1.757zm13.5 10.285h-3v-4.5c0-1.103-.898-2-2-2s-2 .897-2 2v4.5h-3v-9h3v1.367c.758-.92 2.071-1.367 3.5-1.367 2.481 0 4.5 2.019 4.5 4.5v4.5z" />
                </svg>
              </a>
              {/* GitHub */}
              <a
                href="https://github.com/IqraFatimaaa"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.614-4.042-1.614-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.931 0-1.31.468-2.381 1.235-3.221-.123-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.287-1.552 3.293-1.23 3.293-1.23.656 1.653.244 2.874.12 3.176.77.84 1.232 1.911 1.232 3.221 0 4.609-2.807 5.623-5.479 5.92.429.371.823 1.102.823 2.222 0 1.606-.015 2.903-.015 3.293 0 .319.216.694.825.576C20.565 22.092 24 17.592 24 12.297 24 5.373 18.627.297 12 .297z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Section: Copyright */}
          <div className="md:w-1/3 border-t md:border-t-0 border-gray-700 pt-4 md:pt-0 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Iqra's Portfolio. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioPage;
