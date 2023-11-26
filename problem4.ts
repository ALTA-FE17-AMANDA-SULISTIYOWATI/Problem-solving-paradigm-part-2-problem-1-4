function romanNumerals(value: number): string {
  if (value <= 0 || value > 3999) {
    return "Error"
  }

  const romanSymbols: { [key: number]: string } = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  }

  let result = ""

  for (const key of Object.keys(romanSymbols)
    .map(Number)
    .sort((a, b) => b - a)) {
    while (value >= key) {
      result += romanSymbols[key]
      value -= key
    }
  }

  return result
}

console.log(romanNumerals(6))
console.log(romanNumerals(9))
console.log(romanNumerals(23))
console.log(romanNumerals(2021))
console.log(romanNumerals(1646))
