## XAMPP 
Először a XAMPP-ot kell indítani, `airplane.sql`-t impoortálni és adatokat felvenni
## Függőségek telepítése
`npm install`
## Node.js indítása
`npm start`
## Navigálás
localhost:5000-en jelennek meg az adatok <br>
a táblák pedik külön-külön <br>
- `localhost:5000/users`
- `localhost:5000/airplanes`
- `localhost:5000/courses`
- `localhost:5000/users_courses`
## Táblákban egy-egy record-ra keresés
Az id-kat a a táblához megfelelő id val kell kicserélni 
- `localhost:5000/users/'user_id'`
- `localhost:5000/airplanes/'airplane_id'`
- `localhost:5000/courses/'course_id'`
- `localhost:5000/users_courses/'user_id'/'course_id'`
## CRUD műveletek
Postman/ Insomnia <br>
Felvétel:   `POST, localhost:5000/'tábla neve' body-ban JSON megadása` <br>
Kilistázás: `GET,  localhost:5000/'tábla neve'` <br>
Frissítés:  `PUT localhost:5000/'tábla neve' body-ban JSON megadása`<br>
Törlés:     `DELETE localhost:5000/'tábla neve'/tábla id`<br>
**users_courses-hez nincs frissítés!**




