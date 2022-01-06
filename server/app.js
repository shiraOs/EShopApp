const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

const buildPath = path.join(__dirname, '..', 'build');

app.use(express.static(buildPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
});

const productRoutes = require("./api/routes/products");

// Log server actions
app.use(morgan('dev'));
// Set routes to handle products requests
app.use("/products", productRoutes);
// Catch any requests that didn't got handle
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});
// Handel any error thrown - db for example
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;