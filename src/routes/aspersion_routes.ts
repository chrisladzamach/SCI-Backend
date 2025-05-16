import express from 'express';
import { AspersionControlController } from '../controllers/aspersion_control_controller';

const router = express.Router();
const aspersionControlController = new AspersionControlController();

router.post('/', aspersionControlController.createAspersionControl.bind(aspersionControlController));
router.get('/', aspersionControlController.getAllAspersionControls.bind(aspersionControlController));
router.get('/:id', aspersionControlController.getAspersionControlById.bind(aspersionControlController));

export default router;
