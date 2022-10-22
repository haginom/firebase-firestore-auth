import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import Profile from "../components/PrivateRoutes/Profile"
import Login from "../components/Login"
import PrivateRoute from "../components/PrivateRoute"
import Status from "../components/Status"
import Register from "../components/Register";
import Reset from "../components/Reset";
import Details from "../components/PrivateRoutes/Details"
import Theme from "../components/Styles/Theme"
import GlobalStyles from "../components/Styles/GlobalStyles"

const App = () => (
  <Theme>
    <GlobalStyles />

    <Layout>
      <Status />
      <Router>
        <PrivateRoute path="/app/profile" component={Profile} />
        <PrivateRoute path="/app/details" component={Details} />
        <Login path="/app/login" />
        <Register path="/app/register" />
        <Reset path="/app/reset" />
      </Router>
    </Layout>
  </Theme>
)

export default App