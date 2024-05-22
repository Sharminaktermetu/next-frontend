import Image from "next/image";
import Link from "next/link";


const ProductCard = ({item}) => {
    return (
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
        <Link href={`/traditional-clothing/${item._id}`} className="p-3 bg-slate-500 rounded-md">View all</Link>
      </div>
    </div>
    );
};

export default ProductCard;