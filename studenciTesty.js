
const results = [
    { student: "Tomek Czapliński", score: 100 },
    { student: "Szymon Dąbrowski", score: 99 },
    { student: "Aleksander Malicki", score: 30 },
    { student: "Jakub Jaworowski", score: 65 },
    { student: "Szymon Cygan", score: 88 },
    { student: "Maksymilian Kowalski", score: 73 },
  ];
  
  function calculateAverage(results) {
    const totalScore = results.reduce((sum, { score }) => sum + score, 0);
    return (totalScore / results.length).toFixed(2);
  }
  
  function findHighestScore(results) {
    return results.reduce((max, { student, score }) => {
      return score > max.score ? { student, score } : max;
    }, { student: "", score: -Infinity });
  }
  
  function findLowestScore(results) {
    return results.reduce((min, { student, score }) => {
      return score < min.score ? { student, score } : min;
    }, { student: "", score: Infinity });
  }
  
  function displayResults(results) {
    console.log("Wyniki testów:");
    results.forEach(({ student, score }, index) => {
      console.log(`${index + 1}. ${student} - Wynik: ${score}`);
    });
  
    const average = calculateAverage(results);
    const highest = findHighestScore(results);
    const lowest = findLowestScore(results);
  
    console.log(`\nŚrednia ocen: ${average}`);
    console.log(`Najwyższy wynik: ${highest.student} - ${highest.score}`);
    console.log(`Najniższy wynik: ${lowest.student} - ${lowest.score}`);
  }
  
  displayResults(testResults);
  