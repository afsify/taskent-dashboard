import { Button } from "antd";
import { useState } from "react";
import PropTypes from "prop-types";
import { userPath } from "../routes/routeConfig";
import Switcher from "../components/common/Switcher";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { selectIsDarkTheme, toggleTheme } from "../redux/themeSlice";
import {
  MenuOutlined,
  TeamOutlined,
  LeftOutlined,
  CloseOutlined,
  SettingOutlined,
  BarChartOutlined,
} from "@ant-design/icons";

function UserLayout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [nav, setNav] = useState(false);
  const [open, setOpen] = useState(true);
  const isDarkTheme = useSelector(selectIsDarkTheme);

  const userMenu = [
    {
      id: 1,
      title: "Dashboard",
      icon: <BarChartOutlined />,
      path: userPath.dashboard,
    },
    {
      id: 2,
      title: "Tasks",
      icon: <SettingOutlined />,
      path: userPath.taskManage,
    },
    {
      id: 3,
      title: "Users",
      icon: <TeamOutlined />,
      path: userPath.userManage,
    },
  ];

  const handleChange = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className="container mx-auto flex">
      <aside className="h-screen hidden md:flex">
        <div
          className={` ${
            open ? "w-72" : "w-20 "
          } bg-main-theme p-5 pt-6 relative shadow-black shadow-md duration-300`}
        >
          <h1
            className={`text-white text-5xl font-signature text-center duration-500 transform transition-all ${
              !open
                ? "opacity-0 scale-75 -translate-x-[100px]"
                : "opacity-100 scale-100 translate-x-0"
            }`}
          >
            Taskent
          </h1>
          <ul className="mt-3">
            {userMenu.map((menu) => {
              const isActive = location.pathname === menu.path;
              return (
                <li
                  key={menu.id}
                  className={`${
                    !open && "flex justify-center mt-4"
                  } flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-lg items-center gap-x-4
                    ${menu.gap ? "mt-9" : "mt-2"} ${
                    isActive && " bg-light-white font-semibold"
                  } `}
                  onClick={() => navigate(menu.path)}
                >
                  {menu.icon}
                  <span
                    className={`${!open && "hidden"} origin-left duration-200`}
                  >
                    {menu.title}
                  </span>
                </li>
              );
            })}
          </ul>
          <Button
            type="primary"
            size="large"
            className={` ${
              open ? "w-[245px]" : "w-12 "
            } flex absolute bottom-5 border border-white`}
            onClick={() => setOpen(!open)}
          >
            <LeftOutlined
              style={{ fontSize: "28px" }}
              className={`transition-transform duration-300 ease-in-out
            ${!open && "rotate-180"}`}
            />
          </Button>
        </div>
      </aside>
      <main className="w-full px-2 overflow-y-auto h-screen mb-20 md:mb-0">
        {children}
      </main>
      {nav && (
        <div className="flex top-0 bottom-0 left-0 w-full p-2 fixed z-40">
          <div className="fixed right-8 top-8">
            <Switcher isDarkTheme={isDarkTheme} handleChange={handleChange} />
          </div>
          <ul className="flex flex-col justify-center items-center rounded-xl w-full shadow-black shadow-md bg-main-theme ">
            {userMenu.map((menu) => {
              const isActive = location.pathname === menu.path;
              return (
                <li
                  key={menu.id}
                  className="px-2 py-2 cursor-pointer text-white text-3xl"
                >
                  <Link
                    className={`${
                      isActive && "bg-light-white px-4 rounded-xl font-semibold"
                    }`}
                    onClick={() => setNav(!nav)}
                    to={menu.path}
                  >
                    {menu.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      <div className="py-4 px-4 box-border w-full flex justify-center bottom-0 left-0 fixed z-50 md:hidden">
        <div className="w-[99%] bg-main-theme py-4 flex justify-around items-center px-4 shadow-black shadow-md rounded-2xl">
          <div className="flex justify-around w-full container items-center">
            <div
              onClick={() => navigate(userPath.dashboard)}
              className="flex items-center text-white hover:bg-light-white transition duration-300 cursor-pointer rounded-xl px-2 text-2xl"
            >
              <BarChartOutlined />
            </div>
            {nav ? (
              <div
                onClick={() => setNav(!nav)}
                className="flex items-center text-white hover:bg-light-white transition duration-300 cursor-pointer rounded-xl px-2 text-2xl"
              >
                <CloseOutlined />
              </div>
            ) : (
              <div
                onClick={() => setNav(!nav)}
                className="flex items-center text-white hover:bg-light-white transition duration-300 cursor-pointer rounded-xl px-2 text-2xl"
              >
                <MenuOutlined />
              </div>
            )}
            <div
              onClick={() => navigate(userPath.taskManage)}
              className="flex items-center text-white hover:bg-light-white transition duration-300 cursor-pointer rounded-xl px-2 text-2xl"
            >
              <SettingOutlined />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

UserLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserLayout;
