

import PropTypes from 'prop-types';

function ProcessTable({ processList }) {
  return (
    <table className="min-w-full divide-y divide-gray-200">
    <thead className="bg-gray-50">
      <tr>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Process ID</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Arrival Time</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Burst Time</th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      {processList.map((process) => (
        <tr key={process.processID}>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{process.processID}</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{process.arrivalTime}</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{process.burstTime}</td>
        </tr>
      ))}
    </tbody>
  </table>
  
  );
}

ProcessTable.propTypes = {
  processList: PropTypes.array.isRequired,
};

export default ProcessTable;
