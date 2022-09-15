import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Button from '../Button'


const UsedButton = ({
                      firstButton,
                      firstButtonText,
                      secondButton,
                      secondButtonText,
                      firstArrowRight,
                      FirstArrowLeft,
                      secondArrowRight,
                      secondArrowLeft,
                    }) => {

  const [ isDesktop, setDesktop ] = useState(window.innerWidth > 767)

  const updateMedia = () => {
    setDesktop(window.innerWidth > 767)
  }

  useEffect(() => {
    window.addEventListener('resize', updateMedia)
    return () => window.removeEventListener('resize', updateMedia)
  })

  return (
    <>
      {isDesktop ?
        <Button
          type={firstButton}
          arrowRight={firstArrowRight}
          arrowLeft={FirstArrowLeft}
        >
          <span>{firstButtonText}</span>
        </Button> :
        <Button
          type={secondButton}
          arrowRight={secondArrowRight}
          arrowLeft={secondArrowLeft}
        >
          <span>{secondButtonText}</span>
        </Button>
      }
    </>
  )
}
export default UsedButton
