## Első lépések
- `.env` létrehozása `.env.example` -ből
- `composer install`
- `php artisan key:generate`
- `php artisan migrate`
- `php artisan serve`
## Adatkezelés
#### Táblák megjelenítése
- `localhost:8000/api/users`
- `localhost:8000/api/courses`
- `localhost:8000/api/airplanes`
 
#### Id alapján lekérdezés
- `localhost:8000/api/oneuser`
- `localhost:8000/api/oneairplane`
- `localhost:8000/api/onecourse` <br>
**`body`-ban `id` megadása**

#### Rekord hozzáadása
- `localhost:8000/api/usercreate`
- `localhost:8000/api/coursecreate`
- `localhost:8000/api/airplanecreate` <br>
**`body`-ban adatok megadása, `id`-t automatikusan adja a HTTP kérés **

#### Rekord frissítése
- `localhost:8000/api/userupdate`
- `localhost:8000/api/courseupdate`
- `localhost:8000/api/airplaneupdate` <br>
**`body`-ban adatok megadása, `id` megadásával lehet a megfelelő rekordot kiválasztani**
  
#### Rekord törlése
- `localhost:8000/api/userdelete`
- `localhost:8000/api/airplanedelete`
- `localhost:8000/api/coursedelete` <br>
**`body`-ban, `id` megadásával lehet a megfelelő rekordot törölni**

#### User, Course kapcsoló tábla
- `localhost:8000/store`
**`body`-ban `user_id` `course_id` megadásáaval lehet a több a többhöz kapcsolatot létrehozni **
