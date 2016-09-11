import { merge } from 'lodash'

const CardsReducer = (state = {}, action) => {
  switch(action.type) {
    case "MOVE_CARD":
      let moveStatus = action.status
      let moveStatusDup = state[moveStatus].slice();
      let moveStateDup = merge({}, state);
      const dragCard = moveStatusDup[action.dragIndex];

      moveStatusDup.splice(action.dragIndex, 1);
      moveStatusDup.splice(action.hoverIndex, 0, dragCard);

      moveStateDup[moveStatus] = moveStatusDup;

      return moveStateDup;

    case "REMOVE_CARD":
      let removeStatus = action.sourceStatus
      let removeStatusDup = state[removeStatus].slice();
      let removeStateDup = merge({}, state);

      removeStatusDup.splice(action.index, 1);

      removeStateDup[removeStatus] = removeStatusDup;

      return removeStateDup;

    case "PUSH_CARD":
      let pushStatus = action.targetStatus;
      let pushStatusDup = state[pushStatus].slice();
      let pushStateDup = merge({}, state);

      pushStatusDup.push(action.card)

      pushStateDup[pushStatus] = pushStatusDup;

      return pushStateDup;

    default:
      return state;
  }
};

export default CardsReducer;

// moveCard(dragIndex, hoverIndex) {
//   const { cards } = this.state;
//   const dragCard = cards[dragIndex];
//
//   this.setState(update(this.state, {
//     cards: {
//       $splice: [
//         [dragIndex, 1],
//         [hoverIndex, 0, dragCard]
//       ]
//     }
//   }));
// }
