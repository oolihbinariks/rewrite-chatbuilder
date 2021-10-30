import { put, call, takeLatest, all, takeEvery } from "redux-saga/effects";
import { addCategoryAction, addElementForQuestionAction, addTemplateCategoryAction, deleteCategoryAction, deleteElementForQuestionAction, deleteTemplateCategoryAction } from "../../actions/TemplatesActions/templatesActionCreators";
import { ADD_CATEGORY_SAGA, ADD_ELEMENT_FOR_QUESTION_SAGA, ADD_TEMPLATE_CATEGORY_SAGA, DELETE_CATEGORY_SAGA, DELETE_ELEMENT_FOR_QUESTION_SAGA, DELETE_TEMPLATE_CATEGORY_SAGA } from "../../actions/TemplatesActions/templatesActions";
import { v4 as uuidv4 } from 'uuid';

function* addCategoryWorker({payload: {categoryName, icon}}){
    const newCategory = {
        id: uuidv4(),
        name: categoryName,
        img: icon,
        templates:[]
    }
    try {
        // const {audienceResponce} = yield call(apiAuthorize, '/login', {login, password})
        yield put(addCategoryAction(newCategory))
    } catch (error) {
        let message;
        switch (error.status) {
            case 500:
                message = "Internal Server Error";
                break;
            case 401:
                message = "Invalid Credentials";
                break;
        
            default:
                message = "Something went wrong";
                break;
        }
        // yield put(authFailureAction(message))
        // localStorage.removeItem('token')
    }
}

function* deleteCategoryWorker({payload: categoryId}){
    try {
        // const {audienceResponce} = yield call(apiAuthorize, '/login', {login, password})
        yield put(deleteCategoryAction(categoryId))
    } catch (error) {
        let message;
        switch (error.status) {
            case 500:
                message = "Internal Server Error";
                break;
            case 401:
                message = "Invalid Credentials";
                break;
        
            default:
                message = "Something went wrong";
                break;
        }
        // yield put(authFailureAction(message))
        // localStorage.removeItem('token')
    }
}

function* addTemplateCategoryWorker({payload: {categoryId, template}}){
    const newTemplate = {
        id: uuidv4(),
        name: template.templateName,
        img: template.icon,
        elements:[
            {
                id: uuidv4(),
                number: 'N1',
                type: 'start',
                position: { x: 600, y: 0 },
            },
        ],
    }
    try {
        yield put(addTemplateCategoryAction({categoryId, template: newTemplate}))
    } catch (error) {
        let message;
        switch (error.status) {
            case 500:
                message = "Internal Server Error";
                break;
            case 401:
                message = "Invalid Credentials";
                break;
        
            default:
                message = "Something went wrong";
                break;
        }
        // yield put(authFailureAction(message))
        // localStorage.removeItem('token')
    }
}

function* deleteTemplateCategoryWorker({payload: {categoryId, templateId}}){
    try {
        // const {categoryResponce} = yield call(apiAuthorize, '/login', {login, password})
        yield put(deleteTemplateCategoryAction({categoryId, templateId}))
    } catch (error) {
        let message;
        switch (error.status) {
            case 500:
                message = "Internal Server Error";
                break;
            case 401:
                message = "Invalid Credentials";
                break;
        
            default:
                message = "Something went wrong";
                break;
        }
        // yield put(authFailureAction(message))
        // localStorage.removeItem('token')
    }
}

function* addElementsForTemplatesWorker({payload: {categoryId, templateId, elements}}){
    try {
        yield put(addElementForQuestionAction({categoryId, templateId, elements}))
    } catch (error) {
        let message;
        switch (error.status) {
            case 500:
                message = "Internal Server Error";
                break;
            case 401:
                message = "Invalid Credentials";
                break;
        
            default:
                message = "Something went wrong";
                break;
        }
    }
}

function* deleteElementsForTemplatesWorker({payload: {categoryId, templateId, elementId}}){
    try {
        yield put(deleteElementForQuestionAction({categoryId, templateId, elementId}))
    } catch (error) {
        let message;
        switch (error.status) {
            case 500:
                message = "Internal Server Error";
                break;
            case 401:
                message = "Invalid Credentials";
                break;
        
            default:
                message = "Something went wrong";
                break;
        }
    }
}

function* templatesSaga() {
   yield all([
       yield takeLatest(ADD_CATEGORY_SAGA, addCategoryWorker),
       yield takeLatest(DELETE_CATEGORY_SAGA, deleteCategoryWorker),
       yield takeEvery(ADD_TEMPLATE_CATEGORY_SAGA, addTemplateCategoryWorker),
       yield takeEvery(DELETE_TEMPLATE_CATEGORY_SAGA, deleteTemplateCategoryWorker),
       yield takeEvery(ADD_ELEMENT_FOR_QUESTION_SAGA, addElementsForTemplatesWorker),
       yield takeEvery(DELETE_ELEMENT_FOR_QUESTION_SAGA, deleteElementsForTemplatesWorker),
    ])
}

export default templatesSaga;