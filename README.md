## Első lépések
- `.env` létrehozása `.env.example` -ből
- `composer install`
- `php artisan migrate`
- `php artisan serve`
## CRUD műveletek
#### Táblák megjelenítése
- `localhost:8000/api/users`
- `localhost:8000/api/airplanes`
- `localhost:8000/api/courses`
- `localhost:8000/api/user_courses`
#### Id alapján lekérdezés
- `localhost:8000/users/{userid}`
- `localhost:8000/airplanes/{airplaneid}`
- `localhost:8000/courses/{courseid}`
- `localhost:8000/user_courses/user/{userid}`
-  `localhost:8000/user_courses/course/{courseid}` <br>
**az összekötő `user_courses` táblából a `user_id` és a `course_id` alapján is lehet rekordot lekérni**

#### Rekord hozzáadása
- `localhost:8000/users/create`
- `localhost:8000/airplanes/create`
- `localhost:8000/courses/create`
- `localhost:8000/user_courses/create` <br>
**`body`-ban adatok megadása**

#### Rekord frissítése
- `localhost:8000/users/update`
- `localhost:8000/airplanes/update`
- `localhost:8000/courses/update`
- `localhost:8000/user_courses/update` <br>
**`body`-ban ÖSSZES adat megadása, a táblához tartozó `Id` megadásával lehet a megfelelő rekordot kiválasztani, (a `user_courses` táblához nincs frissítés )**
  
#### Rekord törlése
- `localhost:8000/users/delete`
- `localhost:8000/airplanes/delete`
- `localhost:8000/courses/delete`
- `localhost:8000/user_courses/user/delete`
- `localhost:8000/user_courses/course/delete` 
**`body`-ban, a táblához tartozó `Id` megadásával lehet a megfelelő rekordot kiválasztani**
**az összekötő `user_courses` táblából a `user_id` és a `course_id` alapján is lehet rekordot törölni**






