import { takeLatest, put, call, all } from "redux-saga/effects";
import { getapi, successapi } from "../action";

function* watchFetchProducts() {
  yield takeLatest("getapi", workerSaga);
}

async function fetchProducts(url) {
  let response = await fetch(url);
  let json = await response.json();
  return json;
}
function* workerSaga(action) {
  try {
    const movies = yield call(fetchProducts, action.payload);
    yield put({ type: "successapi", payload: movies });
  } catch (error) {}
}
export function* helloSaga() {
  yield all([watchFetchProducts()]);
}
