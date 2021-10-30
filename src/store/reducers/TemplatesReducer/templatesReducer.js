import { ADD_CATEGORY, ADD_ELEMENT_FOR_QUESTION, ADD_HOVERED_ELEMENT, ADD_TEMPLATE_CATEGORY, DELETE_CATEGORY,
    DELETE_ELEMENT_FOR_QUESTION, DELETE_HOVERED_ELEMENT, DELETE_TEMPLATE_CATEGORY, GET_ALL_CATEGORIES,
    SELECT_DELETE_ELEMENT_FOR_QUESTION, SET_RFI_OBJ, UPDATE_SET_ELEMENTS_FOR_QUESTION } from "../../actions/TemplatesActions/templatesActions";
import { v4 as uuidv4 } from 'uuid';
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
                    elements:[
                        {
                            id: uuidv4(),
                            number: 'N1',
                            type: 'start',
                            position: { x: 600, y: 0 },
                        },
                    ],
                },
                {
                    id: '2',
                    name: 'Prudence Billingsley',
                    img:'icon-template-2.png',
                    elements:[
                        {
                            id: uuidv4(),
                            number: 'N1',
                            type: 'start',
                            position: { x: 600, y: 0 },
                        },
                    ],
                },
                {
                    id: '3',
                    name: 'Goldie Sturrock',
                    img:'icon-template-1.png',
                    elements:[
                        {
                            id: uuidv4(),
                            number: 'N1',
                            type: 'start',
                            position: { x: 600, y: 0 },
                        },
                    ],
                },
                {
                    id: '4',
                    name: 'Allegra Noland',
                    img:'icon-template-1.png',
                    elements:[
                        {
                            id: uuidv4(),
                            number: 'N1',
                            type: 'start',
                            position: { x: 600, y: 0 },
                        },
                    ],
                },
                {
                    id: '5',
                    name: 'Toshiko Sachs',
                    img:'icon-template-1.png',
                    elements:[
                        {
                            id: uuidv4(),
                            number: 'N1',
                            type: 'start',
                            position: { x: 600, y: 0 },
                        },
                    ],
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
                    elements:[
                        {
                            id: uuidv4(),
                            number: 'N1',
                            type: 'start',
                            position: { x: 600, y: 0 },
                        },
                    ],
                },
                {
                    id: '2',
                    name: 'Prudence Billingsley',
                    img:'icon-template-1.png',
                    elements:[
                        {
                            id: uuidv4(),
                            number: 'N1',
                            type: 'start',
                            position: { x: 600, y: 0 },
                        },
                    ],
                },
                {
                    id: '3',
                    name: 'Goldie Sturrock',
                    img:'icon-template-2.png',
                    elements:[
                        {
                            id: uuidv4(),
                            number: 'N1',
                            type: 'start',
                            position: { x: 600, y: 0 },
                        },
                    ],
                },
               
            ]
        },
        {
            id: '3',
            name: 'Fifth Category Test',
            img:'icon-template-2.png',
            templates:[
                {
                    id: '1',
                    name: 'Allegra Noland',
                    img:'icon-template-1.png',
                        elements:[
                            {
                                id: uuidv4(),
                                number: 'N1',
                                type: 'start',
                                position: { x: 600, y: 0 },
                            },
                        ],
                },
                {
                    id: '2',
                    name: 'Toshiko Sachs',
                    img:'icon-template-2.png',
                        elements:[
                            {
                                id: uuidv4(),
                                number: 'N1',
                                type: 'start',
                                position: { x: 600, y: 0 },
                            },
                        ],
                },
            ]
        },
    ],
    hoveredElement:null,
    selectedDelElement:null,
    RFInstObj:null
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
        case ADD_ELEMENT_FOR_QUESTION:
            const categorById = state.categories.find(category => category.id === payload.categoryId)
            const categores = state.categories.filter(category => category.id !==payload.categoryId)
            const templateById = categorById.templates.find(template => template.id === payload.templateId)
            const templates = categorById.templates.filter(template => template.id !==payload.templateId)
            return {...state, categories: [...categores, {...categorById, templates: [...templates, {...templateById, elements:templateById.elements.concat(payload.elements)}]}]};
        case UPDATE_SET_ELEMENTS_FOR_QUESTION:
            const categorId = state.categories.find(category => category.id === payload.categoryId)
            const setCategores = state.categories.filter(category => category.id !==payload.categoryId)
            const templateId = categorId.templates.find(template => template.id === payload.templateId)
            const setTemplates = categorId.templates.filter(template => template.id !==payload.templateId)
            return {...state, categories: [...setCategores, {...categorId, templates: [...setTemplates, {...templateId, elements:payload.elements}]}]};
        case DELETE_ELEMENT_FOR_QUESTION:
            const delCategorById = state.categories.find(category => category.id === payload.categoryId)
            const delCategores = state.categories.filter(category => category.id !==payload.categoryId)
            const delTemplateById = delCategorById.templates.find(template => template.id === payload.templateId)
            const delTemplates = delCategorById.templates.filter(template => template.id !==payload.templateId)
            return {...state, categories: [...delCategores, {...delCategorById, templates: [...delTemplates, {...delTemplateById, elements:delTemplateById.elements.filter(element=>element.id !== payload.elementId)}]}]};
        case SELECT_DELETE_ELEMENT_FOR_QUESTION:
            const selectDelCategorById = state.categories.find(category => category.id === payload.categoryId)
            const selectDelTemplateById = selectDelCategorById.templates.find(template => template.id === payload.templateId)
            return {...state, selectedDelElement: selectDelTemplateById.elements.find(element=>element.id === payload.elementId)};
        case ADD_HOVERED_ELEMENT:
            return {...state, hoveredElement: payload}
        case DELETE_HOVERED_ELEMENT:
            return {...state, hoveredElement: null}
        case SET_RFI_OBJ:
            return {...state, RFInstObj:payload};
        default:
            return state;
    }
}