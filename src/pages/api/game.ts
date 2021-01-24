export default (req, res) => {
    // const locale = req.headers["accept-language"] || "en";
  
    res.statusCode = 200;
    res.json([
        {
            "id":1,
            "team1":"Real Madrid",
            "team2":"Real Sociedad",
            "odd1":2.05,
            "oddDraw":2.75,
            "odd2":3.00,
            "gameTime":"13h40",
            "prediction":"2"
        },
        {
            "id":2,
            "team1":"KF Tirana",
            "team2":"KS Vllaznia",
            "odd1":2.15,
            "oddDraw":2.70,
            "odd2":2.75,
            "gameTime":"13h40",
            "prediction":"N"
        },{
            "id":3,
            "team1":"AS Slimane",
            "team2":"ES Metlaoui",
            "odd1":2.35,
            "oddDraw":2.55,
            "odd2":2.65,
            "gameTime":"13h55",
            "prediction":"N"
        },{
            "id":4,
            "team1":"Ben Guerdane",
            "team2":"Club Africain",
            "odd1":2.30,
            "oddDraw":2.45,
            "odd2":2.65,
            "gameTime":"13h55",
            "prediction":"N"
        },{
            "id":5,
            "team1":"Cittadella",
            "team2":"Lecce",
            "odd1":2.75,
            "oddDraw":3.10,
            "odd2":2.30 ,
            "gameTime":"13h40",
            "prediction":"1"
        }
    ]);
  };