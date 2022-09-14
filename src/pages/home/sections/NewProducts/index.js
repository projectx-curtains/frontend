import React from 'react'
import Gallery from '../../../../components/Gallery'

const NewProducts = ({ galleryItems }) => {
  return (
    <section className="new-product">
      <Gallery
        headerText="Новинки"
        items={galleryItems}
      />
    </section>
  )
}
export default NewProducts
