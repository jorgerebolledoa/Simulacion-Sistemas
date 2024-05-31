import PropTypes from 'prop-types';



function AlgorithmSelector({ algorithm, setAlgorithm, timeQuantum, setTimeQuantum }) {
    const handleChange = (e) => {
        setAlgorithm(e.target.value);
    };
    return (
        <div>
            <select value={algorithm} onChange={handleChange}>
                <option value="optFCFS">First Come First Served (FCFS)</option>
                <option value="optSJF">Shortest Job First (SJF)</option>
                <option value="optSRTF">Shortest Remaining Time First (SRTF)</option>
                <option value="optRR">Round Robin (RR)</option>
            </select>
            {algorithm === 'optRR' && (
                <div>
                    <label>Time Quantum:</label>
                    <input
                        type="number"
                        value={timeQuantum}
                        onChange={(e) => setTimeQuantum(parseInt(e.target.value, 10))}
                    />
                </div>
            )}
        </div>
    );
}



AlgorithmSelector.propTypes = {
    algorithm: PropTypes.string.isRequired,
    setAlgorithm: PropTypes.func.isRequired,
    timeQuantum: PropTypes.number.isRequired,
    setTimeQuantum: PropTypes.func.isRequired,
};


export default AlgorithmSelector;
