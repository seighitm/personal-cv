const express = require("express")
const nodemailer = require('nodemailer')
const { Client } = require('pg');
const cors = require('cors')
const app = express()
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

const PORT = 5000;

app.use(cors())
app.use(express.static('public'))
app.use(express.json())

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'testdb',
    password: 'toor',
    port: 5432,
});

// const query = `
// CREATE TABLE messages (
//     name varchar,
//     email varchar,
//     subject varchar,
//     message text
// );
// `;
//
// client.query(query, (err, res) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log('Table is successfully created');
//     client.end();
// });

client.connect();

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/public/index.html')
})

app.post('/',(req,res)=>{
    console.log(req.body)
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "avia.trans.info@gmail.com",
            pass: "Trans.Avia_2020"
        }
    })

    const mailOptions = {
        from: 'Message <info@gmail.com>',
        to: req.body.email,
        subject: `${req.body.email} ${req.body.subject}`,
        text: req.body.message
    }

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log(error)
            res.send('error')
        } else {
            console.log('Email Send')
            const query = `
            INSERT INTO messages (name, email, subject, message)
            VALUES ('${req.body.name}', '${req.body.email}', '${req.body.subject}', '${req.body.message}')
            `;

            client.query(query, (err, res) => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log('Data insert successful');
                // client.end();
            });

            res.send('success')
        }
    })
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})