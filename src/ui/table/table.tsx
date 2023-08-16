import { FC, ReactNode } from 'react';

interface ITableProps {
  header: string[];
  rows: (string | number | null | ReactNode)[][];
}

const Table: FC<ITableProps> = ({ header, rows }) => {
  const renderHeader = () => {
    return (
      <tr className="bg-slate-300 dark:bg-slate-600">
        {header?.map((headerItem, index) => (
          <th className="border border-x-0 border-gray-400 p-3" key={index}>
            {headerItem}
          </th>
        ))}
      </tr>
    );
  };

  const renderBody = () => {
    return rows?.map((row, rowIndex) => (
      <tr className="bg-white dark:bg-slate-500" key={rowIndex}>
        {row.map((cell, cellIndex) => (
          <td className="border border-x-0 border-gray-400 p-3" key={cellIndex}>
            {cell}
          </td>
        ))}
      </tr>
    ));
  };

  return (
    <table className="text-gr table w-full border-collapse overflow-hidden rounded-md border border-gray-500">
      <thead>{renderHeader()}</thead>
      <tbody>{renderBody()}</tbody>
    </table>
  );
};

export { Table };
