import React, { SetStateAction } from 'react'
import { fetchService } from '../service/fetchService'

import { tProduct } from '../components/tables/TableComponent'
import { Backend } from '../service/backendLink'
export default function useButtonBox(orderId: number,setmessage:React.Dispatch<SetStateAction<boolean>>,setError: React.Dispatch<SetStateAction<boolean>>,setState:React.Dispatch<SetStateAction<tProduct[]>>) {
    const handleEdit = () => {

    }
    const handleDelete = async () => {
        try {
            await fetchService(`${Backend}/orders/${orderId}`,{method:'DELETE'})    
            setmessage(true)        
            setError(false)
            setState( state => {
                const temp = state.filter(product => product.order_id!==orderId)
                return temp
            })
            setTimeout(() => {
                setmessage(false)
                
            }, 2000)
        } catch {
            setError(true)
        }

    }
  return {handleEdit, handleDelete}
}
