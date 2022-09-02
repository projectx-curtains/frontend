import OurWork from './pages/home/sections/OurWork';
import Reviews from './pages/home/sections/Reviews';
import NewProducts from "./pages/home/sections/NewProducts";
import Popular from "./pages/home/sections/Popular/Popular";
import {NewProductData} from './stuff/NewProductData';

function App() {

    const descriptionTextWork = '';
    const descriptionTextReviews = '';
    const user = '';
    const location = '';
    return (<div className="app">
        <NewProducts newProductData={NewProductData}/>
        <Popular popularData={NewProductData}/>
        <OurWork descriptionText={descriptionTextWork}/>
        <Reviews descriptionText={descriptionTextReviews} user={user} location={location}/>
    </div>);
}

export default App;
