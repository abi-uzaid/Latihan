const students = [
    { name: "Ratna", score: 85 },
    { name: "Budi", score: 80 },
    { name: "Susi", score: 70 },
    { name: "Joko", score: 90 },
    { name: "Udin", score: 45 },
    { name: "Lina", score: 60 }
  ];

  students.sort(function(a, b) {
    return a.score - b.score;
  });

  console.log(students);