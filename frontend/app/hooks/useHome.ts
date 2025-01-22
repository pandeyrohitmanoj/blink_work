'use client'
import { useRouter } from "next/navigation";


export default function useHome() {
  const router = useRouter()

  const handleClick = () => {
    router.push('/new-order')
  }
  return {handleClick}
}
