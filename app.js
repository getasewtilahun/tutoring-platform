const express = require("express")
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()
const app = express()
const PORT = process.env.PORT
const db = require('./config/db')

const userRoutes = require('./routes/userRoutes')
const subjectRoutes = require('./routes/subjectRoutes')
const profileRoutes = require('./routes/profileRoutes')
const educationRoutes = require('./routes/educationRoutes')
const reportRoutes = require('./routes/reportRoutes')
const reviewRoutes=require('./routes/reviewRoutes')
const aboutRoutes=require('./routes/aboutRoutes')
const scheduleRoutes=require('./routes/scheduleRoutes')
const quizRoutes=require('./routes/quizRoutes')
const questionRoutes=require('./routes/questionRoutes')
const choiceRoutes=require('./routes/choiceRoutes')

app.use(express.json())
app.use('/images', express.static('images'));
app.use(cors())
app.use('/api', userRoutes)
app.use('/api', subjectRoutes)
app.use('/api', profileRoutes)
app.use('/api', educationRoutes)
app.use('/api', reportRoutes)
app.use('/api',reviewRoutes)
app.use('/api',aboutRoutes)
app.use('/api',scheduleRoutes)
app.use('/api',quizRoutes)
app.use('/api',questionRoutes)
app.use('/api',choiceRoutes)


db.sync().then(result => {
    if (result) {
        app.listen(PORT || 5000, () => {
            console.log('app started at port:', PORT);
        });
    } else {
        console.log("Database not connected!")
    }
}).catch(error => {
    console.log(error);
});