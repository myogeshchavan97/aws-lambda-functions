exports.handler = function (event, context, callback) {
  const products = [
    {
      title: "Men's shoes",
      color: "black",
      price: 3000
    },
    {
      title: "T-Shirt",
      color: "white",
      price: 1000
    },
    {
      title: "Leather jacket",
      color: "brown",
      price: 1500
    }
  ];

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(products)
  });
};
