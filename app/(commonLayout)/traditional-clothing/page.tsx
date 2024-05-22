import ProductCard from '@/app/components/products/ProductCard';
import React from 'react';
import SingleProduct from './[productId]/page';

const AllProductsPage = async () => {
    const res = await fetch('http://localhost:5000/products')
    const { data } = await res.json()

    return (
        //         <div className='grid grid-cols-3 p-5 w-[90%] m-auto'>
        //       {data.map(item => (
        //   <ProductCard key={item._id} item={item}/>
        // ))}

        //         </div>
        <>
    <div className="grid grid-cols-12 w-[90%] m-auto">
        <div className="grid col-span-2 m-5">
            <div className='border border-gray-400'>
            <p className='p-5 font-bold'>Price Range</p> 
            <hr />
            <div className='flex gap-2 p-5 items-center'>
            
            <input type="checkbox"  className="checkbox checkbox-sm" /> 
            <p>$20-$50</p>
            
            </div>
            
            <div className='flex gap-2 p-5 items-center'>
            <input type="checkbox" defaultChecked className="checkbox checkbox-sm" /> 
            <p>$20-$50</p>
            
            </div>
            
            <div className='flex gap-2 p-5 items-center'>
            <input type="checkbox"  className="checkbox checkbox-sm" /> 
            <p>$20-$50</p>
            
            </div>
            
            </div>

            <div className='border border-gray-400 my-5'>
            <p className='p-5 font-bold'>Category</p> 
            <hr />
            <div className='flex gap-2 p-5 items-center'>
            
            <input type="checkbox"  className="checkbox checkbox-sm" /> 
            <p>Sharee</p>
            
            </div>
            
            <div className='flex gap-2 p-5 items-center'>
            <input type="checkbox"  className="checkbox checkbox-sm" /> 
            <p>Lahenga</p>
            
            </div>
            
            <div className='flex gap-2 p-5 items-center'>
            <input type="checkbox"  className="checkbox checkbox-sm" /> 
            <p>Kurti</p>
            
            </div>
            
            </div>


            
        </div>
        <div className="grid col-span-10 ">
                <div className='grid grid-cols-3 p-5 w-[90%] m-auto'>
              {data.map(item => (
          <ProductCard key={item._id} item={item}/>
        ))}

                </div>

        </div>
      </div>
        </>
    );
};

export default AllProductsPage;