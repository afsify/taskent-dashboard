import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { ConfigProvider, theme } from "antd";
import { selectIsDarkTheme } from "../../redux/themeSlice";

function ThemeProvider({ children }) {
  const isDarkTheme = useSelector(selectIsDarkTheme);

  const getBackgroundColor = () => {
    return isDarkTheme ? "#121212" : "#ffffff";
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#003135",
        },
        algorithm: isDarkTheme ? theme.darkAlgorithm : theme.lightAlgorithm,
      }}
    >
      <div
        style={{ backgroundColor: getBackgroundColor(), minHeight: "100vh" }}
      >
        {children}
      </div>
    </ConfigProvider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
