function computeStudentAverages(input) {
  if (Array.isArray(input)) {
    // each element is an object with a single key
    return input.map(item => {
      const key = Object.keys(item)[0];
      const scoresObj = item[key];
      const values = Object.values(scoresObj).filter(v => typeof v === 'number');
      const avg = values.reduce((a,b) => a + b, 0) / values.length || 0;
      return { [key]: { average: avg } };
    });
  } else if (typeof input === 'object' && input !== null) {
    const out = {};
    for (const [student, scoresObj] of Object.entries(input)) {
      const values = Object.values(scoresObj).filter(v => typeof v === 'number');
      const avg = values.reduce((a,b) => a + b, 0) / values.length || 0;
      out[student] = { average: avg };
    }
    return out;
  } else {
    throw new Error('Unsupported input');
  }
}

/* Example using object input */
const studentsObj = {
  student1: { subject1:44, subject2:56, subject3:87, subject4:97, subject5:37 },
  student2: { subject1:44, subject2:56, subject3:87, subject4:97, subject5:37 },
  student3: { subject1:44, subject2:56, subject3:87, subject4:97, subject5:37 }
};

console.log(computeStudentAverages(studentsObj));
/* {
  student1: { average: 64.2 },
  student2: { average: 64.2 },
  student3: { average: 64.2 }
} */

/* Example using array input */
const studentsArr = [
  { student1: { subject1:44, subject2:56 } },
  { student2: { subject1:70, subject2:80 } }
];
console.log(computeStudentAverages(studentsArr));
// [ { student1: { average: 50 } }, { student2: { average: 75 } } ]
