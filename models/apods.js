const mongoose = require('mongoose');

const apodSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  explanation: {
    type: String,
    required: true,
  },
 
});

const Apods = mongoose.model('Apods', apodSchema);

module.exports=Apods;
