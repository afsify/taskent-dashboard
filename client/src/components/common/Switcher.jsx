import { Switch } from "antd";
import PropTypes from "prop-types";
import LightModeIcon from "@mui/icons-material/LightMode";
import Brightness3Icon from "@mui/icons-material/Brightness3";

function Switcher({ isDarkTheme, handleChange }) {
  return (
    <Switch
      checked={isDarkTheme}
      checkedChildren={
        <Brightness3Icon
          className="text-gray-300 mb-[1px]"
          style={{ fontSize: 16, transform: "rotate(20deg)" }}
        />
      }
      unCheckedChildren={
        <LightModeIcon className="text-yellow-500" style={{ fontSize: 16 }} />
      }
      onChange={handleChange}
      style={{
        backgroundColor: isDarkTheme ? "#2C3E50" : "#ECF0F1",
        borderColor: isDarkTheme ? "#2C3E50" : "#ECF0F1",
      }}
    />
  );
}

Switcher.propTypes = {
  isDarkTheme: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Switcher;
