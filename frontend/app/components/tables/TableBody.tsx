import React, { SetStateAction, useState } from 'react'
import { tProduct } from './TableComponent'
import ButtonBox from './ButtonBox'

export default function TableBody({ state, setState }: {state: tProduct[], setState: React.Dispatch<SetStateAction<tProduct[]>>}) {
    const [error,setError] = useState<boolean>(false)
    const [deletedMessage, setmessage] = useState<boolean>(false)
  return (
    <tbody>
        {
        state.map( product => {
        const productValues = Object.values(product)
        return <tr key={product.order_id}>
                <td className='text-center py-2 px-4 border-2 border-black'>{productValues[0]}</td>
                <td className='text-center py-2 px-4 border-2 border-black'>{productValues[1]}</td>
                <td className='text-center py-2 px-4 border-2 border-black'>{productValues[2]}</td>
                <td className='text-center py-2 px-4 border-2 border-black'>{String(productValues[3]).substr(0,10)}</td>
                <td className='text-center py-2 px-4 border-2 border-black'><ButtonBox setmessage={setmessage} setError={setError} orderId={product.order_id} setState={setState}/></td>
            </tr>
        })
        }
        {deletedMessage && 'Deleted Order'}
        {error && 'Error occured'}
    </tbody>
  )
}
