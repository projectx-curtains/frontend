import OurWork from './pages/home/sections/OurWork'
import Reviews from './pages/home/sections/Reviews'
import NewProducts from './pages/home/sections/NewProducts'
import Popular from './pages/home/sections/Popular/Popular'
import { NewProduct_mockData } from './mockData/newProduct_mockData'
import WhyWeAre from './pages/home/sections/WhyWeAre'

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
