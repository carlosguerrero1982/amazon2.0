import Image from 'next/image'
import {StarIcon} from '@heroicons/react/outline'
import {useState} from 'react'
import Currency from 'react-currency-formatter';


function Product({id,title,price,description,category,image}) {

    const MAX = 5
    const MIN = 1
    const[rating]= useState(Math.floor(Math.random() * (MAX-MIN +1 )) + MIN)

    const [hasPrime] = useState(Math.random()<0.5)

    return (
        <div className="relative z-30 flex-col items-center justify-center p-10 m-5 bg-white">
            <p className="absolute text-xs italic text-gray-400 top-2 right-2">{category}</p>

            <Image src={image} height={200} width={200} objectFit="contain" />

            <h4 className="my-3">{title}</h4>


        <div className="flex">

        {Array(rating)
            .fill()
            .map((_,i)=>(
                <StarIcon className="h-5 text-yellow-500" />
            ))}

        </div>   

        <p className="my-2 text-xs">{description}</p>

        <div>
            <Currency quantity={price} currency="EUR" />
        </div>

        {hasPrime && (
            <div className="flex items-center mt-5 space-x-2">
                <img className="w-12" src="https://links.papareact.com/" alt="fdw" />
                <p className="text-xs text-gray-500">Free next day</p>
            </div>  

        )}

        <button className="mt-auto button">Add to Cart</button>
    </div> 
    )
}   

export default Product
