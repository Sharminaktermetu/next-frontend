import ProductCard from '@/app/components/products/ProductCard';
import React from 'react';

const AllProductsPage =async () => {
    const res = await fetch('http://localhost:5000/products')
    const {data} = await res.json()
    console.log(data)
    return (
        <div>
      {data.map(item => (
  <ProductCard key={item._id} item={item}/>
))}
        </div>
    );
};

export default AllProductsPage;