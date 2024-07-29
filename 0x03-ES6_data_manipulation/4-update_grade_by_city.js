export default function updateStudentGradeByCity(list, city, newGrades) {
  return list.filter((student) => student.location === city)
    .map((cityStd) => {
      const std = newGrades.find((newGrade) => newGrade.studentId === cityStd.id);
      if (std) {
        return { ...cityStd, grade: std.grade };
      }
      return { ...cityStd, grade: 'N/A' };
    });
}
