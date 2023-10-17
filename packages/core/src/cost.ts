export function calculateCost(storage: number) {
  const rate = storage <= 10 ? 4 : storage <= 100 ? 2 : 1;
  return rate * storage * 100; // stripe excpects amount in pennies!!!
}
