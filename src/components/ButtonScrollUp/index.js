import React, {
  useState,
  useEffect,
} from 'react'
import debounce from 'lodash.debounce'

const ButtonScrollUp = ({ scrolledValue }) => {
  const [ visible, setVisible ] = useState(false)

  useEffect(() => {
    const debounceVal = debounce(toggleVisible, 10)
    window.addEventListener('scroll', debounceVal)
    return () => window.removeEventListener('scroll', debounceVal)
  })

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop

    if (scrolled > scrolledValue) {
      setVisible(true)
    } else if (scrolled <= scrolledValue) {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className={visible ? 'button-scroll-up' : 'button-scroll-up hidden'}>
      <img
        src={require('../../assets/svg/UpArrow.svg').default}
        alt="button-up"
        onClick={scrollToTop}
      />
    </div>
  )
}

export default ButtonScrollUp
