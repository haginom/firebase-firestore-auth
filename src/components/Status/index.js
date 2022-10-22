import React from "react"
import { Link, navigate } from "@reach/router"
import { useAuthValue } from "../../utils/authContext"
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/Firebase";
import styled from "styled-components";

const Paragraph = styled.p`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
  color: ${({ theme: { colors } }) => colors.powderWhite};
  background: ${({ theme: { colors } }) => colors.onyx};
  padding-top: 1rem;
  padding-bottom: 1rem;
  text-align: center;
`;


export default () => {
  const { currentUser } = useAuthValue();

  let details
  if (!currentUser) {
    details = (
      <Paragraph>
        To get the full app experience, you’ll need to
        {` `}
        <Link to="/app/login">log in</Link>.
      </Paragraph>
    )
  } else {
    details = (
      <Paragraph>
        Logged in as {currentUser.email}
        {` `}
        <a
          href="/"
          onClick={event => {
            event.preventDefault()
            signOut(auth)
            navigate(`/app/login`)
          }}
        >
          log out
        </a>
      </Paragraph>
    )
  }

  return <div>{details}</div>
}