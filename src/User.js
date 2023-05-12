import React from 'react'

const User = (props) => {
  const {data}=props
    return (
    <div >
      <h1> User Component!</h1>
      <p> User name: {data.name}</p>
    </div>
  )
}

export default User
