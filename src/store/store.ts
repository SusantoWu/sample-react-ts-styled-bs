import { applyMiddleware, compose, createStore } from 'redux';
import { promiseMiddleware } from './middlewares';
import rootReducer from './reducers';

//@ts-ignore
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState = {}) {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancer(applyMiddleware(promiseMiddleware))
  );
}