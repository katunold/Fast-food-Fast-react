import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import index from '../reducers';

const store = createStore(index, composeWithDevTools(applyMiddleware(thunk)));
export default store;
