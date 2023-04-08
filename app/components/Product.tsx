import {FunctionComponent} from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { urlFor } from "@/lib/client";


interface Slug {
  current: string;
  slug: string;
}


interface Product {
  name: string;
  slug: Slug;
  price: number;
  details: string;
  image: string;
  
}

interface productProps {
  product: Product;  
}


const Product:FunctionComponent<productProps> = ({product : { image, name, slug, price}}) => {
  
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className=' bg-gray-400 rounded-xl my-16 p-4'>
          <Image src={urlFor(image && image[0]).url()} width='250' height='250' alt='product_image'/>
          <h2>{name}</h2>
          <h3 className='font-bold'>{price} lei</h3>
        </div>
      </Link>
    </div>
  )
}

export default Product