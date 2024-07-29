export default function getListStudentIds(arr) {
  if (typeof arr !== 'object' || arr == null) {
    return [];
  }
  return arr.map((element) => element.id);
}
