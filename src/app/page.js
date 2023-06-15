import Head from "next/head";
import Image from "next/image";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  FaYoutube,
  FaYoutubeSquare,
  FaGithubSquare,
} from "react-icons/fa";

export default function Home() {
  var about =
    "I am very passionate about learning something new and challenging things, so I always try to keep growing and improving my skills. I love coding and want to pursue a career in it.";
  var name = "Adam Basha";
  var image_url =
    "https://i0.wp.com/adambashaahmednaji.com/wp-content/uploads/2023/03/295050490_588427452639580_4228596127967383968_n-e1678714008421.jpg";
    const handleContactClick = () => {
      const recipient = "recipient@example.com";
      const subject = "Contact Request";
      const body = `Name: ${contactName}\nEmail: ${contactEmail}\n\n${contactMessage}`;
  
      const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
  
      window.location.href = mailtoLink;
    };
  return (

    <div>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">{name}</h1>
            <ul className="flex items-center">
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#Projects"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#Reviews"
                >
                  Reviews
                </a>
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#Contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col items-center p-10 py-10 text-center">
            <Image
              src={image_url}
              width={"200"}
              height={"200"}
              className="rounded-full"
            ></Image>
            <div id="icons">
              <ul className="flex justify-between">
                <a href="https://www.youtube.com/@bashacoder" target="_blank" className="text-white hover:text-teal-500">

                  <li>
                    <FaYoutubeSquare className="w-10 h-10"></FaYoutubeSquare>
                  </li>
                </a>
                <a href="https://github.com/Bashamega" target="_blank" className="text-white hover:text-teal-500">
                  <li>
                    <FaGithubSquare className="w-10 h-10"></FaGithubSquare>
                  </li>
                </a>
              </ul>
            </div>

            <h2 className="text-5xl py-2  text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              {name}
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Developer - Teacher
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              {about}
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap text items-center">
            <img
              src="https://camo.githubusercontent.com/249f9e61b49db3d8b56a4b52692cf5a27b6a8357c7c9c9ca2bb1b75db16bf2fd/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67733f757365726e616d653d62617368616d6567612673686f775f69636f6e733d74727565266c6f63616c653d656e266c61796f75743d636f6d70616374"
              alt="Image 1"
              class="w-5/12 h-6/12 mr-5"
            ></img>
            <img
              src="https://camo.githubusercontent.com/d6ded3ab3407073c5026cd529052a18e32d4f9ad312cdbcab1c84980a28a9713/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d62617368616d6567612673686f775f69636f6e733d74727565266c6f63616c653d656e"
              alt="Image 2"
              class="w-6/12 h-6/12"
            ></img>
          </div>
        </section>
        <hr></hr>
        <section className="mt-10 text-center" id="Projects">
          <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-4xl">
            Projects
          </h2>
          <div className="flex flex-wrap justify-center items-center">
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="flex-1 bg-white rounded-full p-6 text-black w-full lg:w-1/2 hover:p-10">
                <a href="https://educpk.github.io/">
                  <h1>Edu CPK</h1>
                  <p>
                    EduCPK is an educational coding website that provides a simple and
                    intuitive text editor for learners to practice coding in various
                    programming languages. It aims to help users improve their coding
                    skills through hands-on practice and experimentation.
                  </p>
                </a>
              </div>
              <div className="flex-1 bg-white rounded-full p-6 text-black w-full lg:w-1/2 hover:p-10">
                <a href="https://github.com/Bashamega/eduquiz">
                  <h1>Edu Quiz</h1>
                  <p>A simple quiz app built using HTML, CSS, and JS</p>
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="flex-1 bg-white rounded-full p-6 text-black w-full lg:w-1/2 hover:p-10">
                <a href="https://microsoftedge.microsoft.com/addons/detail/cpk/okabgcamgefdfhhlpkdbkohiickenfgg">
                  <h1>Edu CPK Extension</h1>
                  <p>
                  CPK. This extension helps coders run html code on the web.
                  </p>
                </a>
              </div>
              <div className="flex-1 bg-white rounded-full p-6 text-black w-full lg:w-1/2 hover:p-10">
                <a href="https://microsoftedge.microsoft.com/addons/detail/scratch-dark-mode/kcfjdhhbmklaiijndlffnoihjlobacnh">
                  <h1>Scratch dark mode</h1>
                  <p>This is a dark mode extension for scratch.
</p>
                </a>
              </div>
            </div>
          </div>
        </section>
        <hr></hr>
        <section className="mt-10 text-center" id="Reviews">
          <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-4xl">
            Reviews
          </h2>
          <div className="flex flex-wrap justify-center items-center">
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="flex-1 bg-white rounded-md p-6 text-black w-full lg:w-1/2 hover:p-10">
                <h1>Anonymous</h1>
                <p>
                Coder_master has been very helpful in me overcoming various coding challenges while working on my personal projects.<br></br> Not only has he been able to address all of my issues, but when asked, he has also been patient enough to explain each step along the way.<br></br> He's consistently responsive by promptly addressing my questions and offering assistance whenever I need it.<br></br>

As a piece of constructive criticism, I would be to encourage more independent problem-solving rather than immediately providing the solution. While I appreciate his willingness to solve the problem directly, I believe it would be more beneficial for my learning if he initially pointed me in the right direction. If I still need further assistance, then he could provide additional support.

Overall, my experience with Coder_master has been positive, and I am  grateful for the invaluable help he has provided me.
                </p>
              </div>
              <div className="flex-1 bg-white rounded-md p-6 text-black w-full lg:w-1/2 hover:p-10">
                <h1>Anonymous</h1>
                <p>
                Thank you @coder_master  for creating an email verifier for me, it’s very helpful and I will be using it a bunch. Very quick delivery and very satisfied.
                </p>
              </div>
            </div>
          </div>
        </section>
        <hr></hr>
        <section  id="Contact" className=" mt-10 mb-10">
            <a href="https://adambashaahmednaji.com/contact/">
              <button
                className="bg-gradient-to-r from-cyan-500 text- text-white px-4 py-2 border-none rounded-md  w-full"
                
              >
                Contact
              </button>
            </a>
            

        
        </section>
        
        <footer className="bg-gray-900 text-white py-8 px-4">
          <div className="container mx-auto text-center">
            <p className="text-sm">
              &copy; 2023 {name}. All rights reserved.
            </p>
            <ul className="flex justify-center mt-4">
              <li className="mx-2">
                <a
                  className="text-white hover:text-teal-500"
                  href="https://www.youtube.com/@bashacoder"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutubeSquare className="w-6 h-6" />
                </a>
              </li>
              <li className="mx-2">
                <a
                  className="text-white hover:text-teal-500"
                  href="https://github.com/Bashamega"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithubSquare className="w-6 h-6" />
                </a>
              </li>
            </ul>
          </div>
        </footer>

      </main>
      
    </div>
  );
}
