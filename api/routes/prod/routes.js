var appRouter = function (app) {
var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('./data/data.json', 'utf8'));

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.get("/api/hotelList/", function(req, res, next) {
    var hotelArray = JSON.stringify(obj);
    res.status(200).send(hotelArray);
  });

  app.get("/api/hotelList/:id", function(req, res, next) {
    var singularHotel = JSON.stringify(obj[req.params.id]);
    res.status(200).send(singularHotel);
  });

}

module.exports = appRouter;
