USE airplane;

INSERT INTO airplanes
VALUES (101, "Cessna 172","single-engine" ),
       (102, "Cirrus SR20", "single-engine");

INSERT INTO courses
VALUES (201, "Repülés kezdőknek", 301, 101,"Kovács Balázs", "2023/12/15", "2024/02/15", 500000 ),
       (202, "Repülés haladóknak", 302, 102,"Kovács Balázs", "2024/01/20", "2024/03/20", 1200000 );

INSERT INTO users
VALUES(301, 201, "gabi03", "fazekas.gabi@gmail.com", "Titok2023", "Fazekas", "Gábor", "Szabó Melinda", "1055 Budapest, Kossuth Lajos tér 1-3", "2003/02/27" ),
      (302, 202, "endre1987", "faragoendre@gmail.com", "Titok2023", "Farago", "Endre", "Fazekas Virág", "1077 Budapest, Hevesi Sándor tér 4", "1987/11/30");

INSERT INTO users_courses
VALUES (301, 201),
       (302, 202);