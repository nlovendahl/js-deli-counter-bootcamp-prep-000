function takeANumber(katzDeliLine, name) {
  var lineLength = katzDeliLine.length + 1;
  return (`Welcome, ${name}. You are number ${lineLength} in line`);
}

function nowServing(katzDeliLine, name) {
  var lineLength = katzDeliLine
  if (lineLength === 0) {
    return `There is nobody waiting to be served!`;
    } else {
      katzDeliLine.shift[0];
    }
}