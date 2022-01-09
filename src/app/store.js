// (1) import module dari `redux`
import { combineReducers, createStore, applyMiddleware, compose } from "redux";

import categoryReducer from "../features/category/reducer";
import manageProductReducer from "../features/manageProduct/reducer";
import listProductCheckoutReducer from "../features/listProductCheckout/reducer";
import transactionReducer from "../features/transaction/reducer";
import authReducer from "../features/auth/reducer";

// (2) import redux-thunk middleware
import thunk from "redux-thunk";

// (3) buat composer enhancer untuk menghubungkan dengan Chrome DevTools Redux
const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// (4) gabung reducer, untuk sementara kosong, karena kita belum membuat reducer
const rootReducers = combineReducers({
  categories: categoryReducer,
  manageProduct: manageProductReducer,
  listProductCheckout: listProductCheckoutReducer,
  transaction: transactionReducer,
  auth: authReducer,
});

// (5) buat store, dan gunakan composerEnhancer + middleware thunk
const store = createStore(
  rootReducers,
  composerEnhancer(applyMiddleware(thunk))
);

// (6) export store
export default store;
