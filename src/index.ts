import express, { Application } from 'express';
import bodyParser from 'body-parser';
import { AspersionControlController } from './controllers/aspersion_control_controller';
import cors from 'cors';

const app: Application = express();
const port = process.env.PORT || 3000;
const aspersionControlController = new AspersionControlController();

app.use(bodyParser.json());
app.use(cors());

app.post('/api/aspersion-controls', aspersionControlController.createAspersionControl.bind(aspersionControlController));
app.get('/api/aspersion-controls', aspersionControlController.getAllAspersionControls.bind(aspersionControlController));
app.get('/api/aspersion-controls/:id', aspersionControlController.getAspersionControlById.bind(aspersionControlController));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});