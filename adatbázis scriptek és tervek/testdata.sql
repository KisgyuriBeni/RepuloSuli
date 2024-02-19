INSERT INTO `users` (`id`, `user_name`, `email`, `phone_number`, `password`, `first_name`, `last_name`, `mothers_name`, `address`, `birth_day`) VALUES
(301,  'gabi03', 'fazekas.gabi@gmail.com', '06304973654', 'Titok2024', 'Fazekas', 'Gábor', 'Szabó Melinda', '1055 Budapest, Kossuth Lajos tér 1-3', '2003-02-27'),
(302,  'endre1987', 'faragoendre@gmail.com', '06204987564', 'Titok2024', 'Farago', 'Endre', 'Fazekas Virág', '1077 Budapest, Hevesi Sándor tér 4', '1987-11-30');

INSERT INTO `courses` (`id`, `course_name`, `airplane_id`, `instructor`, `start_date`, `end_date`, `course_fee`) VALUES
(201, 'Repülés kezdőknek',  101, 'Kovács Balázs', '2023-12-15', '2024-02-15', 500000),
(202, 'Repülés haladóknak', 102, 'Kovács Balázs', '2024-01-20', '2024-03-20', 1200000);

INSERT INTO `airplanes` (`id`, `airplane_name`, `propulsion`) VALUES
(101, 'Cessna 172', 'single-engine'),
(102, 'Cirrus SR20', 'single-engine');

INSERT INTO `user_course` (`user_id`, `course_id`) VALUES
(301, 201),
(302, 202);
COMMIT;