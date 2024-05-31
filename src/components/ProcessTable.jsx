

import PropTypes from 'prop-types';

function ProcessTable({ processList }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Process ID</th>
          <th>Arrival Time</th>
          <th>Burst Time</th>
        </tr>
      </thead>
      <tbody>
        {processList.map((process) => (
          <tr key={process.processID}>
            <td>{process.processID}</td>
            <td>{process.arrivalTime}</td>
            <td>{process.burstTime}</td>
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
