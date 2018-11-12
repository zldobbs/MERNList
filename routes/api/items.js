const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

// @route   GET api/items
// @desc    Get all items
// @access  Public
router.get('/', (req, res) => {
    Item.find().sort({ date: -1 })
      .then(items => { res.json(items) })
      .catch(err => { res.json(err) });
});

// @route   POST api/items
// @desc    Create an item 
// @access  Public (should be private if authentication is added)
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save()
      .then(item => { res.json(item) })
      .catch(err => { res.json(err) });
});

// @route   DELETE api/items
// @desc    Delete an item
// @access  Public (should be private if authentication is added)
router.delete('/:id', (req, res) => {
    Item.findByIdAndRemove(req.params.id)
      .then(() => res.json({success: true}))
      // res.json will send 200 status which would be incorrect
      .catch(err => res.status(404).json({success: false, msg: err}));
});

module.exports = router; 