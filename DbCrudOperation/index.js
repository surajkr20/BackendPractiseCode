const express = require("express");
const app = express();

const userModel = require("./userModel");

app.get("/", (req, res) => {
  res.send("this is home tab");
});

app.get("/create", async (req, res) => {
  createdUser = await userModel.create({
    name: "Abhinav",
    emailId: "surajkumar@gmail.com",
    userName: "Abhinav20",
  });
  res.json(createdUser);
});

app.get("/update", async (req, res) => {
  let updatedUser = await userModel.findOneAndUpdate(
    { name: "suraj", userName: "AbhinavBhardwaj.20", emailId: "suraj71308kumar@gmail.com" }
  );
  res.json(updatedUser);
});

app.get("/read", async (req, res) => {
  let users = await userModel.find()
  res.json(users);
});

// for finding specific user
app.get("/find", async (req, res) => {
  let users = await userModel.findOne({userName : 'Abhinav20'})
  res.json(users);
});

app.get('/delete',async (req, res)=>{
    let deltedUser = await userModel.findOneAndDelete({emailId: "Raushan@gmail.com"})
    res.json(deltedUser)
})

app.listen(3000, () => {
  console.log("server started at port 3000");
});
