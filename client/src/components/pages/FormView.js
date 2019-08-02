import React from 'react'
import AppForm from '../Form'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../Reducers/index'
import { Provider } from 'react-redux'

const FormView = () => {
  const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
  return (
    <div>
      <Provider store={createStoreWithMiddleware(reducers)}>
        <AppForm />
      </Provider>
    </div>
  )
}

export default FormView
