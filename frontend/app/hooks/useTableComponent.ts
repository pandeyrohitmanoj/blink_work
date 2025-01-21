import { useEffect, useState } from 'react'
import { tProduct } from '../components/tables/TableComponent'
import useFetch from './useFetch'
import { Backend } from '../page'

export default function useTableComponent() {
    const [state, setState] = useState<tProduct[]>([])
    const [temp, setTemp] = useState<tProduct[]>([])
    const [input, setInput] = useState<string>('')
    const {loading,} = useFetch(setState, `${Backend}/order/orders`)
    useEffect(() => {
      setTemp( () => {
        if(!input.length) return state
        const temp = state.filter( product => String(product.order_id).includes(input) || product.order_description.includes(input) )
        return temp
      })
    }, [input, state])
    return { input, setInput, loading, temp, setState }
}
