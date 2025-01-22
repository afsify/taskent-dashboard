import Table from "../../components/user/Table";
import Title from "../../components/user/Title";
import UserLayout from "../../layout/UserLayout";

const UserManage = () => {
  const columns = [
    { header: "#", key: "id" },
    { header: "Name", key: "name" },
    { header: "Email", key: "email" },
    { header: "Status", key: "status" },
  ];

  const data = [
    { id: 1, name: "John Doe", email: "john@example.com", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Blocked" },
    {
      id: 3,
      name: "Michael Brown",
      email: "michael@example.com",
      status: "Active",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily@example.com",
      status: "Blocked",
    },
    {
      id: 5,
      name: "Daniel Wilson",
      email: "daniel@example.com",
      status: "Active",
    },
    {
      id: 6,
      name: "Sophia Johnson",
      email: "sophia@example.com",
      status: "Blocked",
    },
    {
      id: 7,
      name: "James Martinez",
      email: "james@example.com",
      status: "Active",
    },
    {
      id: 8,
      name: "Olivia Hernandez",
      email: "olivia@example.com",
      status: "Active",
    },
    {
      id: 9,
      name: "William Clark",
      email: "william@example.com",
      status: "Blocked",
    },
    { id: 10, name: "Ava Lopez", email: "ava@example.com", status: "Active" },
    {
      id: 11,
      name: "Benjamin Gonzalez",
      email: "benjamin@example.com",
      status: "Blocked",
    },
    {
      id: 12,
      name: "Isabella Lewis",
      email: "isabella@example.com",
      status: "Active",
    },
    {
      id: 13,
      name: "Alexander Young",
      email: "alexander@example.com",
      status: "Blocked",
    },
    { id: 14, name: "Mia Walker", email: "mia@example.com", status: "Active" },
    {
      id: 15,
      name: "Ethan Hall",
      email: "ethan@example.com",
      status: "Blocked",
    },
    {
      id: 16,
      name: "Charlotte Allen",
      email: "charlotte@example.com",
      status: "Active",
    },
    {
      id: 17,
      name: "Logan King",
      email: "logan@example.com",
      status: "Active",
    },
    {
      id: 18,
      name: "Amelia Scott",
      email: "amelia@example.com",
      status: "Blocked",
    },
    {
      id: 19,
      name: "Lucas Adams",
      email: "lucas@example.com",
      status: "Active",
    },
    { id: 20, name: "Ella Hill", email: "ella@example.com", status: "Blocked" },
    {
      id: 21,
      name: "Mason Moore",
      email: "mason@example.com",
      status: "Active",
    },
    {
      id: 22,
      name: "Harper Turner",
      email: "harper@example.com",
      status: "Blocked",
    },
    {
      id: 23,
      name: "Elijah Collins",
      email: "elijah@example.com",
      status: "Active",
    },
    {
      id: 24,
      name: "Abigail Morgan",
      email: "abigail@example.com",
      status: "Blocked",
    },
    {
      id: 25,
      name: "Sebastian White",
      email: "sebastian@example.com",
      status: "Active",
    },
    {
      id: 26,
      name: "Grace Baker",
      email: "grace@example.com",
      status: "Blocked",
    },
    {
      id: 27,
      name: "Jackson Rivera",
      email: "jackson@example.com",
      status: "Active",
    },
    {
      id: 28,
      name: "Zoe Ramirez",
      email: "zoe@example.com",
      status: "Blocked",
    },
    {
      id: 29,
      name: "Carter Sanders",
      email: "carter@example.com",
      status: "Active",
    },
    {
      id: 30,
      name: "Lily Peterson",
      email: "lily@example.com",
      status: "Blocked",
    },
  ];
  return (
    <UserLayout>
      <Title>
        <h2 className="text-xl font-semibold">Users</h2>
      </Title>
      <Table columns={columns} data={data} />
    </UserLayout>
  );
};

export default UserManage;
