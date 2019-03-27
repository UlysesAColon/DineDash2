const express = require('express');
const router = express.Router();

//  Item Model
const Item = require('../../models/Item');

//  @route  GET api/items
// @desc    Get All Items
// @access  Public
router.get('/', (req, res)=>{
    Item.find()
      .sort({ date: -1})
      .then(items => res.json(items))
});

//  @route  POST api/items
// @desc    Create A Item
// @access  Public
router.post('/', (req, res)=>{
    const newItem = new Item({
      name: req.body.name,
      order: req.body.order,
      number: req.body.number
    //   test line for dev purposes   
    //   banana: req.body.banana
    });

    newItem.save().then(item => res.json(item));
});

router.put('/', (req, res)=>{
  const newItem = new Item({  
    order: req.body.name
  });

  newItem.save().then(res =>{
    console.log(res.data);
});
});

//  @route  DELETE api/items/:id
// @desc    Delete A Item
// @access  Public
router.delete('/:id', (req, res)=>{
 Item.findById(req.params.id)
  .then(item => item.remove().then(()=> res.json({success: true})))
  .catch(err => res.status(404).json({success: false}));
});


module.exports = router;