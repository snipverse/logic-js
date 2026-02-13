function area(l, w) {
  if (  l <=0 ) {
    throw new RangeError("length should be positive")
  }

  if (w <= 0) {
    throw new RangeError("width should be positive");
  }

  const rectangle = l * w;
  console.log(`The area of rectangle is: ${rectangle}`)
}

area(10,20);
area(-10,20);
area(10,-20);

