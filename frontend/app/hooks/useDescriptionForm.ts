
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { fetchService } from '../service/fetchService'
import { Backend } from '../service/backendLink'

export default function useDescription() {
    const [description, setDescription] = useState<string>('')
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const element = event.target as HTMLInputElement
        const value = element.value
        setDescription(value)
    }
    const router = useRouter()
    const [selected, setSelected] = useState<number[]>([])
    const [error,setError] = useState<boolean>(false)
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if(!selected.length || !description.length) {
            setError(true)
            return
        }
        const result = await fetchService(`${Backend}/orders`,{ 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                orderDescription: description, 
                products: selected, 
             })
        })
        if(!result) {
            setError(true)
            return
        }
        setSelected([])
        setError(false)
        router.push('/')
    }
    const handleCancel = () => {
        router.push('/')
    }
  return {description, handleChange,selected, setSelected,handleSubmit, handleCancel, error,setError}
}
