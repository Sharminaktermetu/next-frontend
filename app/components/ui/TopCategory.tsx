import Link from "next/link";

const TopCategory = async () => {
  const res = await fetch("http://localhost:5000/products");
  const { data } = await res.json();
  return (
    <>
      <p className="text-center text-4xl">Categories Top </p>
      <div className="w-[90%] mx-auto grid grid-cols-3">
        {data?.map((item) => (
          <div key={item._id} className="card w-96 glass">
            <div className="card-body">
              <h2 className="card-title">{item.category}</h2>
              <div className="card-actions justify-end">
        
      </div>
             
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TopCategory;
