import * as React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import View from "../components/View"
import Status from "../components/Status"
import Theme from "../components/Styles/Theme"
import styled from "styled-components"
import GlobalStyles from "../components/Styles/GlobalStyles"

const Paragraph = styled.p`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
  color: ${({ theme: { colors } }) => colors.onyx};
  margin-bottom: 1rem;
`;

const ListItem = styled.li`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
  color: ${({ theme: { colors } }) => colors.onyx};
  margin-bottom: 1rem;
`

const IndexPage = () => {
  return (
    <Theme>
      <GlobalStyles />
      <Layout>
          <Status />
          <View title="Welcome... come and get authenticated!">
            <Paragraph>
              This demo has implemented Firebase Authentication on a Gatsby Site. 
              To demo it in action then visit <Link to="/app/profile">your profile</Link>. The demo also includes user management features, such as:
            </Paragraph>
            <ul>
              <ListItem>Firebase Authentication</ListItem>
              <ListItem>Reset Password</ListItem>
              <ListItem>Email Verifcation and Welcome</ListItem>
            </ul>

            <Paragraph>
              Styling is done using Theme Provider and Styled Components. 
            </Paragraph>
            <Paragraph>This application made use of the following resources:</Paragraph>
            <ul>
              <ListItem>
                <a href="https://betterprogramming.pub/build-a-gatsby-authentication-flow-with-firebase-72b9514f6c9b">Building authentication flow with firebase</a> 
              </ListItem>
              <ListItem>
                <a href="https://dev.to/aromanarguello/how-to-use-themes-in-styled-components-49h">Themes in Styled Components</a>          
              </ListItem>
            </ul>

        </View>
      </Layout>
    </Theme>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
