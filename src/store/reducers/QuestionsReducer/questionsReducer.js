import {ADD_ELEMENT_FOR_QUESTION} from '../../actions/QuestionsActions/questionActions'

const initialState = {
    id: '1',
    templateId: null,
    elements:[
        {
            id: '1',
            type: 'message',
            data: { 
            label: 'Input Node',
            firstMEssage: true,
            endMEssage: false,
            },
            position: { x: 0, y: 0 },
        },
    ],
}

export const questionsTemplateReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        // case GET_ALL_CATEGORIES:
        //     return {...state};
        // case ADD_CATEGORY:
        //     return {...state, categories:[...state.categories, payload]};
        // case DELETE_CATEGORY:
        //     return {...state, categories:state.categories.filter(category => category.id !== payload)};
        case ADD_ELEMENT_FOR_QUESTION:
            return {...state, elements: [...state.elements, payload]};
        // case DELETE_TEMPLATE_CATEGORY:
        //     const delCategoryById = state.categories.find(category => category.id === payload.categoryId)
        //     const delCategories = state.categories.filter(category => category.id !==payload.categoryId)
        //     return {...state, categories: [...delCategories, {...delCategoryById, templates: delCategoryById.templates.filter(template => template.id !== payload.templateId)}]};
        default:
            return state;
    }
}