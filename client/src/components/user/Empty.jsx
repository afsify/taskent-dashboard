import { Empty as EmptyData } from "antd";

const Empty = () => {
  return (
    <div className="flex justify-center items-center h-auto">
      <EmptyData
        description={
          <span style={{ fontSize: "20px", fontWeight: "bold" }}>
            No Data Found
          </span>
        }
        image={EmptyData.PRESENTED_IMAGE_SIMPLE}
        imageStyle={{
          height: 60,
        }}
      />
    </div>
  );
};

export default Empty;
