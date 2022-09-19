import React from 'react'

const WhyWeAreItem = ({ image, text }) => {
  return (
    <div className="why-we-are-item">
      <div className="why-we-are-item__image">
        <img className="icon"
             src={require(`../../assets/icons/WhyWeAreIcons/${image}`)}
             alt="why we" />
      </div>
      <div className="why-we-are-item__text">{text}</div>
    </div>
  )
}
export default WhyWeAreItem
