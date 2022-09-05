import React from 'react'
import Gallery from '../../../../components/Gallery'

const Popular = ({ popularData }) => {
  return (
    <Gallery
      headerText="Популярное"
      items={popularData}>
    </Gallery>
  )
}
export default Popular
