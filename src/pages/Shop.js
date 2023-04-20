import React from 'react'
import Navbar from '../components/Header'
import ShopHeader from '../components/ShopHeader'
import Product from '../components/Product'
import Products2 from '../components/Products2'
import Footer from '../components/Footer'
import scrollToTop from '../components/scrollToTop'

import Newsletter from '../components/Newsletter'

function Shop() {
  return (
        <>
        {/* <scrollToTop/> */}
        <Navbar/>
        <ShopHeader/>
        <Product/>
        <Products2/>
        <Newsletter/>
        
        <Footer/>
        </>
      

        
    
  )
}

export default Shop