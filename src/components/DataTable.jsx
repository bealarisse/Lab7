
export default function DataTable({ data, columns }) {
  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              key={column.key}
              className="border border-gray-300 px-4 py-2 text-left"
            >
              {column.label}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.length > 0 ? (
          data.map((item, index) => (
            <tr key={item._id || index}>
              {columns.map((column) => (
                <td
                  key={column.key}
                  className="border border-gray-300 px-4 py-2"
                >
                  {item[column.key]}
                </td>
              ))}
            </tr>
          ))
        ) : (
          <tr>
            <td
              colSpan={columns.length}
              className="border border-gray-300 px-4 py-2 text-center"
            >
              No records found.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
