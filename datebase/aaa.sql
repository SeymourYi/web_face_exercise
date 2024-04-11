INSERT INTO other_table (
  studentid, name, sex, birthdate, societyid, major, level, systemtype, joindate, enddate, Certification, isdelete
  )
SELECT studentid, name, sex, birthdate, societyid, major, level, systemtype, joindate, enddate, true, false
FROM students
WHERE <your_condition>;