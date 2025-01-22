import { SetStateAction, useEffect, useState } from 'react'

export default function useFetch<T>(setState: React.Dispatch<SetStateAction<T>>, url: string, options?: Record<string, string |number| Record<string, string>> ) {
    const [loading, setLoading] = useState<boolean>(false)
    useEffect(() => {
            ( async function() {
                setLoading(true)
                const result = await fetch(url, options)
                const value = await result.json()
                setState(value.result)
                setLoading(false)
            })()
        }, [url,options])
  return {loading,}
}
