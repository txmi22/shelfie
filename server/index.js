require('dotenv').config();
const express = require('express');
const massive = require('massive');
const cors = require('cors');
const {SERVER_PORT, CONNECTION_STRING} = process.env;
const ctrl = require('./controller');

const app = express();

app.use(express.json());
app.use(cors());

massive(CONNECTION_STRING).then(database => {
    app.set('db', database);
    console.log('db is connected');
    app.listen(SERVER_PORT, () => console.log(`Server connected on ${SERVER_PORT}`)
    );
});

//endpoints
app.get("/api/products/:id", ctrl.getProduct);
app.get("/api/products", ctrl.getAllProducts);
app.post("/api/products", ctrl.addProduct);
app.put("/api/products/:id", ctrl.updateProduct);
app.delete("/api/products/:id", ctrl.deleteProduct);