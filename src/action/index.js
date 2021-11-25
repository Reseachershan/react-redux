export const getapi = (url) => {
  return {
    type: "getapi",
    payload: url,
  };
};
export const successapi = (post) => {
  return {
    type: "successapi",
    payload: post,
  };
};
