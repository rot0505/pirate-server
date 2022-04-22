const Furniture = require('../models/furniture')

const findFurnitureByPieceKeyRoomId = async (pieceKey: string, roomId: string) => {
  const furniture = await Furniture.findOne({ pieceKey: pieceKey, roomId: roomId })
  return furniture
}

const findFurnitureByRoomId = async (roomId: string) => {
  const furniture = await Furniture.find({ roomId: roomId })
  return furniture
}

const addFurniture = async (furniture: any) => {
  const furnitureData = {
    ...furniture,
  }
  const newFurniture = new Furniture(furnitureData)
  const furnitureRes = await newFurniture.save()
  return furnitureRes
}

const updateFurniture = async (furniture: any) => {

  await Furniture.findOneAndUpdate({ pieceKey: furniture.pieceKey, roomId: furniture.roomId }, furniture)
  const res = await Furniture.findOne({ pieceKey: furniture.pieceKey, roomId: furniture.roomId })
  return res
}

const removeFurniture = async (pieceKey: string, roomId: string) => {
  const res = await Furniture.deleteOne({ pieceKey: pieceKey, roomId: roomId })
  return res
}

module.exports = {
  findFurnitureByPieceKeyRoomId,
  findFurnitureByRoomId,
  addFurniture,
  updateFurniture,
  removeFurniture
}