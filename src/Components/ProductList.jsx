import React, { useEffect, useState } from 'react';
import { Pagination } from './Pagination';

export const ProductList = () => {
  
    const [products, setProducts] = useState([]);
    const totalProduct = products.length;
    const [productsPerPages, setProductsPerPages] = useState(6);
    const [currentPage, setCurrentPage] = useState(1);

    const lastIndex = currentPage * productsPerPages;
    const firstIndex = lastIndex - productsPerPages;
    
    const ProductList = async () =>{
        const data = await fetch('https://fakestoreapi.com/products');
        const products = await data.json();
        setProducts(products);
    };

    ProductList();

    useEffect(() => {
      ProductList();
    }, []);
    

   return (
        <>
        <div className='container mx-auto px-4'>
            <div className='grid grid-cols-3 gap-8'>
                {products.map(product => (
                    <div className="card-product flex flex-col" key={product.id}>
                        <figure className="container-img flex-1">
                            <img src={product.image} alt={product.title} className="w-full h-64 object-contain" />
                        </figure>
                        <div className="info-product flex flex-col justify-between p-4">
                            <h3 className="text-gray-700 font-medium">{product.title}</h3>
                            <p className="price text-black font-bold text-center">${product.price}</p>
                            <button className="bg-black text-white border-none block w-full py-5 cursor-pointer mt-auto text-center">Añadir al carrito</button>
                        </div>
                    </div>
                )).slice(firstIndex, lastIndex)}
            </div>
        </div>
        <Pagination 
            productsPerPages={productsPerPages}
            currentPage={currentPage}
            setcurrentPage={setCurrentPage}
            totalProduct={totalProduct}
        />
        </>
   );
};