export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) {
    const noQuery = weakMap.get(endpoint);
    if (noQuery >= 4) {
      throw Error('Endpoint load is high');
    }
    weakMap.set(endpoint, noQuery + 1);
  } else {
    weakMap.set(endpoint, 1);
  }
}
