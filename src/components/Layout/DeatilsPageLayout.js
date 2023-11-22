import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Breadcrumb from '../Breadcrumb/Breadcrumb'

export default function DeatilsPageLayout({ children }) {
  return (
    <div className="position-relative">
      <Header></Header>
      <Breadcrumb/>
      {children}
      <Footer />
    </div>
  )
}
