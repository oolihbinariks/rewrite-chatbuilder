import { createSelector } from 'reselect';
export const getStateCategories = (state) => (state.categories)



export const getCategoriesAll = createSelector(
  getStateCategories,
  (categories) =>categories,
  );

export const getTemplateById = (state, id) =>(
  getStateCategories(state).filter(category => category.id === id)[0]
);
export const getTemplateCategoryById = (state, id, template) =>(
  getStateCategories(state).filter(category => category.id === id)[0]['templates'].filter(templ => templ.id === template)[0]
);
  // export const getAudienceByIdSelect =createSelector(
  //   getAudienceById,
  //   (audience ) =>audience,
  // );
