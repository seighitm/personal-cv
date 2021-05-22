const express = require("express")
const nodemailer = require('nodemailer')
const { Client } = require('pg');
const cors = require('cors')
const app = express()
require('dotenv').config()

const PORT = process.env.PORT || 5000
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

app.use(cors())
app.use(express.static('public'))
app.use(express.json())

const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
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
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        }
    })

    const mailOptions = {
        from: 'Message CV <info@gmail.com>',
        to: 'seighitm@mail.ru',
        subject: `${req.body.subject}`,
        text: `Name: ${req.body.name}\nEmail: ${req.body.email}\n\n${req.body.message}`
    }

    transporter.sendMail(mailOptions, (error)=>{
        if(error){
            console.log(error)
            res.send('error')
        } else {
            console.log('Email Send')
            const query = `
            INSERT INTO messages (name, email, subject, message)
            VALUES ('${req.body.name}', '${req.body.email}', '${req.body.subject}', '${req.body.message}')
            `;

            client.query(query, (err) => {
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