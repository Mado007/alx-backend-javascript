/**
 * Creates a new DataView with an Int8 value at a specific position.
 * @param {Number} length - length of the buffer.
 * @param {Number} position - position to set the value
 * @param {Number} value - value to set
 * @return {DataView} the created DataView
 */
export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position > length - 1) {
    throw Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  view.setInt8(position, value);
  return view;
}
