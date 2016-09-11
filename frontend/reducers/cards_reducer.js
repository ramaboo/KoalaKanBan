import { merge } from 'lodash'

const CardsReducer = (state = [], action) => {
  switch(action.type) {
    case "MOVE_CARD":
      let stateDup = state.slice();
      const dragCard = stateDup[action.dragIndex];

      stateDup.splice(action.dragIndex, 1);
      stateDup.splice(action.hoverIndex, 0, dragCard);

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
