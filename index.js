function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var lineLength = katzDeliLine.length + 1;
  return (`Welcome, ${name}. You are number ${lineLength} in line`);
}

function nowServing(katzDeliLine, name) {
  if (katzDeliLine.length <= 0) {
    return `There is nobody waiting to be served!`;
    } else {
      katzDeliLine.slice(1);
      return `Currently serving ${katzDeliLine[0]}`;
    }
}

function currentLine(line) {
  var line = [];
}