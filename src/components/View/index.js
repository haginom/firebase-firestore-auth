import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";

const Heading = styled.h1`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.large};
  color: ${({ theme: { colors } }) => colors.onyx};
  margin-top: 2rem;
  margin-bottom: 3rem;
`;

const Section = styled.section`
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
`

const View = ({ title, children }) => (
  <Section>
    <Heading>{title}</Heading>
    {children}
  </Section>
)

View.propTypes = {
  title: PropTypes.string.isRequired,
}

export default View