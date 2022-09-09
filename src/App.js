import OurWork from './pages/home/sections/OurWork'
import Reviews from './pages/home/sections/Reviews'
import NewProducts from './pages/home/sections/NewProducts'
import Popular from './pages/home/sections/Popular/Popular'
import { NewProductData } from './mockData/NewProductData'
import WhyWeAre from './pages/home/sections/WhyWeAre'

function App()
{
  return (
    <div className="app">
      <NewProducts galleryItems={NewProductData} />
      <Popular popularData={NewProductData} />
      <OurWork />
      <WhyWeAre />
      <Reviews />
    </div>)
}

export default App
