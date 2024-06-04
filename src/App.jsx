import  { useState } from 'react';
import ProcessForm from './components/ProcessForm.jsx';
import ProcessTable from './components/ProcessTable.jsx';
import ResultsTable from './components/ResultsTable.jsx';
import AlgorithmSelector from './components/AlgorithmSelector.jsx';
import { firstComeFirstServed, shortestJobFirst, shortestRemainingTimeFirst, roundRobin } from './algorithms.jsx';


function App() {

  const [processList, setProcessList] = useState([]);
  const [results, setResults] = useState([]);
  const [algorithm, setAlgorithm] = useState('optFCFS');
  const [timeQuantum, setTimeQuantum] = useState(0);

  const calculateResults = () => {
    let result;
    switch (algorithm) {
      case 'optFCFS':
        result = firstComeFirstServed([...processList]);
        break;
      case 'optSJF':
        result = shortestJobFirst([...processList]);
        break;
      case 'optSRTF':
        result = shortestRemainingTimeFirst([...processList]);
        break;
      case 'optRR':
        result = roundRobin([...processList], timeQuantum);
        break;
      default:
        result = [];
    }
    setResults(result);
  };

  return (
    <div className="App">
      <h1>CPU Scheduler Simulator</h1>
      <AlgorithmSelector 
        algorithm={algorithm} 
        setAlgorithm={setAlgorithm} 
        timeQuantum={timeQuantum} 
        setTimeQuantum={setTimeQuantum} 
      />
      <ProcessForm setProcessList={setProcessList} />
      <ProcessTable processList={processList} />
      <button onClick={calculateResults}>Calculate</button>
      <p>Los valores mostrados en la tabla de resultado consideran un tiempo de cambio entre procesos.</p>
      <ResultsTable results={results} />
    </div>
  );
}

export default App;