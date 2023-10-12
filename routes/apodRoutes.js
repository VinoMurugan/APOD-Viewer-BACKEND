const express = require('express');
const router = express.Router();
const Apods = require ('../models/apods.js');
const apod = require('../models/apod.js');



//Index
router.get('/', async (req, res) => {
    try {
      const apod = await Apods.find();
      res.render('Index', { apod : apod});
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Display the form to create a new APOD entry
  router.get('/new', (req, res) => {
    res.render('New');
  });
  
  // Create a new APOD entry

  router.post('/', async (req, res) => {
    try {
      const apod = await Apods.create(req.body);
      res.redirect('/apod');
    } catch (error) {
      console.error(error);
      // Handle errors here (e.g., render an error page)
    }
  });

  
  
  // Display a specific APOD entry
  router.get('/:id', async (req, res) => {
    try {
      const apodEntry = await Apods.findById(req.params.id);
      res.render('Show', { apods: apodEntry });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Display the form to edit a specific APOD entry
  router.get('/:id/edit', async (req, res) => {
    try {
      const apodEntry = await Apods.findById(req.params.id);
      res.render('Edit', { apods: apodEntry });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  

 // Delete a specific APOD entry
router.delete('/:id', async (req, res) => {
  try {
    const deletedApod = await Apods.findByIdAndRemove(req.params.id);
    if (!deletedApod) {
      return res.status(404).json({ error: 'APOD entry not found' });
    }
    res.status(204).send(); // Respond with a 204 status code for successful deletion
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

  
  const createApodEntry = async (newEntryData) => {
    try {
      const apodEntry = new Apods(newEntryData); // Create a new APOD document
      await apodEntry.save(); // Save it to the database
      console.log('Created APOD entry:', apodEntry);
    } catch (error) {
      console.error('Error creating APOD entry:', error);
    }
  };

  // Update a specific APOD entry
router.put('/:id', async (req, res) => {
  try {
    const updatedEntry = req.body; // Updated data for the APOD entry
    const apodEntry = await Apods.findByIdAndUpdate(req.params.id, updatedEntry, { new: true });
    
    if (!apodEntry) {
      return res.status(404).json({ error: 'APOD entry not found' });
    }
    
    res.json({ message: 'Entry updated successfully', apodEntry });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

  
  module.exports = router;
