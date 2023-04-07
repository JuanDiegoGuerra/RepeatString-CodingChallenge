function repeatStringNumTimes (str, num) {
  let Rstring = "";
  if (num < 1) return "";
  while (num > 0) {
  Rstring = Rstring + str;
  num--;
  }
  return Rstring;
}

module.exports = repeatStringNumTimes