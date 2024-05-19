

const SingleProduct = ({params}:any) => {
    console.log(params)
    return (
        <div>
            the paage is {params.productId}
        </div>
    );
};

export default SingleProduct;