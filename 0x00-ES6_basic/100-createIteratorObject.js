export default function createIteratorObject(report) {
  const departments = Object.keys(report.allEmployees);

  return (
    function* gen() {
      for (const key of departments) {
        for (const employee of report.allEmployees[key]) yield employee;
      }
    }());
}
