import 'dotenv/config';
import express, { Application } from 'express';
import routes from './routes';
import db from './models'; // Asegúrate de importar db

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/', routes);

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  try {
    await db.sequelize.authenticate(); // Cambia a db.sequelize.authenticate()
    console.log('Database connected!');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
