"use client"
import ProductForm from '@/app/components/productForm/ProductForm'
import ProductTable from '@/app/components/productTable/ProductTable'
// import ProductTable from '@/pages/producttable'
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