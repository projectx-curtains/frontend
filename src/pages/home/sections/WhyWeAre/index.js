import React from 'react'
import HeaderSection from '../../../../components/HeaderSection'
import WhyWeAreItem from '../../../../components/WhyWeAreItem'
import viewInArNew from '../../../../assets/icons/WhyWeAreIcons/view_in_ar_new.svg'
import alarmOn from '../../../../assets/icons/WhyWeAreIcons/alarm_on.svg'
import volunteerActivism from '../../../../assets/icons/WhyWeAreIcons/volunteer_activism.svg'
import savings from '../../../../assets/icons/WhyWeAreIcons/savings.svg'
import headsetMic from '../../../../assets/icons/WhyWeAreIcons/headset_mic.svg'
import publishedWithChanges from '../../../../assets/icons/WhyWeAreIcons/published_with_changes.svg'

const items = [
  {
    image: viewInArNew,
    text: 'Уникальное воплощение Ваших идей',
  },
  {
    image: alarmOn,
    text: 'Выполнение заказа в течение 7 дней',
  },
  {
    image: volunteerActivism,
    text: 'Следование новым тенденциям',
  },
  {
    image: savings,
    text: 'Предлагаем выгодные цены',
  },
  {
    image: headsetMic,
    text: 'Бесплатная косультация дизайнера',
  },
  {
    image: publishedWithChanges,
    text: 'Есть вариант обмена/возврата',
  },
]

const WhyWeAre = () => {
  return (
    <section className="why-we-are">
      <div className="why-we-are-container">
        <HeaderSection headerText="Почему мы"></HeaderSection>
        <div className="content-container">
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
