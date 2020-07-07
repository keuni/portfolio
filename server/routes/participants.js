const express = require('express');
const router = express.Router();
const { participantsController } = require('../controller');

router.get('/data', participantsController.getParticipants);

router.post('/job', participantsController.postJobs);

router.post('/ability', participantsController.postAbility);

router.post('/company', participantsController.postCompany);

router.post('/interest', participantsController.postInterest);

module.exports = router;
