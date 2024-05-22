import Image from "next/image";

const SingleProduct = async ({ params }: any) => {
   const res = await fetch(`http://localhost:5000/product/${params.productId}`);
   const data = await res.json();
   
   return (
      <div>
         <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row gap-7">
               <Image
                  src={data?.image}
                  width={500}
                  height={500}


                  alt="Picture of the author"
               />
               <div>
                  <h1 className="text-5xl font-bold">{data.name}</h1>
                  <div className="flex gap-5">
                     <p className="py-6">Price: {data.price}</p>
                     <p className="py-6">{data.rating}</p>
                  </div>
                  <hr />
                  <p className="py-6">{data.description}</p>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo ab error cum vero expedita voluptatum quibusdam temporibus maxime laborum voluptas.</p>
                  <button className="btn btn-primary mt-6">Buy Now</button>
               </div>
            </div>

         </div>
         <hr />

      </div>
   );
};

export default SingleProduct;