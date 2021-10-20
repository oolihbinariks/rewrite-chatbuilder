import { a} from "../../actions/AudiencesActions/audiencesActions";
import { ADD_CATEGORY, ADD_TEMPLATE_CATEGORY, DELETE_CATEGORY, DELETE_TEMPLATE_CATEGORY, GET_ALL_CATEGORIES } from "../../actions/TemplatesActions/templatesActions";

const initialState = {
    id: '1',
    steps:[
        id	            
message	       
user	          
options	       
validator	     
trigger	       
avatar	        
delay	         
end	           
placeholder	   
hideInput	     
inputAttributes
metadata	       
    ]
}

export const questionsTemplateReducer = (state = initialState, {type, payload}) => {
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