import Image from "next/image";


const Banner = () => {
    return (
        <div>
            <div className="flex items-center justify-center min-h-screen bg-base-200">
  <div className="">
    <div className="max-w-4xl text-center m-auto">
      <h1 className="text-5xl font-bold">Crafting Comfort, Redefining Spaces. Your Home, Your Signature Style!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="flex gap-6">
    <div className="card w-80 h-48 bg-base-100 image-full mt-12">
  <figure><Image width={200} height={200} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz0xJgS1kSrL7DBbiEwJWuGOc2hg258DgfrbAa_BZ8BQ&s" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Sharee</h2>
    <p>This half silk sharee features screen-print & handwork.</p>
 
  </div>
</div>
    <div className="card w-80 h-48 bg-base-100 image-full mt-12">
  <figure><Image width={200} height={200} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL31fjBTUJ3K9vBL7RP1nNLTH0JNWA_s3EI0KLA9EDKg&s" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Lahenga!!</h2>
    <p>Embellished and Embroidered</p>
   
  </div>
</div>
    <div className="card w-80 h-48 bg-base-100 image-full mt-12">
  <figure><Image width={200} height={200} src="https://images.cbazaar.com/images/violet-blended-cotton-chikankari-knee-length-kurti-kruhoa020-u.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Kurtass!</h2>
    <p>Violet Blended Cotton </p>
   
  </div>
</div>
    </div>
  </div>

 
</div>
        </div>
    );
};

export default Banner;