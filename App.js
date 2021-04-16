import React from 'react';

import NavegadorContatos from './navegacao/NavegadorContatos';

import { 
  createStore, 
  combineReducers, 
  applyMiddleware 
} from 'redux';

import { Provider } from 'react-redux';

import reduxThunk from 'redux-thunk';
import contatosReducers from './store/contatos-reducers';

const rootReducer = combineReducers({
  contatos: contatosReducers
});

const store = createStore (rootReducer, applyMiddleware (reduxThunk));

export default function App() {
  return ( 
    <Provider store={store}>
      <NavegadorContatos />
    </Provider>
  );
}
