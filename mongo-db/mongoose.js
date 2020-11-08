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

const carSchema = new mongoose.Schema({
  model: { type: String, required: true },
  price: { type: Number, required: false },
});

carSchema.methods.bestCar = function () {
  console.log(this.model + ' is the best car');
};

const Car = new mongoose.model('Cars', carSchema);

//add new car to db
let newCar = new Car({ model: 'Peugeot', price: 2000 });
newCar.save();

//function
Car.findOne({ model: 'Fiat' }).then((foundedCar) => {
  foundedCar.bestCar();
});

//search conditions
Car.find()
  .or([{ model: 'Ford' }, { model: 'BMW' }])
  .sort({ price: -1 })
  .then((result) => {
    console.log(result);
  });
