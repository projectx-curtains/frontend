import React from 'react'
import Gallery from '../../../../components/Gallery'

const Popular = ({ popularData }) => {
  return (
    <section className="popular">
      <Gallery
        headerText="Популярное"
        items={popularData}>
      </Gallery>
    </section>
  )
}
export default Popular
