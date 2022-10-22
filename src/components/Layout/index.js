
import React from "react"
import Header from "../Header"

const Layout = ({ children }) => (
  <>
    <Header />
    <main >
      {children}
    </main>
  </>
)

export function Head() {
  return (
    <title>Simple Authentication With Gatsby</title>
  )
}

export default Layout