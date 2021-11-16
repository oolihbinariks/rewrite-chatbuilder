import { ADD_AUDIENCE_ROUTE, AUDIENCES_ROUTE, AUDIENCE_ROUTE, CAMPAIGNS_ROUTE, CREATE_CAMPAIGN_ADD_USERS_ROUTE, CREATE_CAMPAIGN_ROUTE, CREATE_CAMP_FINISH_ROUTE, CREATE_CAMP_STEP_TWO_ROUTE, HOME_ROUTE, LOGIN_ROUTE, SETTINGS_ROUTE, TEMPLATES_ROUTE, TEMPLATE_QUESTION_ROUTE, TEMPLATE_ROUTE } from "../constants/routesUrl";
import Campaigns from "../pages/Campaigns/Campaigns";
import CreateCampaign from "../pages/CreateCampaign/CreateCampaign";
import Templates from "../pages/Templates/Templates";
import Audiences from "../pages/Audiences/Audiences";
import Audience from "../pages/Audiences/Audience/Audience";
import Settings from "../pages/Settings";
import Auth from "../pages/Auth/Auth";
import Home from "../pages/Home/Home";
import AddAudience from "../pages/Audiences/Audience/AddAudience";
import Template from "../pages/Templates/Template/Template";
import Question from "../pages/Templates/Template/Question/Question";
import AddUsersAudience from "../pages/CreateCampaign/AddUsersAudience";
import CreateCampStepTwo from "../pages/CreateCampaign/CreateCampStepTwo";
import CreateCampStepFinish from "../pages/CreateCampaign/CreateCampStepFinish";

export const authRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: CAMPAIGNS_ROUTE,
        Component: Campaigns
    },
    {
        path: CREATE_CAMPAIGN_ROUTE,
        Component: CreateCampaign
    },
    {
        path: CREATE_CAMP_STEP_TWO_ROUTE,
        Component: CreateCampStepTwo
    },
    {
        path: CREATE_CAMPAIGN_ADD_USERS_ROUTE,
        Component: AddUsersAudience
    },
    {
        path: CREATE_CAMP_FINISH_ROUTE,
        Component: CreateCampStepFinish
    },
    {
        path: TEMPLATES_ROUTE,
        Component: Templates
    },
    {
        path: TEMPLATE_ROUTE,
        Component: Template
    },
    {
        path: TEMPLATE_QUESTION_ROUTE,
        Component: Question
    },
    {
        path: AUDIENCES_ROUTE,
        Component: Audiences
    },
    {
        path: AUDIENCE_ROUTE,
        Component: Audience
    },
    {
        path: ADD_AUDIENCE_ROUTE,
        Component: AddAudience
    },
    {
        path: SETTINGS_ROUTE,
        Component: Settings
    },
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: HOME_ROUTE,
        Component: Home
    },
]