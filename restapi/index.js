import express from 'express';
import cors from 'cors';

const app = express()
const port = 8080;

app.use(cors())

app.listen(port, () => {
    console.log("server is running on port: " + port);
})

app.get("/", (req, res) => {
    res.json("Bienvenido a tu primera api")
})

app.get('*', function (req, res) {
    res.send('what???', 404);
});