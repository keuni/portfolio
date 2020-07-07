const { participants } = require('../db/models');

module.exports = {
  getParticipants: async (req, res) => {
    console.log('getParticipants');
    participants
      .findAll()
      .then((data) => {
        console.log(data);
        let reply = data.map((obj) => obj.dataValues);
        res.status(200).json(reply);
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  },
  postJobs: async (req, res) => {
    const { job } = req.body;
    console.log('job', job);
    participants
      .create({
        job,
      })
      .then((result) => {
        const { id, job } = result.dataValues;
        let reply = { id, job };
        res.status(200).json(reply);
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  },
  postAbility: async (req, res) => {
    let { id, ability } = req.body;
    ability = ability.join();

    participants
      .update({ ability }, { where: { id } })
      .then((result) => res.status(200).json(result))
      .catch((err) => {
        res.status(404).send(err);
      });
  },
  postCompany: async (req, res) => {
    let { id, company, developer } = req.body;
    participants
      .update({ company, developer }, { where: { id } })
      .then((result) => res.status(200).json(result))
      .catch((err) => {
        res.status(404).send(err);
      });
  },
  postInterest: async (req, res) => {
    let { id, interest } = req.body;
    console.log('interets', interest);
    participants
      .update({ interest }, { where: { id } })
      .then((result) => res.status(200).json(result))
      .catch((err) => {
        res.status(404).send(err);
      });
  },
};
