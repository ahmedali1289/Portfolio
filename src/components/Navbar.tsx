import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
const Navbar = () => {
  return (
    <div className="fixed top-0 bg-transparent z-[20] w-full flex  gap-5 md:justify-between container header py-5">
      <h1 className="text-white text-[45px]">
        Ahmed Ali
        <span className="text-red-500">.</span>
      </h1>
      <div className="flex flex-row gap-5 items-center">
        <FaGithub color="white" size="2em"/>
        <FaLinkedinIn color="white" size="2em"/>
      </div>
    </div>
  );
};

export default Navbar;
