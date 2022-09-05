import React from 'react'
import Gallery from '../../../../components/Gallery'

const NewProducts = ({ galleryItems }) => {
    return (
      <Gallery
        headerText="Новинки"
        items={galleryItems}
      />
    )
}
export default NewProducts
