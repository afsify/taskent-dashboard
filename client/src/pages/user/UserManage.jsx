import "jspdf-autotable";
import { jsPDF } from "jspdf";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Button, Input, Select } from "antd";
import { fetchUsers } from "../../api/userApi";
import Table from "../../components/user/Table";
import Title from "../../components/user/Title";
import UserLayout from "../../layout/UserLayout";
import { hideLoading, showLoading } from "../../redux/alertSlice";
import { CloseCircleOutlined, SearchOutlined } from "@ant-design/icons";

const { Option } = Select;

const UserManage = () => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState("");
  const [sortOrder, setSortOrder] = useState("Sort by Name");

  useEffect(() => {
    const getUsers = async () => {
      try {
        dispatch(showLoading());
        const data = await fetchUsers();
        dispatch(hideLoading());
        setUsers(data);
        setFilteredUsers(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        dispatch(hideLoading());
      }
    };
    getUsers();
  }, [dispatch]);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    if (query === "") {
      setFilteredUsers(users);
    } else {
      filterUsers(query, selectedCompany);
    }
  };

  const handleFilterChange = (type, value) => {
    if (type === "company") {
      setSelectedCompany(value);
    }
    filterUsers(searchQuery, value);
  };

  const handleSortChange = (value) => {
    setSortOrder(value);
    sortUsers(value);
  };

  const filterUsers = (query, company) => {
    let filtered = users.filter((user) => {
      const matchesSearch =
        user.name.toLowerCase().includes(query) ||
        user.company.name.toLowerCase().includes(query);

      const matchesCompany = company
        ? user.company.name.toLowerCase().includes(company.toLowerCase())
        : true;

      return matchesSearch && matchesCompany;
    });

    sortUsers(sortOrder, filtered);
  };

  const sortUsers = (order, usersToSort = filteredUsers) => {
    let sortedUsers = [...usersToSort];
    if (order === "ascending") {
      sortedUsers.sort((a, b) => a.name.localeCompare(b.name));
    } else if (order === "descending") {
      sortedUsers.sort((a, b) => b.name.localeCompare(a.name));
    }
    setFilteredUsers(sortedUsers);
  };

  const downloadPDF = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("en-GB");
    const doc = new jsPDF();
    doc.text(`User List - ${formattedDate}`, 10, 10);
    const filterHeading = [];
    if (searchQuery) {
      filterHeading.push(`Search Query: "${searchQuery}"`);
    }
    if (selectedCompany) {
      filterHeading.push(`Filtered by Company: "${selectedCompany}"`);
    }
    if (filterHeading.length > 0) {
      doc.text(`Filters Applied: ${filterHeading.join(", ")}`, 10, 20);
    }
    const tableData = filteredUsers.map((user, index) => [
      index + 1,
      user.name,
      user.email,
      user.company.name,
    ]);
    doc.autoTable({
      startY: filterHeading.length > 0 ? 30 : 20,
      head: [["#", "Name", "Email", "Company"]],
      body: tableData,
    });
    doc.save(`Users_${formattedDate}.pdf`);
  };

  const columns = [
    { header: "#", key: "id" },
    { header: "Name", key: "name" },
    { header: "Email", key: "email" },
    { header: "Company", key: "company" },
  ];

  const tableData = filteredUsers.map((user, index) => ({
    id: index + 1,
    name: user.name,
    email: user.email,
    company: user.company.name,
  }));

  return (
    <UserLayout>
      <Title>
        <h2 className="text-xl font-semibold">Users</h2>
      </Title>
      <div className="mt-4 flex flex-col justify-center sm:flex-row sm:items-center sm:space-x-4">
        <div>
          <Input
            size="large"
            placeholder="Search by name or company"
            value={searchQuery}
            className="rounded-md w-full sm:w-80"
            onChange={handleSearch}
            prefix={
              <SearchOutlined
                style={{ color: "#003135", marginRight: "5px" }}
              />
            }
            suffix={
              searchQuery && (
                <CloseCircleOutlined
                  style={{ color: "#003135", cursor: "pointer" }}
                  onClick={() => {
                    setSearchQuery("");
                    setFilteredUsers(users);
                  }}
                />
              )
            }
          />
        </div>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <Select
            size="large"
            placeholder="Filter by Company"
            className="w-full sm:w-48"
            value={selectedCompany}
            onChange={(value) => handleFilterChange("company", value)}
          >
            <Option value="">All Companies</Option>
            {users.map((user) => (
              <Option key={user.company.name} value={user.company.name}>
                {user.company.name}
              </Option>
            ))}
          </Select>

          <Select
            size="large"
            placeholder="Sort by Name"
            className="w-full sm:w-48"
            value={sortOrder}
            onChange={handleSortChange}
          >
            <Option value="ascending">Ascending</Option>
            <Option value="descending">Descending</Option>
          </Select>
        </div>
        <Button
          type="primary"
          size="large"
          onClick={downloadPDF}
          className="mt-4 sm:mt-0 text-white px-4 py-2 rounded"
        >
          Download PDF
        </Button>
      </div>
      <Table columns={columns} data={tableData} />
    </UserLayout>
  );
};

export default UserManage;
