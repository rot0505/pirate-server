const furnitureService = require('../services/furniture')

const save = async (req, res, next) => {
  const {
    pieceKey,
    roomId
  } = req.body

  const fuerniture = await furnitureService.findFurnitureByPieceKeyRoomId(pieceKey, roomId)
  if (!fuerniture) {
    //must add validate signMsg
    const result = await furnitureService.addFurniture(req.body)
    console.log('result in addFurniture', result)
    return res.json(result)
  } else {
    const furniture = {
      ...req.body
    }
    const result = await furnitureService.updateFurniture(furniture)
    console.log('result in updateFurniture', result)
    return res.json(result)
  }
}

const load = async (req, res, next) => {
  const {
    roomId
  } = req.body

  const result = await furnitureService.findFurnitureByRoomId(roomId)
  console.log('result in load', result)
  return res.json(result)
}

const remove = async (req, res, next) => {
  const {
    pieceKey,
    roomId
  } = req.body

  const result = await furnitureService.removeFurniture(pieceKey, roomId)
  console.log('result in remove', result)
  return res.json(result)
}

module.exports = {
  save,
  load,
  remove
}