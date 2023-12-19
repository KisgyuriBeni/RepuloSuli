SELECT first_name, last_name FROM users
WHERE mothers_name = "Szabó Melinda";

SELECT users.user_id, users.first_name, users.last_name, courses.course_name FROM users 
INNER JOIN courses ON users.course_id = courses.course_id
WHERE courses.course_id=201;

DELETE from airplane.courses WHERE courses.course_id = 201;