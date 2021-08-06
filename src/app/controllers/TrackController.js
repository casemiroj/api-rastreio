const { rastrearEncomendas } = require('correios-brasil');

class TrackController {
  async getTrack(req, res) {
    const { code } = req.params;
    const track = await rastrearEncomendas([code]);
    res.json(track);
  }
}

module.exports = new TrackController();
