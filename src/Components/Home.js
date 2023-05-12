import React from 'react'

const Home = () => {
  return (
    <div>
      <h1> Home Component</h1>
      <div>
        <img src="https://fastly.picsum.photos/id/4/5000/3333.jpg?hmac=ghf06FdmgiD0-G4c9DdNM8RnBIN7BO0-ZGEw47khHP4" alt="Sample" width="100px" height="100px" />
     <div>
     <span>Laptop Price :</span>
     <span> 10000 rs </span>
    </div>
    <button className="btn btn-primary"> Add To Cart</button>
      </div>
    </div>
  )
}

export default Home
