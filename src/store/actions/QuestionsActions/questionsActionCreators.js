import { ADD_ELEMENT_FOR_QUESTION } from "./questionActions"

export const addElementForQuestionAction = (element) => ({
    type: ADD_ELEMENT_FOR_QUESTION,
    payload: element
})
// export const addCategorySagaAction = (category) => ({
//     type: ADD_CATEGORY_SAGA,
//     payload: category
// })
// export const deleteCategoryAction = (categoryId) => ({
//     type: DELETE_CATEGORY,
//     payload: categoryId
// })
// export const deleteCategorySagaAction = (categoryId) => ({
//     type: DELETE_CATEGORY_SAGA,
//     payload: categoryId
// })
// export const addTemplateCategoryAction = ({categoryId, template}) => ({
//     type: ADD_TEMPLATE_CATEGORY,
//     payload: {categoryId, template}
// })
// export const addTemplateCategorySagaAction = ({categoryId, template}) => ({
//     type: ADD_TEMPLATE_CATEGORY_SAGA,
//     payload: {categoryId, template}
// })
// export const deleteTemplateCategoryAction = ({categoryId, templateId}) => ({
//     type: DELETE_TEMPLATE_CATEGORY,
//     payload: {categoryId, templateId}
// })
// export const deleteTemplateCategorySagaAction = ({categoryId, templateId}) => ({
//     type: DELETE_TEMPLATE_CATEGORY_SAGA,
//     payload: {categoryId, templateId}
// })