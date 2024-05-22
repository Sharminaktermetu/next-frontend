import Image from "next/image";
import Link from "next/link";







const FlashSale = async () => {




  const res = await fetch("http://localhost:5000/products");
  const { data } = await res.json();

  return (
    <div className="p-5 mx-auto w-[90%]">
      <p className="text-center text-4xl my-6 font-semibold"> Flash <span className="text-orange-400">Sale</span></p>
         <hr className="w-32 m-auto  border-y-2"/>
      <div className="grid grid-cols-3 gap-5 mt-12">
        {data?.map((items: any) => (
          <div key={items._id}>
            {items.flashSale ? (
              <div className="card bg-base-100 shadow-xl w-[95%]">
                <Image
                  src={items?.image}
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
                    {items.name}
                  </h2>
                 <p>{items.description}</p>
                  <div className="flex justify-between">
                  <p className="font-bold">Price:{items.price}</p>
                  <p className="font-bold">Rating:{items.rating}</p>
                  </div>
                </div>
              </div>

            ) : (
              <p></p>
            )}
          </div>
        ))}
      </div>
      <div className="m-auto w-[90%] my-12 flex justify-center items-center">
        <Link href="/flash-sale" className="p-3 bg-slate-500 rounded-md text-white">View all</Link>
      </div>
    </div>
  );
};

export default FlashSale;
