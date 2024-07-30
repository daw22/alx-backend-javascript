export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  if (!(weakMap.get(endpoint))) {
    weakMap.set(endpoint, 1);
  } else {
    const value = weakMap.get(endpoint);
    if (value >= 5) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endpoint, value + 1);
  }
}
