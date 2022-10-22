import React from "react"
import { navigate } from "@reach/router"

export default ({ handleSubmit, handleUpdate }) => (
  <form
    method="post"
    onSubmit={event => {
      handleSubmit(event)
      navigate(`/app/profile`)
    }}
  >
    <label>
      Username
      <input
        type="text"
        name="username"
        onChange={handleUpdate}
      />
    </label>
    <label c>
      Password
      <input
        type="password"
        name="password"
        onChange={handleUpdate}
      />
    </label>
    <input type="submit" value="Log In" />
  </form>
)