function takeANumber(katzDeliLine, name) {
  katzDeliLine= katzDeliLine.push(name);
  var lineLength = katzDeliLine.length + 1;
  return (`Welcome, ${name}. You are number ${lineLength} in line`);
}

function nowServing(katzDeliLine, name) {
  if (katzDeliLine.length <= 0) {
    return `There is nobody waiting to be served!`;
    } else {
      return `Currently serving ${katzDeliLine[0]}`;
    }
    katzDeliLine.slice(1);
}

function currentLine(line) {
  var line = [];
}