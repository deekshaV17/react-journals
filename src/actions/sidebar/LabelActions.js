import { getRandomId } from "../../scripts/Scripts";

const LabelActions = {

  createLabel: payload => dispatch => {
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


