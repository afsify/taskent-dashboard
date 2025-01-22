import { useEffect } from "react";
import { Result, Button } from "antd";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ServerError = () => {
  useEffect(() => {
    document.title = "500 | Server Error";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-500 via-orange-500 to-yellow-600 flex items-center justify-center">
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Result
          status="500"
          title={
            <motion.h1
              className="text-6xl font-bold text-gray-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              500
            </motion.h1>
          }
          subTitle={
            <motion.p
              className="text-xl text-gray-600 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Oops! Something went wrong on our end.
            </motion.p>
          }
          extra={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Link to="/">
                <Button
                  type="primary"
                  size="large"
                  className="transition-all transform hover:scale-105 duration-300"
                >
                  Back Home
                </Button>
              </Link>
            </motion.div>
          }
        />
      </motion.div>
    </div>
  );
};

export default ServerError;
