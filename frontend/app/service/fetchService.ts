

export async function fetchService(url: string, options?: Record<string, string |number| Record<string, string>>) {
    try {
        const result = await fetch(url,options)
        const value = result.json()
        return value
    } catch  {
        return null
    }
}