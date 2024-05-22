import { Item } from "@/app/type/type";
import Image from "next/image";
import Link from "next/link";

const TopCategory = async () => {
  const res = await fetch("https://next-back-sigma.vercel.app/products");
  const { data } = await res.json();

  return (
    <>
      <p className="text-center text-4xl my-6 font-semibold"> Top <span className="text-orange-400">Categories</span></p>
      <hr className="w-52 m-auto  border-y-2"/>
      <div className="w-[90%] mx-auto grid grid-cols-3 mt-7">
        {data?.map((item:Item) => (
          <div key={item._id} className="card w-96 glass">
         
           
              
              <div className="card-actions justify-between p-5 items-center">
              <h2 className="card-title">{item.category}</h2>
              <Image
              className="rounded-lg"
                  src={item?.image}
               width={40}
               height={40}
                  sizes="(min-width: 808px) 50vw, 100vw"
                  style={{
                    
                   
                    objectFit: 'contain', // cover, contain, none
                  }}
                  alt="Picture of the author"
                />
          
      </div>
     
           
          </div>
        ))}
      </div>
    </>
  );
};

export default TopCategory;
