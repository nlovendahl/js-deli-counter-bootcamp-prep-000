function takeANumber(katzDeliLine, name) {
  var lineLength = katzDeliLine.length + 1;
  katzDeliLine.push(name);
  return (`Welcome, ${name}. You are number ${lineLength} in line`);
}

function nowServing(katzDeliLine, name) {
  if (katzDeliLine.length <= 0) {
    return `There is nobody waiting to be served!`;
    } else {
      katzDeliLine.slice(1);
      return katzDeliLine[0];
    }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length <= 0) {
    return `The line is currently empty.`;
  } else {
    var b = katzDeliLine.length;
  }
}