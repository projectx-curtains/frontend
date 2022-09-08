import React from 'react'

const WhyWeAreItem = ({ image, text }) => {
  return (
    <div className="why-we-are-item">
      <div className="why-we-are-item__image">
        <img
          src={require(`../../assets/icons/WhyWeAreIcons/${image}`)}
          width="66pх"
          height="66px"
          alt="why we" />
      </div>
      <div className="why-we-are-item__text">{text}</div>
    </div>
  )
}
export default WhyWeAreItem
