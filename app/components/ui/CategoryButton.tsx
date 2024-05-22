import Link from "next/link";


const CategoryButton = async() => {
    const res = await fetch(`https://next-back-sigma.vercel.app/product`);
    const { data } = await res.json();
    console.log(data)
    return (
        <div className="card-actions justify-end">
        <Link href={''} className="btn btn-primary">Learn now!</Link>
      </div>
    );
};

export default CategoryButton;