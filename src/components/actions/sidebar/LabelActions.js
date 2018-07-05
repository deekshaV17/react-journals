import { getRandomId } from "../../scripts/Scripts";

const LabelActions = {

  createLabel: payload => dispatch => {
    console.log('payload', payload);
    const newLabel = {
      title: payload,
      id: getRandomId(),
      notes: [],
    };

    dispatch(LabelActions.addLabel(newLabel));
  },

  addLabel: payload => ({ type: 'label/ADD', payload }),
};

export default LabelActions;


