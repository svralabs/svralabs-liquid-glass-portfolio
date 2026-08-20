import React from 'react';

const Table = ({ data, columns, className = '', ...props }) => {
  const baseClasses = 'w-full border-collapse';
  const tableClasses = `${baseClasses} ${className}`;

  return (
    <table className={tableClasses} {...props}>
      <thead>
        <tr className="bg-mist/5">
          {columns.map((column, index) => (
            <th key={index} className="px-6 py-3 text-left text-xs font-kanit font-bold uppercase tracking-wider text-mist">
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-background' : 'bg-mist/5'}>
            {columns.map((column, colIndex) => (
              <td key={colIndex} className="px-6 py-4 whitespace-nowrap text-sm font-medium text-on-background">
                {row[column.accessor]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
