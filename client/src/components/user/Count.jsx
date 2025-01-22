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

  return (
    <div className="my-4">
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            title="Total Monthly Sales"
            bordered={false}
            style={{
              textAlign: "center",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              padding: "16px",
            }}
          >
            <h2 style={{ color: "#1890ff", fontWeight: "bold" }}>
              ₹{totalMonthlySales.toLocaleString()}
            </h2>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            title="Top Category Revenue"
            bordered={false}
            style={{
              textAlign: "center",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              padding: "16px",
            }}
          >
            <h2 style={{ color: "#52c41a", fontWeight: "bold" }}>
              {highestRevenueCategory.category} - ₹
              {highestRevenueCategory.revenue.toLocaleString()}
            </h2>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            title="Daily Active Users"
            bordered={false}
            style={{
              textAlign: "center",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              padding: "16px",
            }}
          >
            <h2>{totalDailyActiveUsers.toLocaleString()}</h2>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            title="Excellent Ratings"
            bordered={false}
            style={{
              textAlign: "center",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              padding: "16px",
            }}
          >
            <h2>{excellentRatings}</h2>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            title="Total Online Sales"
            bordered={false}
            style={{
              textAlign: "center",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              padding: "16px",
            }}
          >
            <h2>₹{totalOnlineSales.toLocaleString()}</h2>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            title="Total Offline Sales"
            bordered={false}
            style={{
              textAlign: "center",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              padding: "16px",
            }}
          >
            <h2>₹{totalOfflineSales.toLocaleString()}</h2>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            title="Total New Users"
            bordered={false}
            style={{
              textAlign: "center",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              padding: "16px",
            }}
          >
            <h2>{totalUsers.newUsers.toLocaleString()}</h2>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            title="Total Active Users"
            bordered={false}
            style={{
              textAlign: "center",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              padding: "16px",
            }}
          >
            <h2>{totalUsers.activeUsers.toLocaleString()}</h2>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

Count.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Count;
