function TruncaTrunca(x) {
  return Number.parseFloat(x).toFixed(4);
}

export function firstComeFirstServed(processList) {
  let time = 0;
  let completedList = [];
  let queue = [];

  while (processList.length > 0 || queue.length > 0) {
    while (queue.length === 0) {
      time++;
      addToQueue();
    }

    let process = queue.shift();
    for (let i = 0; i < process.burstTime; i++) {
      time++;
      addToQueue();
    }

    let switchingTime = parseFloat(TruncaTrunca(Math. random() * (0.005 - 0.001) + 0.001));
    process.completedTime = time + switchingTime;
    process.turnAroundTime = parseFloat(TruncaTrunca(process.completedTime - process.arrivalTime));
    process.waitingTime = parseFloat(TruncaTrunca(process.turnAroundTime - process.burstTime));
    completedList.push(process);
  }

  function addToQueue() {
    for (let i = 0; i < processList.length; i++) {
      if (time >= processList[i].arrivalTime) {
        let process = processList.splice(i, 1)[0];
        queue.push(process);
        i--;
      }
    }
  }

  return completedList;
}
export function shortestJobFirst(processList) {
  let completedList = [];
  let time = 0;
  let queue = [];

  while (processList.length > 0 || queue.length > 0) {
    addToQueue();
    while (queue.length === 0) {
      time++;
      addToQueue();
    }
    let process = selectProcess();
    for (let i = 0; i < process.burstTime; i++) {
      time++;
      addToQueue();
    }

    let switchingTime = parseFloat(TruncaTrunca(Math. random() * (0.005 - 0.001) + 0.001));
    process.completedTime = time + switchingTime;
    process.turnAroundTime = parseFloat(TruncaTrunca(process.completedTime - process.arrivalTime));
    process.waitingTime = parseFloat(TruncaTrunca(process.turnAroundTime - process.burstTime));
    completedList.push(process);
  }

  function addToQueue() {
    for (let i = 0; i < processList.length; i++) {
      if (processList[i].arrivalTime === time) {
        let process = processList.splice(i, 1)[0];
        queue.push(process);
        i--;
      }
    }
  }

  function selectProcess() {
    queue.sort((a, b) => a.burstTime - b.burstTime);
    return queue.shift();
  }

  return completedList;
}
export function shortestRemainingTimeFirst(processList) {
  let completedList = [];
  let time = 0;
  let queue = [];

  while (processList.length > 0 || queue.length > 0) {
    addToQueue();
    while (queue.length === 0) {
      time++;
      addToQueue();
    }
    selectProcessForSRTF();
    runSRTF();
  }

  function addToQueue() {
    for (let i = 0; i < processList.length; i++) {
      if (processList[i].arrivalTime === time) {
        let process = processList.splice(i, 1)[0];
        queue.push(process);
        i--;
      }
    }
  }

  function selectProcessForSRTF() {
    if (queue.length !== 0) {
      queue.sort((a, b) => a.burstTime - b.burstTime);
      if (queue[0].burstTime === 1) {
        let process = queue.shift();
        process.completedTime = time + 1;
        completedList.push(process);
      } else if (queue[0].burstTime > 1) {
        let process = queue[0];
        queue[0].burstTime = process.burstTime - 1;
      }
    }
  }

  function runSRTF() {
    time++;
    addToQueue();
  }
  let switchingTime = parseFloat(TruncaTrunca(Math. random() * (0.005 - 0.001) + 0.001));
  process.completedTime = parseFloat(TruncaTrunca(time + switchingTime));
  return completedList;
}


export function roundRobin(processList, timeQuantum) {
  let completedList = [];
  let time = 0;
  let queue = [];

  while (processList.length > 0 || queue.length > 0) {
    addToQueue();
    if (queue.length === 0) {
      time++;
      addToQueue();
      continue;
    }

    let process = queue.shift();
    if (process.burstTime <= timeQuantum) {
      time += process.burstTime;
      let switchingTime = parseFloat(TruncaTrunca(Math. random() * (0.005 - 0.001) + 0.001));
      process.completedTime = parseFloat(TruncaTrunca(time + switchingTime));
      process.turnAroundTime = parseFloat(TruncaTrunca(process.completedTime - process.arrivalTime));
      process.waitingTime = parseFloat(TruncaTrunca(process.turnAroundTime - process.burstTime));
      completedList.push(process);
    } else {
      time += timeQuantum;
      process.burstTime -= timeQuantum;
      addToQueue();  // Ensure that the current process is checked for arrival time of new processes
      queue.push(process); // Reinsert the process back into the queue with the remaining burst time
    }
  }

  function addToQueue() {
    for (let i = 0; i < processList.length; i++) {
      if (processList[i].arrivalTime <= time) {
        let process = processList.splice(i, 1)[0];
        queue.push(process);
        i--; // Adjust index after removal
      }
    }
  }

  return completedList;
}




export default { firstComeFirstServed, shortestJobFirst, shortestRemainingTimeFirst, roundRobin };