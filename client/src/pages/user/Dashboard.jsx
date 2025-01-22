import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Count from "../../components/user/Count";
import UserLayout from "../../layout/UserLayout";
import PageTitle from "../../components/user/Title";
import { Bar, Pie, Line, Doughnut } from "react-chartjs-2";
import { hideLoading, showLoading } from "../../redux/alertSlice";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Empty } from "antd";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [data, setData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showLoading());
    fetch("/dummy.json")
      .then((response) => response.json())
      .then((data) => setData(data.data))
      .catch((error) => console.error("Error fetching data:", error))
      .finally(() => dispatch(hideLoading()));
  }, [dispatch]);

  if (!data || data.length === 0) {
    return (
      <UserLayout>
        <PageTitle>
          <h2 className="text-xl font-semibold">Dashboard</h2>
        </PageTitle>
        <div className="flex justify-center items-center h-auto">
          <Empty
            description={
              <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                No Data Found
              </span>
            }
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            imageStyle={{
              height: 60,
            }}
          />
        </div>
      </UserLayout>
    );
  }

  const monthlySalesData = {
    labels: data.monthlySales.map((item) => item.month),
    datasets: [
      {
        label: "Monthly Sales",
        data: data.monthlySales.map((item) => item.sales),
        borderColor: "#4CAF50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
      },
    ],
  };

  const productCategoriesRevenueData = {
    labels: data.productCategories.map((item) => item.category),
    datasets: [
      {
        label: "Revenue by Category",
        data: data.productCategories.map((item) => item.revenue),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  const employeeRatingsData = {
    labels: data.employeeRatings.map((item) => item.rating),
    datasets: [
      {
        label: "Employee Ratings",
        data: data.employeeRatings.map((item) => item.count),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#9966FF"],
      },
    ],
  };

  const regionalSalesData = {
    labels: data.regionalSales.map((item) => item.region),
    datasets: [
      {
        label: "Sales by Region",
        data: data.regionalSales.map((item) => item.sales),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  const userGrowthData = {
    labels: data.userGrowth.map((item) => item.month),
    datasets: [
      {
        label: "New Users",
        data: data.userGrowth.map((item) => item.newUsers),
        borderColor: "#FF6384",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
      },
      {
        label: "Active Users",
        data: data.userGrowth.map((item) => item.activeUsers),
        borderColor: "#36A2EB",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
      },
    ],
  };

  return (
    <UserLayout>
      <PageTitle>
        <h2 className="text-xl font-semibold">Dashboard</h2>
      </PageTitle>
      <div className="my-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-4">
          <div className="p-4 rounded-lg shadow-md">
            <h3 className="font-semibold mb-4 text-gray-500">Regional Sales</h3>
            <Bar data={regionalSalesData} />
          </div>
          <div className="p-4 rounded-lg shadow-md">
            <h3 className="font-semibold mb-4 text-gray-500">User Growth</h3>
            <Line data={userGrowthData} />
          </div>
          <div className="p-4 rounded-lg shadow-md">
            <h3 className="font-semibold mb-4 text-gray-500">Monthly Sales</h3>
            <Line data={monthlySalesData} />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-4 rounded-lg shadow-md">
            <h3 className="font-semibold mb-4 text-gray-500">
              Revenue by Category
            </h3>
            <Pie data={productCategoriesRevenueData} />
          </div>
          <div className="p-4 rounded-lg shadow-md">
            <h3 className="font-semibold mb-4 text-gray-500">
              Employee Ratings
            </h3>
            <Doughnut data={employeeRatingsData} />
          </div>
        </div>
        <Count data={data} />
      </div>
    </UserLayout>
  );
};

export default Dashboard;
