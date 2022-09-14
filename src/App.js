import NewProducts from './pages/home/sections/NewProducts'
import Popular from './pages/home/sections/Popular'
import OurWork from './pages/home/sections/OurWork'
import WhyWeAre from './pages/home/sections/WhyWeAre'
import Reviews from './pages/home/sections/Reviews'
import { NewProduct_mockData } from './mockData/newProduct_mockData'

function App()
{
  return (
    <div className="app">
      <div className="container">
        <NewProducts galleryItems={NewProduct_mockData} />
        <Popular popularData={NewProduct_mockData} />
        <OurWork />
        <WhyWeAre />
        <Reviews />
      </div>
    </div>)
}

export default App
