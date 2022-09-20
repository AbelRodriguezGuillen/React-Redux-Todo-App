import express from 'express';
const app = express();
import colors from 'colors'
import cors from 'cors'
import json from 'body-parser'
import { nanoid } from 'nanoid'
import bodyParser from 'body-parser';
import mysql from 'mysql'

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'policy_app'
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/get', (req, res) => {
    const sqlGet = 'SELECT * FROM policies_db'
    db.query(sqlGet, (error, result) => {
        res.send(result)
    })
})

// app.get('/policy_app', (req, res) => {
    //     const sqlInsert = "INSERT INTO policies_db (title, selected, cost) VALUES ('Health & Wealth', 0, '159.70')";
    //     db.query(sqlInsert, (error, result) => {
        //         console.log('error', error)
        //         console.log('result', result)
        //         res.send('Hello Express')
        //     });
        // });
        
app.post('/api/post', (req, res) => {
    const selected = req.body;
    const sqlInsert = "INSERT INTO policies_db (selected) VALUES (?)"
    db.query(sqlInsert, [selected], (error, result) => {
        if(error){
            console.log(error);
        }
    })
})
// app.get('/api/get/id', (req, res) => {
//     const {id} = req.params;
//     const sqlGet = 'SELECT * FROM policies_db WHERE '
//     db.query(sqlGet, id, (error, result) => {
//         if(error){
//             console.log(error)
//         }
//         res.send(result)
//     })
// })
app.patch('/api/patch/:id', (req, res) => {
    const {id} = req.params;
    const {selected} = req.body
    // const sqlUpdate = 'UPDATE policies_db SET selected to !selected'
    const sqlUpdate = 'UPDATE policies_db, policies_db2 SET policies_db.selected = policies_db2.selected WHERE policies_db.id = policies_db2.id'
    db.query(sqlGet, [id], (error, result) => {
        if(error){
            console.log(error)
        }
        res.send(result)
    })
})

        
        const PORT = 5000;
        app.listen(PORT, console.log(`Server running on port ${PORT}`.blue.bold));