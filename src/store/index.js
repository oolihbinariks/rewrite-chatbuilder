import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

import { authReducer } from './reducers/AuthReducer/authReducer'
import { audiencesReducer } from './reducers/AudiencesReducer/audiencesReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import { templatesReducer } from './reducers/TemplatesReducer/templatesReducer'
import { questionsTemplateReducer } from './reducers/QuestionsReducer/questionsReducer'


const rootReducers = combineReducers({
    auth: authReducer,
    audiences: audiencesReducer,
    templates: templatesReducer,
    questions: questionsTemplateReducer,
})

const sagaMiddleware = createSagaMiddleware()
const middlewares = applyMiddleware(sagaMiddleware)

const store = createStore(rootReducers, composeWithDevTools(middlewares))
sagaMiddleware.run(rootSaga)
export default store