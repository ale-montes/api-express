import express from 'express';
import morgan from 'morgan';
import { characterRouter } from './character/character.routes.js';

const app = express();
const PORT = 3000;
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/characters', characterRouter);

app.use((_req, resp) => {
  resp.status(404).send({ error: 'Resource not found' });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
