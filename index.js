function takeANumber(katzDeliLine, name) {
  var lineLength = katzDeliLine.length + 1;
  return (`Welcome, ${name}. You are number ${lineLength} in line`);
}

function nowServing(katzDeliLine, name) {
  katzDeliLine.shift[0];
}