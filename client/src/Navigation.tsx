import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const linkVariants = {
  initial: {
    opacity: 0,
    y: 25,
  },
  hover: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Navigation = () => {
  const imageAddress = "/assets/icons/";
  return (
    <nav className="fixed md:relative bottom-0 h-20 w-screen md:w-20 md:h-screen bg-pallete-primary z-50">
      <div
        className="w-full h-20 md:h-40 flex flex-row
      gap-1 md:flex-col md:gap-4 items-center justify-evenly md:justify-center"
      >
        <Link
          to={"/"}
          className="h-full w-full md:mt-16 md:h-24 md:w-full flex items-center justify-center cursor-pointer"
        >
          <img
            src={imageAddress + "barkingGames.gif"}
            className="h-12 md:h-24 w-auto"
            alt=""
          />
        </Link>
        <Link to={"/"} className="relative h-full w-5/6">
          <motion.div
            initial="initial"
            whileHover="hover"
            className="relative h-full w-full flex md:gap-4 items-center justify-evenly"
          >
            <img
              src={imageAddress + "toys.png"}
              className="h-8 md:h-10 w-auto"
              alt=""
            />
            <motion.p
              variants={linkVariants}
              className="hidden md:block absolute left-20 text-xl font-normal text-pallete-imp"
            >
              Dashboard
            </motion.p>
          </motion.div>
        </Link>
        <Link to={"/profile"} className="relative h-full w-5/6">
          <motion.div
            initial="initial"
            whileHover="hover"
            className="relative h-full w-full flex gap-4 items-center justify-evenly"
          >
            <img
              src={imageAddress + "dog.png"}
              className="h-8 md:h-10 w-auto"
              alt=""
            />
            <motion.p
              variants={linkVariants}
              className="hidden md:block absolute left-20 text-xl font-normal text-pallete-imp"
            >
              Profile
            </motion.p>
          </motion.div>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
