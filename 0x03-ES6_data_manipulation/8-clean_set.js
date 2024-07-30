export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || !(startString instanceof String)) {
    return '';
  }
  const results = [];
  for (const item of set) {
    if (typeof item === 'string' && item.startsWith(startString)) {
      results.push(item.substring(startString.length));
    }
  }
  return results.join('-');
}
