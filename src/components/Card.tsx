import { ComponentProps } from 'react'
import star from '../assets/star-removebg-preview.png'

interface CardProps extends ComponentProps<'div'> {
  item: ProductType
}

export interface ProductType {
  available: boolean;
  id: number;
  image: string;
  name: string;
  popular: boolean;
  price: string;
  rating: number;
  votes: number;
}

export function Card({item}: CardProps) {
  return (
    <div className=" w-fit ">
      <div className="relative">
        {
          item.popular && <div className="absolute bg-60 text-small font-medium top-2 left-2 px-4 py-1 rounded-full">Popular</div>
        }
        <img
          src={item.image}
          className="w-72 rounded-xl"
        />
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="text-40 font-semibold text-body">{item.name}</div>
        <div className="bg-40 text-price font-medium rounded-md py-1 px-2">{item.price}</div>
      </div>

      <div className="flex justify-between items-center">

        <div className="flex items-center mt-2">
          <img src={star} className="size-5 mr-2" />
          <div className="text-50 text-label mr-2" >{item.rating}</div>
          <div className="text-30 text-label">{item.votes}</div>
        </div>

        {!item.available && <div className="text-70 text-price">Not Available</div>}

      </div>
    </div>
  )
}

