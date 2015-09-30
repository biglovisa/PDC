export default function(values) {
  var start = 0;
  for (var i = 0; i < values.length; i++) {
    if (isNaN(values[i].value)) {
      start++;
    } else {
      break
    }
  }
  return values.slice(start);
}
