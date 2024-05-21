import Link from "next/link";


const CategoryButton = async() => {
    const res = await fetch(`http://localhost:5000/product`);
    const { data } = await res.json();
    console.log(data)
    return (
        <div className="card-actions justify-end">
        <Link href={''} className="btn btn-primary">Learn now!</Link>
      </div>
    );
};

export default CategoryButton;