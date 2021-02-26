import React from 'react'
import PickupInfo from '../../../components/footer/PickupInfo/PickupInfo'
import { Header } from '../../../components/headers/Header'
import { SingleProduct } from '../../../components/product/single/SingleProduct'
export default function details() {
  return (
    <>
      <Header />
      <SingleProduct />
      <PickupInfo />
    </>
  )
}
