const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/items');

// @route   GET api/items
// @desc    Get All Items`
// @access  Public
router.get('/', (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});


router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name,
    amount: req.body.amount,
    
    date: req.body.date
  
  });

  newItem.save().then(item => res.json(item));
});

// @route   DELETE api/items/:id
// @desc    Delete A Item
// @access  Private
router.delete('/:id',  (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
