import React, { SetStateAction } from 'react'
import Edit from '@/public/edit.svg'
import Bin from '@/public/bin.svg'
import Image from 'next/image'
import { tProduct } from './TableComponent'
import useButtonBox from '@/app/hooks/useButtonBox'
export default function ButtonBox({orderId, setError, setmessage, setState}: {orderId: number, setError: React.Dispatch<SetStateAction<boolean>>,  setmessage: React.Dispatch<SetStateAction<boolean>>, setState:React.Dispatch<SetStateAction<tProduct[]>>}) {
    
    const {handleEdit, handleDelete} = useButtonBox(orderId,setmessage,setError,setState) 
  return (
    <div className='flex gap-3'>
        <Image onClick={handleEdit} src={Edit} className='hover:cursor-pointer' alt='Edit the order' height={20} width={20}  />
        <Image onClick={handleDelete} src={Bin} className='hover:cursor-pointer' alt='Delete the order' height={20} width={20}  />
    </div>
  )
}
