import { merge } from 'lodash'

const CardsReducer = (state = {}, action) => {
  switch(action.type) {
    case "MOVE_CARD":
      let todoDup = state.todo.slice();
      let stateDup = merge({}, state);
      const dragCard = todoDup[action.dragIndex];

      todoDup.splice(action.dragIndex, 1);
      todoDup.splice(action.hoverIndex, 0, dragCard);

      stateDup.todo = todoDup;

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
