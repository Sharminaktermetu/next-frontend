import Link from "next/link";







const FlashSale = async () => {




  const res = await fetch("http://localhost:5000/products");
  const { data } = await res.json();
  console.log(data);
  return (
    <div className="p-5 mx-auto w-[90%]">
      <p className="text-4xl text-center">Flash sale</p>
<div className="grid grid-cols-2 gap-5">
      {data?.map((item:any) => (
        <div key={item._id}>
          {item.flashSale ? (
            <div className="card bg-base-100 shadow-xl">   
              <div className="card-body">
                <h2 className="card-title">
                  Shoes!
                  <div className="badge badge-secondary">NEW</div>
                </h2>
              </div>
            </div>
            
          ) : (
            <p></p>
          )}
        </div>
      ))}
      </div>
      <div className="m-auto w-[90%] my-6">
      <Link href="/flash-sale" className="p-3 bg-slate-500">View all</Link>
      </div>
    </div>
  );
};

export default FlashSale;
