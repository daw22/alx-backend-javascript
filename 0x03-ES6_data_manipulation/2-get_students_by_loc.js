export default function getStudentsByLocation(list, loc) {
  return list.filter((item) => item.location === loc);
}
