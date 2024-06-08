const express = require("express");
const leaderboard = require("./db");
const leaderboardSchema = require("./type");

const app = express();
const port = 3000;
app.use(express.json());

app.get("/leaderboard", async (req, res) => {
  try{
    const leaderboardData = await leaderboard.find().sort({score: "desc"}).select({name:1, score:1, _id:0}).lean(); 
    res.json(leaderboardData);
}catch(err){
    console.error(err);
    res.status(500).send("An error occurred while fetching data");
    }
});

// post request to add data to the database
app.post("/add", async (req, res) => {

  const parsePayload = leaderboardSchema.safeParse(req.body);
    if (!parsePayload.success) {
         res.status(400).json({
            msg:"Invalid data"
         });
         return;
    }
  

  try {
    const { name, regNo, Department, score } = req.body;

    const existingDoc = await leaderboard.findOne({ regNo});
    if (existingDoc) {
      res.status(400).send("Data already exists");
      return;
    }

    await leaderboard.create({
      name,
      regNo,
      Department,
      score,
    });
    res.send("Data added successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while adding data");
  }
});

app.delete("/delete", async (req, res) => {
  try {
    const  deletepayload  = req.body;
    await leaderboard.deleteOne( {regNo:deletepayload.regNo} );
    res.send("Data deleted successfully"); 
  }
    catch (err) {
        console.error(err);
        res.status(500).send("An error occurred while deleting data");
    }
});

app.put("/update", async (req, res) => {
  try {
    const updatepayload = req.body;
    let newscore = 0;
    const existingDoc = await leaderboard.findOne({ regNo:updatepayload.regNo});
    if(existingDoc)
        newscore = existingDoc.score + updatepayload.score;
    await leaderboard.updateOne({regNo:updatepayload.regNo}, {score:newscore});
    res.send("Data updated successfully");
} catch (err) { 
    console.error(err);
    res.status(500).send("An error occurred while updating data");
}
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
