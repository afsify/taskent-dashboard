import { useSelector } from "react-redux";
import { SettingOutlined } from "@ant-design/icons";

function Spinner() {
  const { loading } = useSelector((state) => state.alerts);

  return loading ? (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex flex-col justify-center items-center z-50">
      <div className="relative h-24 w-24">
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-main-theme animate-spin"></div>
        <div className="absolute inset-0 flex justify-center items-center">
          <SettingOutlined className="text-main-theme text-5xl animate-pulse" />
        </div>
      </div>
    </div>
  ) : null;
}

export default Spinner;
