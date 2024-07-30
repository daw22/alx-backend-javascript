export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  if (!(weakMap.has(endpoint))) {
    weakMap.set(endpoint, 1);
  } else {
    const value = weakMap.get(endpoint);
    weakMap.set(endpoint, value + 1);
    if (value >= 5) {
      throw new Error('Endpoint load is high');
    }
  }
}
