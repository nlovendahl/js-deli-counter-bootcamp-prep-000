function takeANumber(katzDeliLine, name) {
  for (var i = 0; i < katzDeliLine.length; i++) {
  var greeting = `Welcome, ${name}. You are number ${katzDeliLine[i] + 1} in line.`;
  return greeting;
  }
}