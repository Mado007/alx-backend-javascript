/**
 * Checks if all the elements in the array exist within the set.
 */
export default function hasValuesFromArray(set, array) {
  return array.every((element) => set.has(element));
}
