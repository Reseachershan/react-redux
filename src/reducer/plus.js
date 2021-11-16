const intialstate = {
  number: 0,
  number2: 0,
  number3: 0,
  number4: 0,
};
const changeNumber = (state = intialstate, action) => {
  switch (action.type) {
    case "increamentA":
      return { ...state, number: state.number + action.payload };
    case "increamentB":
      return { ...state, number2: state.number2 + 1 };
    case "increamentB5":
      return { ...state, number3: state.number3 + action.payload };
    case "increamentA5":
      return { ...state, number4: state.number4 + action.payload };
    case "increamentAll":
      return {
        ...state,
        number: state.number + action.payload,
        number2: state.number2 + action.payload,
      };
    default: {
      return state;
    }
  }
};
export default changeNumber;
