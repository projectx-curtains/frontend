import React from 'react'
import HeaderSection from '../../../../components/HeaderSection'
import WhyWeAreItem from '../../../../components/WhyWeAreItem'

const items = [
  {
    image: 'view_in_ar_new.svg',
    text: 'Уникальное воплощение Ваших идей',
  },
  {
    image: 'alarm_on.svg',
    text: 'Выполнение заказа в течение 7 дней',
  },
  {
    image: 'volunteer_activism.svg',
    text: 'Следование новым тенденциям',
  },
  {
    image: 'savings.svg',
    text: 'Предлагаем выгодные цены',
  },
  {
    image: 'headset_mic.svg',
    text: 'Бесплатная косультация дизайнера',
  },
  {
    image: 'published_with_changes.svg',
    text: 'Есть вариант обмена/возврата',
  },
]

const WhyWeAre = () => {
  return (
    <section className="why-we-are">
      <div className="why-we-are__container">
        <HeaderSection headerText="Почему мы"></HeaderSection>
        <div className="why-we-are__content">
          {items && items.map((item, i) => {
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
