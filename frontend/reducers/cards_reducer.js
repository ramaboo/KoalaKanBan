import { merge } from 'lodash'

const CardsReducer = (state = {}, action) => {
  switch(action.type) {
    case "MOVE_CARD":
      let status = action.status
      let statusDup = state[status].slice();
      let stateDup = merge({}, state);
      const dragCard = statusDup[action.dragIndex];

      statusDup.splice(action.dragIndex, 1);
      statusDup.splice(action.hoverIndex, 0, dragCard);

      stateDup[status] = statusDup;

      return stateDup;

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
