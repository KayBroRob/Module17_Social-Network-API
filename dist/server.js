import express from 'express';
import db from './config/connection.js';
import routes from './routes/index.js';
const PORT = 3001;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
db.once('open', () => {
    app.listen(PORT, () => {
        console.log('API server running on port ${PORT}!');
    });
});
