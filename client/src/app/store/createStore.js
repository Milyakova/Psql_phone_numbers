import numbersReducer from "./numbers";
import countryCodesReducer from "./countryCodes";

const { combineReducers, configureStore } = require("@reduxjs/toolkit");
const rootReducer = combineReducers({
  numbers: numbersReducer,
  countryCodes: countryCodesReducer,
});

export function createStore() {
  return configureStore({ reducer: rootReducer });
}
