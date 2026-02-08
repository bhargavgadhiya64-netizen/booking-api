const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let bookings = [];

// CREATE BOOKING
app.post("/bookings", (req,res)=>{
  const booking={
    id: Date.now(),
    name:req.body.name,
    date:req.body.date,
    service:req.body.service
  };
  bookings.push(booking);
  res.json({message:"Saved"});
});

// GET BOOKINGS
app.get("/bookings",(req,res)=>{
  res.json(bookings);
});

// DELETE BOOKING
app.delete("/bookings/:id",(req,res)=>{
  const id=parseInt(req.params.id);
  bookings=bookings.filter(b=>b.id!==id);
  res.json({message:"Deleted"});
});

app.listen(5000,()=>{
  console.log("Server running on http://localhost:5000");
});
