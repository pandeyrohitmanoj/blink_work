
export const metadata: Metadata = {
  title: "Create new order",
  description: "Form to add orders into db",
};

import React from 'react'
import { Form } from '../components/forms/Form'
import { Metadata } from 'next';

export default function page() {
  
  return (
    <div className=''>
      <Form />
    </div>
  )
}
