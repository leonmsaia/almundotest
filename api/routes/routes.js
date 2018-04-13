var appRouter = function (app) {


  app.get("/", function(req, res) {
    res.status(200).send("Inicio");
  });

  app.get("/hotelList", function(req, res) {
    // res.status(200).send("Lista de Hoteles");
    res.render('index');
  });


}

module.exports = appRouter;
