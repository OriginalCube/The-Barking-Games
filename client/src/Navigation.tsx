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
    <nav className="w-20 h-screen bg-gradient-to-b from-blue-200 via-blue-400 to-indigo-400">
      <div className="w-full h-40 flex flex-col gap-4 items-center justify-center">
        <Link
          to={"/"}
          className="mt-16 h-24 w-full flex items-center justify-center cursor-pointer"
        >
          <img
            src={imageAddress + "barkingGames.gif"}
            className="h-24 w-auto"
            alt=""
          />
        </Link>
        <Link to={"/"} className="relative w-5/6">
          <motion.div
            initial="initial"
            whileHover="hover"
            className="relative w-full flex gap-4 items-center justify-evenly"
          >
            <img
              src={imageAddress + "home.png"}
              className="h-10 w-auto"
              alt=""
            />
            <motion.p
              variants={linkVariants}
              className="absolute left-20 text-xl font-light"
            >
              Dashboard
            </motion.p>
          </motion.div>
        </Link>
        <Link to={"/profile"} className="relative w-5/6">
          <motion.div
            initial="initial"
            whileHover="hover"
            className="relative w-full flex gap-4 items-center justify-evenly"
          >
            <img
              src={imageAddress + "profile.png"}
              className="h-10 w-auto"
              alt=""
            />
            <motion.p
              variants={linkVariants}
              className="absolute left-20 text-xl font-light"
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
