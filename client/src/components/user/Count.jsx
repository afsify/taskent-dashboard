import PropTypes from "prop-types";
import { Row, Col, Card } from "antd";

const Count = ({ data }) => {
  const totalMonthlySales = data.monthlySales.reduce(
    (sum, sale) => sum + sale.sales,
    0
  );
  const highestRevenueCategory = data.productCategories.reduce(
    (max, category) => (category.revenue > max.revenue ? category : max),
    data.productCategories[0]
  );
  const totalDailyActiveUsers = data.dailyActiveUsers.reduce(
    (sum, day) => sum + day.users,
    0
  );
  const excellentRatings =
    data.employeeRatings.find((rating) => rating.rating === "Excellent")
      ?.count || 0;
  const totalOnlineSales = data.salesTrends.reduce(
    (sum, trend) => sum + trend.onlineSales,
    0
  );
  const totalOfflineSales = data.salesTrends.reduce(
    (sum, trend) => sum + trend.offlineSales,
    0
  );

  const totalUsers = data.userGrowth.reduce(
    (totals, month) => ({
      newUsers: totals.newUsers + month.newUsers,
      activeUsers: totals.activeUsers + month.activeUsers,
    }),
    { newUsers: 0, activeUsers: 0 }
  );

  const cardData = [
    {
      title: "Total Monthly Sales",
      value: `₹${totalMonthlySales.toLocaleString()}`,
      color: "#1890ff",
    },
    {
      title: "Top Category Revenue",
      value: `${
        highestRevenueCategory.category
      } - ₹${highestRevenueCategory.revenue.toLocaleString()}`,
      color: "#52c41a",
    },
    {
      title: "Daily Active Users",
      value: totalDailyActiveUsers.toLocaleString(),
    },
    { title: "Excellent Ratings", value: excellentRatings },
    {
      title: "Total Online Sales",
      value: `₹${totalOnlineSales.toLocaleString()}`,
    },
    {
      title: "Total Offline Sales",
      value: `₹${totalOfflineSales.toLocaleString()}`,
    },
    { title: "Total New Users", value: totalUsers.newUsers.toLocaleString() },
    {
      title: "Total Active Users",
      value: totalUsers.activeUsers.toLocaleString(),
    },
  ];

  return (
    <div className="my-4">
      <Row gutter={[16, 16]}>
        {cardData.map((card, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Card
              title={card.title}
              bordered={false}
              style={{
                textAlign: "center",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
                padding: "16px",
              }}
            >
              <h2
                style={{ color: card.color || "inherit", fontWeight: "bold" }}
              >
                {card.value}
              </h2>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

Count.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Count;
