import React from 'react';
import CatalogCard from './CatalogCard';

function Layout() {
  return (
    <div className='catalog-layout'>
    <div className='catalog-layout__top-left-cards'>
    <CatalogCard
      type={'medium'}
      setText={'TEXT'}
      onClick={
        ()=> console.log(`YOU CLICKED ON A CARD, YAY`)
      }      
    />
    <CatalogCard
      type={'medium'}
      setText={'TEXT'}
      onClick={
        ()=> console.log(`YOU CLICKED ON A CARD, YAY`)
      }      
    />
    </div>
    <div className='catalog-layout__center-card'>
    <CatalogCard
      type={'large'}
      setText={'TEXT'}
      onClick={
        ()=> console.log(`YOU CLICKED ON A CARD, YAY`)
      }      
    />
    </div>
    <div className='catalog-layout__top-right-cards'>
    <CatalogCard
      type={'medium'}
      setText={'TEXT'}
      onClick={
        ()=> console.log(`YOU CLICKED ON A CARD, YAY`)
      }      
    />
    <CatalogCard
      type={'medium'}
      setText={'TEXT'}
      onClick={
        ()=> console.log(`YOU CLICKED ON A CARD, YAY`)
      }      
    />
    </div>
    
    <CatalogCard
      type={'small'}
      setText={'TEXT'}
      onClick={
        ()=> console.log(`YOU CLICKED ON A CARD, YAY`)
      }      
    />
    <CatalogCard
      type={'small'}
      setText={'TEXT'}
      onClick={
        ()=> console.log(`YOU CLICKED ON A CARD, YAY`)
      }      
    />
    
    </div>
  )
}

export default Layout;
