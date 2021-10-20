import { ADD_AUDIENCE_ROUTE, AUDIENCES_ROUTE, AUDIENCE_ROUTE, CAMPAIGNS_ROUTE, CREATE_CAMPAIGN_ROUTE, HOME_ROUTE, LOGIN_ROUTE, SETTINGS_ROUTE, TEMPLATES_ROUTE, TEMPLATE_QUESTION_ROUTE, TEMPLATE_ROUTE } from "../constants/routesUrl";
import Campaigns from "../pages/Campaigns/Campaigns";
import CreateCampaign from "../pages/CreateCampaign";
import Templates from "../pages/Templates/Templates";
import Audiences from "../pages/Audiences/Audiences";
import Audience from "../pages/Audiences/Audience/Audience";
import Settings from "../pages/Settings";
import Auth from "../pages/Auth";
import Home from "../pages/Home/Home";
import AddAudience from "../pages/Audiences/Audience/AddAudience";
import Template from "../pages/Templates/Template/Template";
import Question from "../pages/Templates/Template/Question/Question";

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