import React from 'react'
import HeaderSection from '../../../../components/HeaderSection'
import WhyWeAreItem from '../../../../components/WhyWeAreItem'
import { app_mockData } from '../../../../mockData/app_mockData'

const WhyWeAre = () => {
  return (
    <section className="why-we-are">
      <div className="why-we-are__container">
        <HeaderSection headerText="Почему мы"></HeaderSection>
        <div className="why-we-are__content">
          {app_mockData && app_mockData.whyWeAre.items.map((item, i) => {
            return (
              <WhyWeAreItem
                image={item.image}
                text={item.text}
                key={i}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
export default WhyWeAre
