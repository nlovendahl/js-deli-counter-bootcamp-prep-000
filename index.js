function takeANumber(katzDeliLine, name) {
  if (katzDeliLine.length <= 0) {
    return `Welcome, ${name}! How can we help you?`;
  } else {
  katzDeliLine.push(name);
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line`);
  }
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