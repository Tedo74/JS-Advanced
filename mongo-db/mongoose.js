const mongoose = require('mongoose');

connStr = 'mongodb://localhost:27017/myDb';

mongoose.connect(
  connStr,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err);
    }
  }
);

const carSchema = {
  model: { type: String, required: true },
  price: { type: Number, required: false },
};
const Car = new mongoose.model('Cars', carSchema);
let newCar = new Car({ model: 'Mazda', price: 5000 });
newCar.save();
