import { Item } from "@/app/type/type";
import Image from "next/image";
import Link from "next/link";

const FlashSalePage = async () => {
    const res = await fetch("http://localhost:5000/products",{
      cache:"no-store"
    });
    const { data } = await res.json();
    console.log(data);
    return (
      <div className="p-5 mx-auto w-[90%]">
        <p className="text-4xl text-center">Flash sale</p>
  <div className="grid grid-cols-3 gap-5">
        {data?.map((item:Item) => (
          <div key={item._id}>
            {item.flashSale ? (
              <div className="card bg-base-100 shadow-xl w-[95%]">
              <Image
                src={item?.image}
             width={200}
             height={200}
                sizes="(min-width: 808px) 50vw, 100vw"
                style={{
                  margin:'auto',
                  border:'rounded',
                  objectFit: 'contain', // cover, contain, none
                }}
                alt="Picture of the author"
              />
              <div className="card-body">
                <h2 className="card-title">
                  {item.name}
                </h2>
               <p>{item.description}</p>
                <div className="flex justify-between">
                <p className="font-bold">Price:{item.price}</p>
                <p className="font-bold">Rating:{item.rating}</p>
                </div>
              </div>
              <div className="m-auto w-[90%] my-12 flex justify-center items-center">
                <Link href={`/traditional-clothing/${item._id}`} className="p-3 bg-slate-500 rounded-md">View Details</Link>
              </div>
            </div>
              
            ) : (
              <p></p>
            )}
          </div>
        ))}
        </div>

      </div>
    );
  };
  
  export default FlashSalePage;
  