import { createSelector } from 'reselect';
export const getStateAudiences = (state) => (state.audiences)


export const getAudienceById = (state, id) =>(
  getStateAudiences(state).filter(audience => audience.id === id)[0]
);

  export const getAudiencesAll = createSelector(
    getStateAudiences,
    (audiences) =>audiences,
  );
  export const getAudienceByIdSelect =createSelector(
    getAudienceById,
    (audience ) =>audience,
  );