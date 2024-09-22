"use client"
import ProductForm from '@/app/components/productForm/ProductForm'
import React from 'react'
import Page from '../producttable/page'

const Dashboard = () => {
  return (
    <>
      <ProductForm />
      <Page />
    </>
  )
}

export default Dashboard