import Image from "next/image";
import Link from "next/link";

const TopCategory = async () => {
  const res = await fetch("http://localhost:5000/products");
  const { data } = await res.json();
  return (
    <>
      <p className="text-center text-4xl my-6"> Top Categories</p>
      <div className="w-[90%] mx-auto grid grid-cols-3">
        {data?.map((item) => (
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
