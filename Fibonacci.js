let fibonacci = number => {
  let a = 0, b = 1, c = number;
  
  for(let i = 2; i <= number; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  
  return c;
};
