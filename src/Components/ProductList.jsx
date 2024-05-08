import React, { useEffect, useState } from 'react'
import { Pagination } from './Pagination'

 
export const ProductList = () => {
  
    const [products, setproducts] = useState([])
    const totalProduct = products.length
    const [productsPerPages, setproductsPerPages] = useState(6)
    const [currentPage, setcurrentPage] = useState(1)

    const lastIndex = currentPage * productsPerPages
    const firstIndex = lastIndex - productsPerPages
    

    const ProductList = async() =>{
        const data = await fetch('https://fakestoreapi.com/products')
        const products = await data.json()
        console.log(products);

        setproducts(products)
    }

    ProductList()

    useEffect(() => {
      ProductList()
    }, [])
    

   return (
        <>
       
        <div className='container-products'>
            {products.map(product => (
                <div className="card-product" key={product.id}>
                    <figure className="container-img">
                        <img src={product.image} alt={product.title} />
                    </figure>
                    <div className="info-product">
                        <h3>{product.title}</h3>
                        <p className="price">$ {product.price}</p>
                        <button>añadir al carrito</button>                     
                    </div>
                </div>
            )).slice(firstIndex, lastIndex)}
        </div>
        <Pagination 
        productsPerPages={productsPerPages}
        currentPage={currentPage}
        setcurrentPage={setcurrentPage}
        totalProduct={totalProduct}
        />
        </>

   )
  
}
