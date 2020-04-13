function getKey(Obj, value) {
  return Object.keys(Obj)[Object.values(Obj).indexOf(value)];
}

module.exports = getKey;
