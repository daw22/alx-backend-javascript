export default function cleanSet(set, startString) {
  const results = [];
  if (!set || !startString || !(set instanceof Set) || !(typeof startString === 'string')) {
    return '';
  }
  for (const item of set) {
    if (typeof item === 'string' && item.startsWith(startString)) {
      results.push(item.substring(startString.length));
    }
  }
  return results.join('-');
}
