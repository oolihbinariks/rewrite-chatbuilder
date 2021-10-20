import { ADD_CATEGORY, ADD_CATEGORY_SAGA, ADD_TEMPLATE_CATEGORY, ADD_TEMPLATE_CATEGORY_SAGA, DELETE_CATEGORY, DELETE_CATEGORY_SAGA, DELETE_TEMPLATE_CATEGORY, DELETE_TEMPLATE_CATEGORY_SAGA, GET_ALL_CATEGORIES } from "./templatesActions"

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