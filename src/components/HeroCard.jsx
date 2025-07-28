import heroImage from "../assets/profileHeadShot.png"; // Adjust the path as necessary
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
const HeroCard = () => {
  return (
    <div className="hero h-full flex flex-col items-center justify-center text-center border-2 rounded-lg shadow-lg p-8 ">
      <h1 className="text-4xl font-bold">Welcome to My Portfolio!</h1>
      <p className="mt-2 text-lg text-base-content">
        Just a CS graduate who is a passionate developer with experience in
        building web applications.
      </p>
      <div className="mt-4 flex flex-wrap justify-center gap-4">
        <button className="btn btn-primary" aria-label="View Projects">
          <a href="#projects">View Projects</a>
        </button>
        <button className="btn btn-secondary" aria-label="Contact Me">
          <a href="#contact">Contact Me</a>
        </button>
      </div>
      <div className="mt-6">
        <img
          src={heroImage}
          alt="Hero"
          className="rounded-lg shadow-lg w-full max-w-xs h-auto object-cover"
        />
      </div>
      <div className="mt-2">
        <p className="text-sm text-base-content justify-center">
          Follow me on{" "}
        </p>
        <div className="flex space-x-4 mt-2">
          <a
            href="https://linkedin.com/in/ryanlov"
            className="hover:text-blue-500 hover:scale-110"
          >
            <FaLinkedin size={"3em"} />
          </a>
          <a href="https://github.com/rllov" className=" hover:scale-110">
            <FaGithub size={"3em"} />
          </a>
          <a
            href="https://instagram.com/ryan_lov168"
            className="transition-transform hover:scale-110
            hover:bg-linear-240 hover:bg-gradient-to-r from-pink-500 to-yellow-500 hover:text-white rounded-full"
          >
            <FaInstagram size="3em" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
