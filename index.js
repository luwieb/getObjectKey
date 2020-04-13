function getKey(Object, value) {
  return Object.keys(Object)[Object.values(Object).indexOf(value)];
}

module.exports = getKey;
