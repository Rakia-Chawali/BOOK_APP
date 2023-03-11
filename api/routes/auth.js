import express from "express";
const router = express.Router();
router.get("/",(req,res)=>{
    res.send("HELLO THIS IS AUTH ENDPOINT")
})
router.get("/register", (req, res) => {
  res.send("HELLO THIS IS AUTH REGISTER ENDPOINT");
});




export default router