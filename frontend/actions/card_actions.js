export const moveCard = (dragIndex, hoverIndex, status) => ({
  type: "MOVE_CARD",
  dragIndex,
  hoverIndex,
  status
})
export const pushCard = (card, targetStatus) => ({
  type: "PUSH_CARD",
  card,
  targetStatus
})
export const removeCard = (index, sourceStatus) => ({
  type: "REMOVE_CARD",
  index,
  sourceStatus
})
