function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number | string, b: number | string): number {
  const numA = typeof a === 'string' ? parseInt(a, 10) : a;
  const numB = typeof b === 'string' ? parseInt(b, 10) : b;
  return numA + numB;
}

const result1 = add(5, 10); // Correct
const result2 = addSafe(5, '10'); // Correct