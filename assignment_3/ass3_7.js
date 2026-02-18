const students = [
  { name: "Ram", scores: [80, 70, 60] },
  { name: "Mohan", scores: [80, 70, 90] },
  { name: "Sai", scores: [60, 70, 80] },
  { name: "Hemang", scores: [90, 90, 80, 80] },
];

const withAverages = students.map(s => {
  const sum = s.scores.reduce((acc, x) => acc + x, 0);
  const avg = sum / s.scores.length;
  return { name: s.name, average: avg };
});

console.log(withAverages);
/* [
  { name: "Ram", average: 70 },
  { name: "Mohan", average: 80 },
  { name: "Sai", average: 70 },
  { name: "Hemang", average: 85 }
] */
