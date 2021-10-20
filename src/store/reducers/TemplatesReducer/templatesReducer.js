import { } from "../../actions/AudiencesActions/audiencesActions";
import { ADD_CATEGORY, ADD_TEMPLATE_CATEGORY, DELETE_CATEGORY, DELETE_TEMPLATE_CATEGORY, GET_ALL_CATEGORIES } from "../../actions/TemplatesActions/templatesActions";

const initialState = {
    categories:[
        {
            id: '1',
            name: 'First Category Test',
            img:'icon-template-2.png',
            templates:[
                {
                    id: '1',
                    name: 'Antonietta Plumer',
                    img:'icon-template-1.png',
                    qustionsId:null
                },
                {
                    id: '2',
                    name: 'Prudence Billingsley',
                    img:'icon-template-2.png',
                    qustionsId:null
                },
                {
                    id: '3',
                    name: 'Goldie Sturrock',
                    img:'icon-template-1.png',
                    qustionsId:null
                },
                {
                    id: '4',
                    name: 'Allegra Noland',
                    img:'icon-template-1.png',
                    qustionsId:null
                },
                {
                    id: '5',
                    name: 'Toshiko Sachs',
                    img:'icon-template-1.png',
                    qustionsId:null
                },
            ]
        },
        {
            id: '2',
            name: 'Second Category Test',
            img:'icon-template-1.png',
            templates:[
                {
                    id: '1',
                    name: 'Antonietta Plumer',
                    img:'icon-template-2.png',
                    qustionsId:null
                },
                {
                    id: '2',
                    name: 'Prudence Billingsley',
                    img:'icon-template-1.png',
                    qustionsId:null
                },
                {
                    id: '3',
                    name: 'Goldie Sturrock',
                    img:'icon-template-2.png',
                    qustionsId:null
                },
               
            ]
        },
        {
            id: '3',
            name: 'Third Category Test',
            img:'icon-template-2.png',
            templates:[ 
                {
                    id: '5',
                    name: 'Toshiko Sachs',
                    img:'icon-template-2.png',
                    qustionsId:null
                },
            ]
        },
        {
            id: '4',
            name: 'Fourth Category Test',
            img:'icon-template-1.png',
            templates:[
                {
                    id: '1',
                    name: 'Antonietta Plumer',
                    img:'icon-template-2.png',
                    qustionsId:null
                },
                {
                    id: '2',
                    name: 'Prudence Billingsley',
                    img:'icon-template-1.png',
                    qustionsId:null
                },
                {
                    id: '3',
                    name: 'Goldie Sturrock',
                    img:'icon-template-1.png',
                    qustionsId:null
                },
                {
                    id: '4',
                    name: 'Allegra Noland',
                    img:'icon-template-2.png',
                    qustionsId:null
                },
                {
                    id: '5',
                    name: 'Toshiko Sachs',
                    img:'icon-template-2.png',
                    qustionsId:null
                },
            ]
        },
        {
            id: '5',
            name: 'Fifth Category Test',
            img:'icon-template-2.png',
            templates:[
                {
                    id: '4',
                    name: 'Allegra Noland',
                    img:'icon-template-1.png',
                    qustionsId:null
                },
                {
                    id: '5',
                    name: 'Toshiko Sachs',
                    img:'icon-template-2.png',
                    qustionsId:null
                },
            ]
        },
    ]
}

export const templatesReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_ALL_CATEGORIES:
            return {...state};
        case ADD_CATEGORY:
            return {...state, categories:[...state.categories, payload]};
        case DELETE_CATEGORY:
            return {...state, categories:state.categories.filter(category => category.id !== payload)};
        case ADD_TEMPLATE_CATEGORY:
            const categoryById = state.categories.find(category => category.id === payload.categoryId)
            const categories = state.categories.filter(category => category.id !==payload.categoryId)
            return {...state, categories: [...categories, {...categoryById, templates: categoryById.templates.concat(payload.template)}]};
        case DELETE_TEMPLATE_CATEGORY:
            const delCategoryById = state.categories.find(category => category.id === payload.categoryId)
            const delCategories = state.categories.filter(category => category.id !==payload.categoryId)
            return {...state, categories: [...delCategories, {...delCategoryById, templates: delCategoryById.templates.filter(template => template.id !== payload.templateId)}]};
        default:
            return state;
    }
}