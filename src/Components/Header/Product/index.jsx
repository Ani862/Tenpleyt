import React, { useEffect, useState } from 'react'

function Product() {
    const[data, setData]=useState()
    
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products/1')
    .then(res=>res.json())
    .then(json=>console.log(json))
    

  },[])


  return (
    <div className='product'>
        <div className='prodoctPicture'>
            <img src=''/>
        </div>
            <h1>Lorem</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores beatae nam vitae in debitis, velit numquam rerum repellendus quod, fugit, veritatis illum? Iusto, ullam architecto? Harum laudantium rerum ad in?</p>
    </div>
  )
}

export default Product