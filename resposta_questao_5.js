const calculatePossibilities = (numberOfPeople) => {
  if (numberOfPeople < 0) {
    console.error("Insira um valor positivo");
    return;
  }
  let possibilities = 1;
  for (let i = 1; i <= numberOfPeople; i++) {
    possibilities *= i;
  }
  return possibilities;
};

console.log(calculatePossibilities(5)); // Saída: 120