import { Item } from "@/app/type/type";
import Image from "next/image";

const AllProducts = async() => {
    const res = await fetch("https://next-back-sigma.vercel.app/products");
    const { data } = await res.json();
    return (
        <>
            <div className="overflow-x-auto flex items-center justify-center h-full">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                           
                            <th>Name</th>
                            <th>Items</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                      {data.map((item:Item)=>(
                          <tr key={ item._id}>
                          <th>
                              <label>
                                  <input type="checkbox" className="checkbox" />
                              </label>
                          </th>
                          <td>
                              <div className="flex items-center gap-3">
                                  <div className="avatar">
                                      <div className="mask mask-squircle w-12 h-12">
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
                                      </div>
                                  </div>
                                  <div>
                                      <div className="font-bold">{item.name}</div>
                                     
                                  </div>
                              </div>
                          </td>
                          <td>
                              {item.category}
                             
                             
                          </td>
                          <td>${item.price}</td>
                          <td>{item._id}</td>
                          
                      </tr>
                      ))}
                      
                      
                    </tbody>
                   

                </table>
            </div>
        </>
    )
}

export default AllProducts