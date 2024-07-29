export default function getStudentIdsSum(list) {
  const initialValue = 0;
  return list.reduce(
    (accumulator, currentItem) => accumulator + currentItem.id,
    initialValue,
  );
}
