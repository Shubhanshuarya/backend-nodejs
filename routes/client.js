const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');
const { verifyToken } = require('./middleware');

// Client CRUD routes
router.post('/create', clientController.createClient);
router.get('/', clientController.getAllClients);
router.get('/:id', clientController.getClientById);
router.put('/:id', clientController.updateClient);D
router.delete('/:id', clientController.deleteClient);
router.post('/createAgencyClient', verifyToken, clientController.createAgencyClient);
router.get('/topClient', clientController.topClient);

module.exports = router;
