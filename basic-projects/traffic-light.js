const config1 = {
  fault: false,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 4 }
  ]
};

const config2 = {
  fault: false,
  phases: [
    { color: "red", duration: 3 },
    { color: "yellow", duration: -2 },
    { color: "green", duration: 6 }
  ]
};

const config3 = {
  fault: true,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 6 }
  ]
};

const config4 = {
  fault: false,
  phases: []
};

function runSequence(config, cycles) {
  
  if (!config.phases || config.phases.length === 0) {
    console.log("No phases found");
    return;
  }

  
  for (let c = 0; c < cycles; c++) {
    // Phases par loop chalayenge
    for (const phase of config.phases) {
    
      if (config.fault) {
        console.log("Faulted phase!");
        return;
      }

      // Edge Case 3: Duration check
      if (phase.duration <= 0) {
        console.log("Invalid phase detected");
      } else {
        // Valid Phase
        console.log(`Switching to ${phase.color} for ${phase.duration} s`);
      }
    }
  }
}

function generateTimeline(config, cycles) {
  const timeline = [];
  let elapsedTime = 0;

  // Agar phases nahi hain toh khaali array return karo
  if (!config.phases || config.phases.length === 0) {
    return timeline;
  }
  for (let c = 0; c < cycles; c++) {
    for (const phase of config.phases) {
      elapsedTime += phase.duration;
      timeline.push(elapsedTime);
    }
  }

  return timeline;
}