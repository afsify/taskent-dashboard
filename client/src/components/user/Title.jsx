import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Switcher from "../common/Switcher";
import { useDispatch, useSelector } from "react-redux";
import { selectIsDarkTheme, toggleTheme } from "../../redux/themeSlice";

function Title({ children }) {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector(selectIsDarkTheme);
  const handleChange = () => {
    dispatch(toggleTheme());
  };

  return (
    <motion.div
      className="bg-main-theme text-white sticky top-0 z-20 shadow-black shadow-md rounded-b-2xl h-14 flex justify-center px-4"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="flex justify-between w-full container items-center">
        {children}
      </div>
      <div className="absolute right-4 top-4">
        <Switcher isDarkTheme={isDarkTheme} handleChange={handleChange} />
      </div>
    </motion.div>
  );
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Title;
