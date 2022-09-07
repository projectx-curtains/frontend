import React from 'react';
import CatalogCard from '../index';

function Layout() {
  return (
    <div className='catalog-layout'>
    <div className='catalog-layout__top-left-cards'>
    <CatalogCard
      type={'medium'}
      setText={'Покрывала'}
      onClick={
        ()=> console.log(`YOU CLICKED ON A CARD, YAY`)
      }      
    />
    <CatalogCard
      type={'medium'}
      setText={'Подушки'}
      onClick={
        ()=> console.log(`YOU CLICKED ON A CARD, YAY`)
      }      
    />
    </div>
    <div className='catalog-layout__center-card'>
    <CatalogCard
      type={'large'}
      setText={'Шторы'}
      onClick={
        ()=> console.log(`YOU CLICKED ON A CARD, YAY`)
      }      
    />
    </div>
    <div className='catalog-layout__top-right-cards'>
    <CatalogCard
      type={'medium'}
      setText={'Ткани'}
      onClick={
        ()=> console.log(`YOU CLICKED ON A CARD, YAY`)
      }      
    />
    <CatalogCard
      type={'medium'}
      setText={'Фурнитура'}
      onClick={
        ()=> console.log(`YOU CLICKED ON A CARD, YAY`)
      }      
    />
    </div>
    
    <CatalogCard
      type={'small'}
      setText={'Ламбрекены'}
      onClick={
        ()=> console.log(`YOU CLICKED ON A CARD, YAY`)
      }      
    />
    <CatalogCard
      type={'small'}
      setText={'Распродажа %'}
      onClick={
        ()=> console.log(`YOU CLICKED ON A CARD, YAY`)
      }      
    />
    
    </div>
  )
}

export default Layout;
