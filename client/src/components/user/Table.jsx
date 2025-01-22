import PropTypes from "prop-types";
import { motion } from "framer-motion";

function Table({ columns, data }) {
  return (
    <div className="overflow-x-auto rounded-2xl my-4">
      <motion.table
        className="w-full table-auto border-collapse border border-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <thead className="bg-main-theme text-white">
          <tr>
            {columns.map((col, index) => (
              <th
                key={index}
                className="text-center border border-gray-300 py-2 px-4"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="text-center py-4">
                No data available.
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <motion.tr
                key={rowIndex}
                className="hover:bg-gray-300 text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.4,
                  delay: rowIndex * 0.1,
                  ease: "easeOut",
                }}
              >
                {columns.map((col, colIndex) => (
                  <td
                    key={colIndex}
                    className="text-center border border-gray-300 py-2 px-4"
                  >
                    {col.render ? col.render(row[col.key], row) : row[col.key]}
                  </td>
                ))}
              </motion.tr>
            ))
          )}
        </tbody>
      </motion.table>
    </div>
  );
}

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      render: PropTypes.func,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
