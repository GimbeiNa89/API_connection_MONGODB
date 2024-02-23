const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/productModel');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello NODE API');
});

app.get('/blog', (req, res) => {
  res.send('Hello blog, my name is devGimbei');
});

// to show all products
app.get('/products', async(req, res) => {
try {
const products = await Product.find({});
res.status(200).json(products);
} catch(error) {
  res.status(500).json({message: error.message})
}
});

// to get product by id
app.get('/products/:id', async(req, res) => {
  try {
    const {id} = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({message: error.message})
  }
})

// to insert a new product
app.post('/products', async(req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);

  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message});
  }
});

// to update a product
app.patch('/products/:id', async(req, res) => {
  try {
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    // we cannot find the product we want to update
    if(!product) {
      return res.status(404).json({message: `cannot find any product with ID ${id}`});
     } 
     res.status(200).json(product);

    } catch (error) {
    res.status(500).json({message: error.message});
  }
 }
);

// to delete a product
app.delete('/products/:id', async(req, res) => {
  try {
    const {id} = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    if(!product) {
      return res.status(404).json({message: `cannot find any product with ID ${id}`});
     } 
res.status(200).json(deletedProduct);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
})


mongoose.set("strictQuery", false);
mongoose.connect('mongodb+srv://brunoherculessilva:WFtMKNd9HyqRhaD4@devgimbeiapi.fvzrafs.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(() => {
  console.log('connected to MongoDB');
  app.listen(3000, () => {
    console.log('Node API is running on port 3000');
  });
}).catch((error) => {
  console.log(error);
});                             