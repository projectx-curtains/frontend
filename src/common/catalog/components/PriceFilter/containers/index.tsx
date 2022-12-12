import { useState } from "react"
import PriceFilter from "../components"

const PriceFilterContainer = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [sort, setSort] = useState("")
  const changeTargetValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSort(event.target.value)
  }

  return <PriceFilter changeTargetValue={changeTargetValue} />
}

export default PriceFilterContainer
