import React, { useState } from 'react'
import useFetch from './useFetch'
import { Backend } from '../service/backendLink'

type tProduct = Record<string, string | number> & { id: number}

export default function useCheckboxes(selected: number[], setSelected: React.Dispatch<React.SetStateAction<number[]>>) {
    // const [loading, setLoading] = useState<boolean>(false)
    const [Products, setProducts] = useState<tProduct[]>([])
    // useEffect(() => {
    //     ( async function() {
    //         setLoading(true)
    //         const result = await fetch(`${Backend}/products`)
    //         const value = await result.json()
    //         setProducts(value.result ?? [])
    //         setLoading(false)
    //     })()
    // }, [])
    const {loading, } = useFetch(setProducts,`${Backend}/products`)

    const handleClick = (event: React.FormEvent<HTMLInputElement>) => {
        const element = event?.target as HTMLInputElement
        const value = parseInt(element.value )
        let temp = [...selected] 
        if(!element.checked){
            temp = temp.filter(product => product!==value)
            setSelected(temp)
            return
        }
        temp.push(value)
        setSelected(temp)
    }
  return { handleClick, loading, Products, }
}
