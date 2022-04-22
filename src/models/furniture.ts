import mongoose from 'mongoose'

const FurnitureSchema = new mongoose.Schema({
  pieceKey: {
    type: String,
    required: true,
  },
  roomId: {
    type: String,
    required: true,
  },
  posX: {
    type: Number,
    required: true,
  },
  posY: {
    type: Number,
    required: true,
  },
  posZ: {
    type: Number,
    required: true,
  },
  rotX: {
    type: Number,
    required: true,
  },
  rotY: {
    type: Number,
    required: true,
  },
  rotZ: {
    type: Number,
    required: true,
  },
  pieceType: {
    type: Number,
    required: true,
  },
  pieceLayer: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose?.model('Furniture', FurnitureSchema);