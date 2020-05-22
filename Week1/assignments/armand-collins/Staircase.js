

const stairCase = (n) => {
  
  for(let i = 1; i <= n; i++) {
    console.log("\x20".repeat(n - i) + "#".repeat(i))
  }
  
}

stairCase(3)
stairCase(4)
stairCase(6)