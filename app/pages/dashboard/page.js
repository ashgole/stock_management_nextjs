"use client"
import ProductForm from '@/app/components/productForm/ProductForm'
import ProductTable from '@/app/components/productTable/ProductTable'
import React from 'react'

const Dashboard = () => {
  return (
    <>
        <ProductForm/>
        <ProductTable/>
    </>
  )
}

export default Dashboard