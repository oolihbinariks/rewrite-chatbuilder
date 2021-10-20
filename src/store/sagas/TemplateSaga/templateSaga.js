import { put, call, takeLatest, all, takeEvery } from "redux-saga/effects";
import { addCategoryAction, addTemplateCategoryAction, deleteCategoryAction, deleteTemplateCategoryAction } from "../../actions/TemplatesActions/templatesActionCreators";
import { ADD_CATEGORY_SAGA, ADD_TEMPLATE_CATEGORY_SAGA, DELETE_CATEGORY_SAGA, DELETE_TEMPLATE_CATEGORY_SAGA } from "../../actions/TemplatesActions/templatesActions";

function* addCategoryWorker({payload: {categoryName, icon}}){
    console.log("categoryName", categoryName);
    const newCategory = {
        id: Math.round(Math.random() * Math.random() * 100 + 121).toString(),
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
    console.log("delete audienceId", categoryId);
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
        id: Math.round(Math.random() * Math.random() * 100 + 121).toString(),
        name: template.templateName,
        img: template.icon,
        schema:{}
    }
    try {

        console.log('addTemplateCategoryAction', template);
        yield put(addTemplateCategoryAction({categoryId, template: newTemplate}))
    } catch (error) {
        console.log('error.status', error.status);
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
    console.log("delete templateId", categoryId);
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

function* templatesSaga() {
   yield all([
       yield takeLatest(ADD_CATEGORY_SAGA, addCategoryWorker),
       yield takeLatest(DELETE_CATEGORY_SAGA, deleteCategoryWorker),
       yield takeEvery(ADD_TEMPLATE_CATEGORY_SAGA, addTemplateCategoryWorker),
       yield takeEvery(DELETE_TEMPLATE_CATEGORY_SAGA, deleteTemplateCategoryWorker),
    ])
}

export default templatesSaga;