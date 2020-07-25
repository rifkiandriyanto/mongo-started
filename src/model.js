import { Schema, model } from 'mongoose';
// Define Schema
const bookSchema = new Schema({
  title: String,
  author: String,
});

const inventorySchema = new Schema({
  item: { type: String, required: true },
  qty: Number,
  tags: [String],
  size: {
    h: Number,
    w: Number,
    uom: String,
  },
});

// Static
inventorySchema.statics = {
  findByItem(item) {
    return this.find({ item });
  },
};

// Method
inventorySchema.methods = {
  itemBranding() {
    this.item = this.item + ' by your company';
  },
};

// Create model
const bookModel = new model('Books', bookSchema);
const inventoryModel = new model('Inventory', inventorySchema);

export { bookModel, inventoryModel };
