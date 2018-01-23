function takeANumber(katzDeliLine, name) {
  for (var i = 0; i < katzDeliLine.length; i++) {
  var a = katzDeliLine[i];
  var greeting = `Welcome, ${name}. You are number ${a} in line.`;
  return greeting;
  }
}