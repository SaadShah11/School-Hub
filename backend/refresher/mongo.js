const MongoClient = require('mongodb').MongoClient;

const url =
  'mongodb+srv://saad:saad@schoolhub.zmtqr.mongodb.net/userss?retryWrites=true&w=majority';

const createProduct = async (req, res, next) => {
  const newProduct = {
    type: req.body.type,
    email: req.body.email,
    username: req.body.username,
    phoneNumber: req.body.phoneNumber,
    password: req.body.password
  };
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db();
    const result = db.collection('products').insertOne(newProduct);
  } catch (error) {
    return res.json({message: 'Could not store data.'});
  };
  client.close();

  res.json(newProduct);
  
};

const getProducts = async (req, res, next) => {
  const client = new MongoClient(url);

  let products;

  try {
    await client.connect();
    const db = client.db();
    products = await db.collection('products').find().toArray();
  } catch (error) {
    return res.json({message: 'Could not retrieve products.'});
  };
  client.close();

  res.json(products);
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
