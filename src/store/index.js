import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { authReducer } from './reducers/AuthReducer/authReducer'
import { audiencesReducer } from './reducers/AudiencesReducer/audiencesReducer'
import rootSaga from './sagas'
import { composeWithDevTools } from 'redux-devtools-extension';
import { templatesReducer } from './reducers/TemplatesReducer/templatesReducer'
const rootReducers = combineReducers({
    auth: authReducer,
    audiences: audiencesReducer,
    templates: templatesReducer,
})

const sagaMiddleware = createSagaMiddleware()
const middlewares = applyMiddleware(sagaMiddleware)

const store = createStore(rootReducers, composeWithDevTools(middlewares))
sagaMiddleware.run(rootSaga)
export default store