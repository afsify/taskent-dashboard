import { useState } from "react";
import toast from "react-hot-toast";
import Empty from "../../components/user/Empty";
import UserLayout from "../../layout/UserLayout";
import PageTitle from "../../components/user/Title";
import { Button, Input, List, Checkbox } from "antd";
import {
  EditOutlined,
  CheckOutlined,
  CloseOutlined,
  DeleteOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";

const TaskManage = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editValue, setEditValue] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addTask = (task) => {
    if (task.trim() === "") return;
    if (tasks.some((t) => t.task === task.trim())) {
      toast.error("Task already exist!");
      return;
    }
    setTasks([...tasks, { task, completed: false }]);
    setNewTask("");
  };

  const toggleCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    toast.success("Task deleted successfully!");
  };

  const startEditing = (index) => {
    setEditIndex(index);
    setEditValue(tasks[index].task);
  };

  const cancelEditing = () => {
    setEditIndex(null);
    setEditValue("");
  };

  const saveTask = (index) => {
    if (editValue.trim() !== "") {
      const updatedTasks = [...tasks];
      updatedTasks[index].task = editValue;
      setTasks(updatedTasks);
      cancelEditing();
    }
  };

  return (
    <UserLayout>
      <PageTitle>
        <h2 className="text-xl font-semibold">Tasks</h2>
      </PageTitle>
      <div className="max-w-xl mx-auto pt-10 px-4">
        <h1 className="text-3xl font-bold text-gray-500 text-center mb-4">
          Task Manager
        </h1>
        <div className="flex items-center justify-center mb-4">
          <Input.Search
            size="large"
            placeholder="Add a new task"
            value={newTask}
            enterButton="Add"
            onChange={(e) => setNewTask(e.target.value)}
            onSearch={(value) => addTask(value)}
            className="mr-2 flex-grow"
            suffix={
              <CloseCircleOutlined
                style={{ color: "#003135", cursor: "pointer" }}
                onClick={() => setNewTask("")}
              />
            }
          />
        </div>
        <List
          dataSource={tasks}
          renderItem={(item, index) => (
            <List.Item
              className="flex items-center justify-between py-2"
              key={index}
            >
              <div className="flex items-center flex-grow">
                <Checkbox
                  className="mr-2"
                  checked={item.completed}
                  onChange={() => toggleCompletion(index)}
                />
                {editIndex === index ? (
                  <div className="flex-grow flex items-center">
                    <Input
                      size="large"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      onPressEnter={() => saveTask(index)}
                      className="mr-2"
                    />
                    <Button
                      size="large"
                      type="primary"
                      shape="circle"
                      icon={<CheckOutlined />}
                      onClick={() => saveTask(index)}
                      className="mr-2"
                    />
                    <Button
                      size="large"
                      shape="circle"
                      icon={<CloseOutlined />}
                      onClick={cancelEditing}
                    />
                  </div>
                ) : (
                  <span
                    className={`text-lg flex-grow ${
                      item.completed ? "line-through text-gray-500" : ""
                    }`}
                  >
                    {item.task}
                  </span>
                )}
              </div>
              {editIndex !== index && (
                <div className="flex items-center">
                  <Button
                    type="text"
                    size="large"
                    icon={<EditOutlined />}
                    onClick={() => startEditing(index)}
                    className="mr-2"
                  />
                  <div className="h-5 w-px bg-gray-300 mx-2"></div>
                  <Button
                    type="text"
                    size="large"
                    icon={<DeleteOutlined />}
                    onClick={() => removeTask(index)}
                    danger
                  />
                </div>
              )}
            </List.Item>
          )}
          locale={{ emptyText: <Empty /> }}
        />
      </div>
    </UserLayout>
  );
};

export default TaskManage;
