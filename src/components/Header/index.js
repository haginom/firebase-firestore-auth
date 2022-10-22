import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLink = styled(props => <Link {...props} />)`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};
  color: ${({ theme: { colors } }) => colors.persianGreen};
  padding-left: 2rem;
  padding-right: 2rem;
  text-decoration: ${props => props.td ? "none" : "underline"};

`;

const StyledNav = styled.nav`
  display: inline;
  float: right;
  margin-right: 2rem;

  ul {
  margin: 0;
  list-style: none;
  display: flex;
  }
  a {
  text-decoration: none;
  padding: 5px;
  }

`

const StyledHeader = styled.header`
padding-top: 2rem;
padding-bottom: 2rem;
`

const Header = () => (
    <StyledHeader >
      <StyledLink td={"none"} to="/">
        Gatsby & Firebase Authentication Demo
      </StyledLink>
      <StyledNav role="main" >
        <StyledLink to="/app/profile" >
          Profile
        </StyledLink>
        <StyledLink to="/app/details" >
          Details
        </StyledLink>
      </StyledNav>
    </StyledHeader>
)

export default Header
