import React from 'react'
import Gallery from '../../../../components/Gallery';
import Card from '../../../../components/Card';

const NewProducts = ({newProductData}) => {
    return (
        <Gallery
            headerText='Новинки'
            newProductData={newProductData}
        >
            {newProductData.map((item, i)=>{
                return(
                    <Card
                        key={i}
                        image={item.image}
                        index={item.index}
                        setName={item.setName}
                        setPrice={`ОТ ${item.setPrice} BYN`}
                        onClick={() => console.log('card click')}
                    />
                )
            })}

        </Gallery>
    )
}
export default NewProducts;