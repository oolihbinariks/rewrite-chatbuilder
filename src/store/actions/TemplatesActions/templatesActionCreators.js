import { ADD_CATEGORY, ADD_CATEGORY_SAGA, ADD_ELEMENT_FOR_QUESTION, ADD_ELEMENT_FOR_QUESTION_SAGA, ADD_HOVERED_ELEMENT, ADD_TEMPLATE_CATEGORY, ADD_TEMPLATE_CATEGORY_SAGA, DELETE_CATEGORY, DELETE_CATEGORY_SAGA, DELETE_ELEMENT_FOR_QUESTION, DELETE_ELEMENT_FOR_QUESTION_SAGA, DELETE_HOVERED_ELEMENT, DELETE_TEMPLATE_CATEGORY, DELETE_TEMPLATE_CATEGORY_SAGA, GET_ALL_CATEGORIES, SELECT_DELETE_ELEMENT_FOR_QUESTION, SET_RFI_OBJ, UPDATE_SET_ELEMENTS_FOR_QUESTION } from "./templatesActions"

export const getAllCategoriesAction = () => ({
    type: GET_ALL_CATEGORIES,
})

export const addCategoryAction = (category) => ({
    type: ADD_CATEGORY,
    payload: category
})
export const addCategorySagaAction = (category) => ({
    type: ADD_CATEGORY_SAGA,
    payload: category
})
export const deleteCategoryAction = (categoryId) => ({
    type: DELETE_CATEGORY,
    payload: categoryId
})
export const deleteCategorySagaAction = (categoryId) => ({
    type: DELETE_CATEGORY_SAGA,
    payload: categoryId
})
export const addTemplateCategoryAction = ({categoryId, template}) => ({
    type: ADD_TEMPLATE_CATEGORY,
    payload: {categoryId, template}
})
export const addTemplateCategorySagaAction = ({categoryId, template}) => ({
    type: ADD_TEMPLATE_CATEGORY_SAGA,
    payload: {categoryId, template}
})
export const deleteTemplateCategoryAction = ({categoryId, templateId}) => ({
    type: DELETE_TEMPLATE_CATEGORY,
    payload: {categoryId, templateId}
})
export const deleteTemplateCategorySagaAction = ({categoryId, templateId}) => ({
    type: DELETE_TEMPLATE_CATEGORY_SAGA,
    payload: {categoryId, templateId}
})
export const addElementForQuestionSagaAction = ({categoryId, templateId, elements}) => ({
    type: ADD_ELEMENT_FOR_QUESTION_SAGA,
    payload: {categoryId, templateId, elements}
})
export const addElementForQuestionAction = ({categoryId, templateId, elements}) => ({
    type: ADD_ELEMENT_FOR_QUESTION,
    payload: {categoryId, templateId, elements}
})
export const addHoveredElementAction = (elementId) => ({
    type: ADD_HOVERED_ELEMENT,
    payload: elementId
})
export const deleteHoveredElementAction = () => ({
    type: DELETE_HOVERED_ELEMENT
})
export const updateSetElementsForQuestionAction = ({categoryId, templateId, elements}) => ({
    type: UPDATE_SET_ELEMENTS_FOR_QUESTION,
    payload: {categoryId, templateId, elements}
})
export const deleteElementForQuestionSagaAction = ({categoryId, templateId, elementId}) => ({
    type: DELETE_ELEMENT_FOR_QUESTION_SAGA,
    payload: {categoryId, templateId, elementId}
})
export const deleteElementForQuestionAction = ({categoryId, templateId, elementId}) => ({
    type: DELETE_ELEMENT_FOR_QUESTION,
    payload: {categoryId, templateId, elementId}
})
export const selectDeleteElementForQuestionAction = ({categoryId, templateId, elementId}) => ({
    type: SELECT_DELETE_ELEMENT_FOR_QUESTION,
    payload: {categoryId, templateId, elementId}
})
export const setRFIObjectAction = (rfiObject) => ({
    type: SET_RFI_OBJ,
    payload: rfiObject
})