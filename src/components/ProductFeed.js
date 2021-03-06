import Product from './Product'

function ProductFeed({products}) {
    return (
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 md:-mt-52 xl:grid-cols-4">
            
            {products.map(({id,title,price,description,category,image})=>(
                <Product key={id} id={id} title={title} price={price} description={description} category={category} image={image} />
            ))}

            <img className="md:col-span-full" src="https://links.papareact.com/dyz" alt="" />


            {products.slice(3,4).map(({id,title,price,description,category,image})=>(
                <Product key={id} id={id} title={title} price={price} description={description} category={category} image={image} />
            ))
            
            }

        </div>
    )
}

export default ProductFeed
