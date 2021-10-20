import { ADD_AUDIENCE, ADD_USERS_AUDIENCE, DELETE_AUDIENCE, DELETE_USERS_AUDIENCE, GET_ALL_AUDIENCES} from "../../actions/AudiencesActions/audiencesActions";

const initialState = {
    audiences:[
        {
            id: '1',
            name: 'First Audience Test',
            users:[
                {
                    id: '1',
                    fullName: 'Antonietta Plumer',
                    email:'antonietta@demo.com',
                    phone: '999494645643',
                },
                {
                    id: '2',
                    fullName: 'Prudence Billingsley',
                    email:'prudence@demo.com',
                    phone: '518481815132',
                },
                {
                    id: '3',
                    fullName: 'Goldie Sturrock',
                    email:'goldie@demo.com',
                    phone: '855484848412',
                },
                {
                    id: '4',
                    fullName: 'Allegra Noland',
                    email:'allegra@demo.com',
                    phone: '587485478543',
                },
                {
                    id: '5',
                    fullName: 'Toshiko Sachs',
                    email:'toshiko@demo.com',
                    phone: '65895874584343',
                },
            ]
        },
        {
            id: '2',
            name: 'Second Audience Test',
            users:[
                {
                    id: '1',
                    fullName: 'Antonietta Plumer',
                    email:'antonietta@demo.com',
                    phone: '999494645643',
                },
                {
                    id: '2',
                    fullName: 'Prudence Billingsley',
                    email:'prudence@demo.com',
                    phone: '518481815132',
                },
                {
                    id: '3',
                    fullName: 'Goldie Sturrock',
                    email:'goldie@demo.com',
                    phone: '855484848412',
                },
               
            ]
        },
        {
            id: '3',
            name: 'Third Audience Test',
            users:[ 
                {
                    id: '5',
                    fullName: 'Toshiko Sachs',
                    email:'toshiko@demo.com',
                    phone: '65895874584343',
                },
            ]
        },
        {
            id: '4',
            name: 'Fourth Audience Test',
            users:[
                {
                    id: '1',
                    fullName: 'Antonietta Plumer',
                    email:'antonietta@demo.com',
                    phone: '999494645643',
                },
                {
                    id: '2',
                    fullName: 'Prudence Billingsley',
                    email:'prudence@demo.com',
                    phone: '518481815132',
                },
                {
                    id: '3',
                    fullName: 'Goldie Sturrock',
                    email:'goldie@demo.com',
                    phone: '855484848412',
                },
                {
                    id: '4',
                    fullName: 'Allegra Noland',
                    email:'allegra@demo.com',
                    phone: '587485478543',
                },
                {
                    id: '5',
                    fullName: 'Toshiko Sachs',
                    email:'toshiko@demo.com',
                    phone: '65895874584343',
                },
            ]
        },
        {
            id: '5',
            name: 'Fifth Audience Test',
            users:[
                {
                    id: '4',
                    fullName: 'Allegra Noland',
                    email:'allegra@demo.com',
                    phone: '587485478543',
                },
                {
                    id: '5',
                    fullName: 'Toshiko Sachs',
                    email:'toshiko@demo.com',
                    phone: '65895874584343',
                },
            ]
        },
    ]
}

export const audiencesReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_ALL_AUDIENCES:
            return {...state};
        case ADD_AUDIENCE:
            return {...state, audiences:[...state.audiences, payload]};
        case DELETE_AUDIENCE:
            return {...state, audiences:state.audiences.filter(audience => audience.id !== payload)};
        case ADD_USERS_AUDIENCE:
            const audienceById = state.audiences.find(audience => audience.id === payload.audienceId)
            const audiences = state.audiences.filter(audience => audience.id !==payload.audienceId)
            return {...state, audiences: [...audiences, {...audienceById, users: audienceById.users.concat(payload.users)}]};
        case DELETE_USERS_AUDIENCE:
            const delAudienceById = state.audiences.find(audience => audience.id === payload.audienceId)
            const delAudiences = state.audiences.filter(audience => audience.id !==payload.audienceId)
            return {...state, audiences: [...delAudiences, {...delAudienceById, users: delAudienceById.users.filter(user => user.id !== payload.userId)}]};
        default:
            return state;
    }
}