import mongoose, { mongo } from 'mongoose';
import { bookModel, inventoryModel } from './model';

// Connect mongo
mongoose.connect('mongodb://127.0.0.1:27017/experiment');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
  console.log('################ Database connected ################');
});

// async function readBook(){
//   try {
//     let books = await bookModel.find()
//     console.log(books)
//   } catch (error){
//     console.log(error)
//   }
// }

// readBook()

async function readInventory(item) {
  try {
    let inventory = await inventoryModel.findByItem(item);
    console.log(inventory);
  } catch (error) {
    console.log(error);
  }
}

readInventory('Canvas');

// Database operation
const insertBook = (data) => {
  let book = new bookModel(data);
  book.save((err, doc) => {
    if (err) {
      console.log(err);
    }
    console.log(doc);
  });
};

// insertBook({
//   title: 'New Book',
//   author: 'rifki'
// })

const insertInventory = (data) => {
  let inventory = new inventoryModel(data);
  inventory.itemBranding()
  inventory.save((err, doc) => {
    if (err) {
      console.log(err);
    }
    console.log(doc);
  });
};

insertInventory({
  item: 'Canvas',
  qty: 100,
  tags: ['Cotton'],
  size: {
    h: 28,
    w: 35.5,
    uom: 'cm',
  },
});
