/**
 * returns a string of all the set values that start with the given `startString`.
 */
export default function cleanSet(set, startString) {
  if (!startString || !startString.length) {
    return '';
  }

  const filtered = [];
  const len = startString.length;
  set.forEach((word) => {
    if (word && word.startsWith(startString)) {
      filtered.push(word.slice(len));
    }
  });
  return filtered.join('-');
}
