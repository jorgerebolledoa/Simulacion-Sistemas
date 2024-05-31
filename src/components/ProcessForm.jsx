import  { useState } from 'react';
import PropTypes from 'prop-types';

function ProcessForm({ setProcessList }) {
  const [processID, setProcessID] = useState('');
  const [arrivalTime, setArrivalTime] = useState('');
  const [burstTime, setBurstTime] = useState('');

  const handleSubmit = () => {
    if (processID && arrivalTime && burstTime) {
      setProcessList((prev) => [
        ...prev,
        {
          processID: parseInt(processID, 10),
          arrivalTime: parseInt(arrivalTime, 10),
          burstTime: parseInt(burstTime, 10)
        }
      ]);
      setProcessID('');
      setArrivalTime('');
      setBurstTime('');
    }
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Process ID" 
        value={processID} 
        onChange={(e) => setProcessID(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Arrival Time" 
        value={arrivalTime} 
        onChange={(e) => setArrivalTime(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Burst Time" 
        value={burstTime} 
        onChange={(e) => setBurstTime(e.target.value)} 
      />
      <button onClick={handleSubmit}>Add Process</button>
    </div>
  );
}

ProcessForm.propTypes = {
  setProcessList: PropTypes.func.isRequired
};

export default ProcessForm;

