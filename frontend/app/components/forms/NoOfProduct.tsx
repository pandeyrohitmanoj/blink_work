import Image from "next/image";
import Cart from '@/public/cart.svg'

export default function NoOfProduct({ length }: {length: number}) {
  return <div className="flex justify-center items-center gap-2">
    <Image src={Cart} alt='cart icon' height={20} width={20} className="inline"/> 
    <div>No. of products: {length}</div>
    </div>
}