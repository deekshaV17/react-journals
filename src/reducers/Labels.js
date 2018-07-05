const initialState = {
  labels : [{
    title: 'abc',
    id: 'abc',
    notes: [{
      id: '1',
    }, {
      id: '2',
    }],
  }],
};

const LabelsReducer = (state = initialState, action) => {
  console.log('in reducer', action.payload);
  switch (action.type) {
    case 'label/ADD':
      console.log('addingngnggg');
      return {
        ...state,
        labels: [...state.labels, action.payload]
      };
    default:
      return state;
  }
};

export default LabelsReducer;
