'use client'
import useHome from '@/app/hooks/useHome'
import React from 'react'

export default function ButtonComponent() {
  const { handleClick } = useHome()

  return (
    <button className="text-xl py-4 px-6" onClick={handleClick}>New Order</button>

  )
}
