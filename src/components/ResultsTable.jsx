
import PropTypes from 'prop-types';

function ResultsTable({ results }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Process ID</th>
          <th>Arrival Time</th>
          <th>Burst Time</th>
          <th>Completed Time</th>
          <th>Waiting Time</th>
          <th>Turnaround Time</th>
        </tr>
      </thead>
      <tbody>
        {results.map((process) => (
          <tr key={process.processID}>
            <td>{process.processID}</td>
            <td>{process.arrivalTime}</td>
            <td>{process.burstTime}</td>
            <td>{process.completedTime}</td>
            <td>{process.waitingTime}</td>
            <td>{process.turnAroundTime}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

ResultsTable.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      processID: PropTypes.number.isRequired,
      arrivalTime: PropTypes.number.isRequired,
      burstTime: PropTypes.number.isRequired,
      completedTime: PropTypes.number.isRequired,
      waitingTime: PropTypes.number.isRequired,
      turnAroundTime: PropTypes.number.isRequired,
    })
  ).isRequired,
};


export default ResultsTable;
