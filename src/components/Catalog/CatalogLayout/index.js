import React from 'react';
import CatalogCard from '../index';

function Layout() {
  return (
    <div className='catalog-layout'>
    <div className='catalog-layout__top-left-cards'>
    <CatalogCard
      type={'blankets'}
      setText={'Покрывала'}
      onClick={
        ()=> console.log(`YOU CLICKED ON A CARD, YAY`)
      }      
    />
    <CatalogCard
      type={'pillows'}
      setText={'Подушки'}
      onClick={
        ()=> console.log(`YOU CLICKED ON A CARD, YAY`)
      }      
    />
    </div>
    <div className='catalog-layout__center-card'>
    <CatalogCard
      type={'curtains'}
      setText={'Шторы'}
      onClick={
        ()=> console.log(`YOU CLICKED ON A CARD, YAY`)
      }      
    />
    </div>
    <div className='catalog-layout__top-right-cards'>
    <CatalogCard
      type={'fabrics'}
      setText={'Ткани'}
      onClick={
        ()=> console.log(`YOU CLICKED ON A CARD, YAY`)
      }      
    />
    <CatalogCard
      type={'fittings'}
      setText={'Фурнитура'}
      onClick={
        ()=> console.log(`YOU CLICKED ON A CARD, YAY`)
      }      
    />
    </div>
    
    <CatalogCard
      type={'lambrequins'}
      setText={'Ламбрекены'}
      onClick={
        ()=> console.log(`YOU CLICKED ON A CARD, YAY`)
      }      
    />
    <CatalogCard
      type={'sale'}
      setText={'Распродажа %'}
      onClick={
        ()=> console.log(`YOU CLICKED ON A CARD, YAY`)
      }      
    />
    
    </div>
  )
}

export default Layout;
