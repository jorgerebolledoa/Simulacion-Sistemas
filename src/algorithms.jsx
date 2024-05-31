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

    process.completedTime = time;
    process.turnAroundTime = process.completedTime - process.arrivalTime;
    process.waitingTime = process.turnAroundTime - process.burstTime;
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
    process.completedTime = time;
    process.turnAroundTime = process.completedTime - process.arrivalTime;
    process.waitingTime = process.turnAroundTime - process.burstTime;
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

  return completedList;
}


export function roundRobin(processList, timeQuantum) {
  let completedList = [];
  let time = 0;
  let queue = [];

  while (processList.length > 0 || queue.length > 0) {
    addToQueue();
    while (queue.length === 0) {
      time++;
      addToQueue();
    }
    selectProcessForRR();
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

  function selectProcessForRR() {
    if (queue.length !== 0) {
      queue.sort((a, b) => a.burstTime - b.burstTime);
      if (queue[0].burstTime < timeQuantum) {
        let process = queue.shift();
        process.completedTime = time + process.burstTime;
        for (let index = 0; index < process.burstTime; index++) {
          time++;
          addToQueue();
        }
        completedList.push(process);
      } else if (queue[0].burstTime === timeQuantum) {
        let process = queue.shift();
        process.completedTime = time + timeQuantum;
        completedList.push(process);
        for (let index = 0; index < timeQuantum; index++) {
          time++;
          addToQueue();
        }
      } else if (queue[0].burstTime > timeQuantum) {
        let process = queue[0];
        queue[0].burstTime = process.burstTime - timeQuantum;
        for (let index = 0; index < timeQuantum; index++) {
          time++;
          addToQueue();
        }
      }
    }
  }

  return completedList;
}

export default { firstComeFirstServed, shortestJobFirst, shortestRemainingTimeFirst, roundRobin };