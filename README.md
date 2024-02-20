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
- `localhost:8000/oneuser`
- `localhost:8000/oneairplane`
- `localhost:8000/onecourse` <br>
**`body`-ban `id` megadása**

#### Rekord hozzáadása
- `localhost:8000/usercreate`
- `localhost:8000/coursecreate`
- `localhost:8000/airplanecreate` <br>
**`body`-ban adatok megadása, `id`-t automatikusan adja a HTTP kérés **

#### Rekord frissítése
- `localhost:8000/userupdate`
- `localhost:8000/courseupdate`
- `localhost:8000/airplaneupdate` <br>
**`body`-ban adatok megadása, `id` megadásával lehet a megfelelő rekordot kiválasztani**
  
#### Rekord törlése
- `localhost:8000/userdelete`
- `localhost:8000/airplanedelete`
- `localhost:8000/coursedelete` <br>
**`body`-ban, `id` megadásával lehet a megfelelő rekordot törölni**

#### User, Course kapcsoló tábla
- `localhost:8000/store`
**`body`-ban `user_id` `course_id` megadásáaval lehet a több a többhöz kapcsolatot létrehozni **
