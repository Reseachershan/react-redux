const intialstate = {
 
  movies: [],
};
const changeNumber = (state = intialstate, action) => {
  switch (action.type) {
    case "getapi":
      return { ...state };
    case "successapi":
      return { ...state, movies: action.payload };
    default: {
      return state;
    }
  }
};
export default changeNumber;
