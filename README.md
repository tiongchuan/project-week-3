# project-week-3

1. Endpoints for Tutors
- GET /general/tutor/:tutorId
- GET /general/tutors
- POST /protected/tutor/update
- DELETE /protected/tutor/delete/:tutorId
- PUT /protected/tutor/add

2. Endpoints for Students

3. Endpoints for Subjects

4. Edpoints for Enrollments

5. Adding constraints in table

- alter table "students" add constraint fk_school_id foreign key (school_id) references schools(id);

- alter table "enrollments" add constraint fk_student_id foreign key (student_id) references students(id);

- alter table "enrollments" add constraint fk_tutor_id foreign key (tutor_id) references tutors(id);

- alter table "enrollments" add constraint fk_subject_id foreign key (subject_id) references subjects(id);
