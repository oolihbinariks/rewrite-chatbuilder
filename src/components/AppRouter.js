import React from 'react'
import { useSelector } from 'react-redux'
import { withRouter, Switch, Route,Redirect } from 'react-router-dom'
import { HOME_ROUTE } from '../constants/routesUrl'
import Main from '../layouts/Main'
import Page404 from '../pages/Page404'
import { authRoutes, publicRoutes } from '../routes/routes'
import { getAuthToken } from '../store/selectors/authSelectors'

const RouteWithLayout = ({component: Component, layout: Layout, ...rest})=>(
    <Route {...rest} render={(props) => (
        <Layout><Component {...props}/></Layout>
    )} />
)
export const AppRouter =() =>{
// const AppRouterWrapped = () => {
    const isAuth = useSelector(state => getAuthToken(state))
    console.log(`isauth ${isAuth}`);
    return (
        <Switch>
            {
                isAuth && authRoutes.map(({path, Component}) =>
                    <RouteWithLayout key = {path} path = {path} component = {Component} layout= {Main} exact />
                )
            }

            {
                !isAuth && publicRoutes.map(({path, Component}) =>
                    <RouteWithLayout key = {path} path = {path} component = {Component} layout= {Main} exact />
                )
            }
            <Redirect to = {HOME_ROUTE} />
            <Route path="*">
                <Page404 />
            </Route>
        </Switch>
    )
}
// export const AppRouter = withRouter(AppRouterWrapped)