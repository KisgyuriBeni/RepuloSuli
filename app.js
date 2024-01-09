const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())

// MySQL
const pool= mysql.createPool({
    connectionLimit :   10,
    host:               'localhost',
    user:               'root',
    password:           null,
    database:           'airplane'
})

//show tables
app.get('', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('show tables; ', (err, rows) => {
            connection.release()

            if(!err) {
                res.send(rows)
            } else {
                console.log(err)
            }
        })
    })
})

// users tábla kilistázása
app.get('/users', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('SELECT * FROM users', (err, rows) => {
            connection.release()

            if(!err) {
                res.send(rows)
            } else {
                console.log(err)
            }
        })
    })
})

//user_id alapján user kilistázása
app.get('/users/:user_id', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('SELECT * FROM users WHERE user_id = ?',[req.params.user_id], (err, rows) => {
            connection.release()

            if(!err) {
                res.send(rows)
            } else {
                console.log(err)
            }
        })
    })
})

//user_id alapján user törlése
app.delete('/users/:user_id', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('DELETE FROM users WHERE user_id = ?',[req.params.user_id], (err, rows) => {
            connection.release()

            if(!err) {
                res.send(`User with the Record ID: ${req.params.user_id} has been removed`)
            } else {
                console.log(err)
            }
        })
    })
})

//user felvétele
app.post('/users', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        const params = req.body
        

        connection.query('INSERT INTO users SET ?',params, (err, rows) => {
            connection.release()

            if(!err) {
                res.send(`User with the Record ID: ${params.user_id} has been added`)
            } else {
                console.log(err)
            }

        })

        console.log(req.body)
    })
})

//user frissítése
app.put('/users', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        const  {user_id, course_id, user_name, email, password, first_name, last_name, mothers_name, address, birth_day} =req.body

        connection.query('UPDATE users SET course_id = ?, user_name = ?, email = ?, password = ?, first_name = ?, last_name = ?, mothers_name = ?, address = ?, birth_day = ? WHERE user_id = ?',
                        [course_id, user_name, email, password, first_name, last_name, mothers_name, address, birth_day, user_id],
                        (err, rows) => {
            connection.release()

            if(!err) {
                res.send(`User with the Record ID: ${user_id} has been updated`)
            } else {
                console.log(err)
            }

        })

        console.log(req.body)
    })
})

// airplanes tábla kilistázása
app.get('/airplanes', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('SELECT * FROM airplanes', (err, rows) => {
            connection.release()

            if(!err) {
                res.send(rows)
            } else {
                console.log(err)
            }
        })
    })
})

// airplane_id alapján airplane kilistázása
app.get('/airplanes/:airplane_id', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('SELECT * FROM airplanes WHERE airplane_id = ?',[req.params.airplane_id], (err, rows) => {
            connection.release()

            if(!err) {
                res.send(rows)
            } else {
                console.log(err)
            }
        })
    })
})

//airplane_id alapján airplane törlése
app.delete('/airplanes/:airplane_id', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('DELETE FROM airplanes WHERE airplane_id = ?',[req.params.airplane_id], (err, rows) => {
            connection.release()

            if(!err) {
                res.send(`Airplane with the Record ID: ${req.params.airplane_id} has been removed`)
            } else {
                console.log(err)
            }
        })
    })
})

//airplane felvétele
app.post('/airplanes', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        const params = req.body
        

        connection.query('INSERT INTO airplanes SET ?',params, (err, rows) => {
            connection.release()

            if(!err) {
                res.send(`Airplane with the Record ID: ${params.airplane_id} has been added`)
            } else {
                console.log(err)
            }

        })

        console.log(req.body)
    })
})

//airplane frissítése
app.put('/airplanes', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        const  {airplane_id, airplane_name, propulsion} =req.body

        connection.query('UPDATE airplanes SET airplane_name = ?, propulsion = ? WHERE airplane_id = ?',
                        [airplane_name, propulsion, airplane_id],
                        (err, rows) => {
            connection.release()

            if(!err) {
                res.send(`Airplane with the Record ID: ${airplane_id} has been updated`)
            } else {
                console.log(err)
            }

        })

        console.log(req.body)
    })
})

// courses tábla kilistázása
app.get('/courses', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('SELECT * FROM courses', (err, rows) => {
            connection.release()

            if(!err) {
                res.send(rows)
            } else {
                console.log(err)
            }
        })
    })
})

// course_id alapján course kilistázása
app.get('/courses/:course_id', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('SELECT * FROM courses WHERE course_id = ?',[req.params.course_id], (err, rows) => {
            connection.release()

            if(!err) {
                res.send(rows)
            } else {
                console.log(err)
            }
        })
    })
})

//airplane_id alapján course törlése
app.delete('/courses/:course_id', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('DELETE FROM courses WHERE course_id = ?',[req.params.course_id], (err, rows) => {
            connection.release()

            if(!err) {
                res.send(`Course with the Record ID: ${req.params.course_id} has been removed`)
            } else {
                console.log(err)
            }
        })
    })
})

//course felvétele
app.post('/courses', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        const params = req.body
        

        connection.query('INSERT INTO courses SET ?',params, (err, rows) => {
            connection.release()

            if(!err) {
                res.send(`Course with the Record ID: ${params.course_id} has been added`)
            } else {
                console.log(err)
            }

        })

        console.log(req.body)
    })
})

//airplane frissítése
app.put('/courses', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        const  {course_id, course_name, user_id, airplane_id, instructor, start_date, end_date, course_fee} =req.body

        connection.query('UPDATE courses SET course_name = ?, user_id = ?, airplane_id = ?, instructor = ?, start_date = ?, end_date = ?, course_fee = ? WHERE course_id = ?',
                        [course_name, user_id, airplane_id, instructor, start_date, end_date, course_fee, course_id],
                        (err, rows) => {
            connection.release()

            if(!err) {
                res.send(`Course with the Record ID: ${course_id} has been updated`)
            } else {
                console.log(err)
            }

        })

        console.log(req.body)
    })
})

// users_courses tábla kilistázása
app.get('/users_courses', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('SELECT * FROM users_courses', (err, rows) => {
            connection.release()

            if(!err) {
                res.send(rows)
            } else {
                console.log(err)
            }
        })
    })
})

//user_id és courses_id alapján users_courses kilistázása
app.get('/users_courses/:user_id/:course_id', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        const {user_id, course_id} = req.params

        connection.query('SELECT * FROM users_courses WHERE user_id = ? AND course_id = ? ',[user_id, course_id], (err, rows) => {
            connection.release()

            if(!err) {
                res.send(rows)
            } else {
                console.log(err)
            }
        })
    })
})

//user_id és courses_id alapján users_courses törlése
app.delete('/users_courses/:user_id/:course_id', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        const {user_id, course_id} = req.params

        connection.query('DELETE FROM users_courses WHERE user_id = ? AND course_id = ? ',[user_id, course_id], (err, rows) => {
            connection.release()

            if(!err) {
                res.send(`Course with the User ID: ${user_id} and Course ID: ${course_id} has been removed`)
            } else {
                console.log(err)
            }
        })
    })
})

//users_courses felvétele
app.post('/users_courses', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        const params = req.body
        

        connection.query('INSERT INTO users_courses SET ?',params, (err, rows) => {
            connection.release()

            if(!err) {
                res.send(`Course with the User ID: ${params.user_id} and Course ID: ${params.course_id} has been added`)
            } else {
                console.log(err)
            }

        })

        console.log(req.body)
    })
})


app.listen(port, () => console.log(`Listening on port ${port}`)) 