const express = require("express");
const router = express.Router();
const Movies = require("../models/movies.models");

router.get("/", async (req, res) => {
    try {
      const page = req.query.page || 1;
      const pagesize = req.query.pagesize || 12; 
      const skip = (page - 1) * pagesize; 
        if(req.query.sort){
            const filter = req.query.filter;
            const sort = req.query.sort;
            const s = { [sort] : -1 };
            const f = {"Major Genre":filter};
            console.log(f);
            var movies = await Movies.find(f).sort(s).skip(skip) 
            .limit(pagesize) 
            .lean()
            .exec();
        }else{
            var movies = await Movies.find().skip(skip) 
            .limit(pagesize) 
            .lean()
            .exec();
        }
        
      const totalPages = Math.ceil((await Movies.find().countDocuments()) / pagesize
      );
  
      return res.status(200).send({ movies, totalPages });
    } catch (err) {
      return res.status(500).send({ messageeeeee: err.message });
    }
  });


  module.exports = router;