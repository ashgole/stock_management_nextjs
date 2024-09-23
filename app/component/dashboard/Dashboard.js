
import React from 'react'
import ProductForm from '../productForm/ProductForm'
import Inventory from '../../pages/inventory/page'
import ProductFilter from '../productFilter/ProductFilter'

const Dashboard = () => {
  return (
    <>
      <ProductFilter />
      <ProductForm />
      <Inventory />
    </>
  )
}

export default Dashboard