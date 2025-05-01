const express = require('express');
const router = express.Router();

const products = [
  { id: 1, name: 'Black Boots' },
  { id: 2, name: 'White Boots' },
  { id: 3, name: 'Pink Gloves' },
  { id: 4, name: 'Yellow Gloves' },
  { id: 5, name: 'Rainbow Goggles' },
  { id: 6, name: 'Silver Goggles' },
  { id: 7, name: 'Green Helmet' },
  { id: 8, name: 'Blue Helmet' },
  { id: 9, name: 'Blue Jacket' },
  { id: 10, name: 'Yellow Jacket' },
  { id: 11, name: 'Orange Snowboard' },
  { id: 12, name: 'White Snowboard' }
];

const price = {
  1: 59.99,
  2: 89.99,
  3: 32.99,
  4: 26.99,
  5: 66.99,
  6: 99.99,
  7: 120.99,
  8: 100.99,
  9: 230.99,
  10: 180.99,
  11: 255.99,
  12: 319.99
};

router.get('/', (req, res) => {
  res.json(products);
});

router.get('/:productId', (req, res) => {
  const product = products.find(p => p.id == req.params.productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

router.get('/:productId/price', (req, res) => {
  const productId = req.params.productId;
  const productPrices = price[productId];
  if (productPrices) {
    res.json(productPrices);
  } else {
    res.status(404).json({ error: 'Price not found for product' });
  }
});

module.exports = router;