const { Router } = require('express');
const TrackController = require('./app/controllers/TrackController');

const router = Router();

router.get('/track/:code', TrackController.getTrack);

module.exports = router;
