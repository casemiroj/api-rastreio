class TrackController {
  getTrack(req, res) {
    res.send('Funcionou');
  }
}

module.exports = new TrackController();
