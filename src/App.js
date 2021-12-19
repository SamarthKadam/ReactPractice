import { useState } from 'react';
import './App.css';
import Items from './Components/Items.js';
import Header from './Components/Header.js';
import DataMan from './Components/DataMan';

function App() {

  let newarr=[];
  const DeleteItem=function(item)
  {
    newarr=data.filter((data)=>{
      if(data.data.id!==item)
      {
        return data;
      }
    })
    setdata([...newarr]);
  }

  const [data,setdata]=useState([
    {
      img:'https://m.media-amazon.com/images/I/71J93R3+TkL._SX679_.jpg',
      data:{
        what:'Lays Potato Chips',
        gram:'130g',
        vegan:true,
        count:0,
        id:1,
        price:99,
      }
    },
    {
      img:'https://images-eu.ssl-images-amazon.com/images/I/51oKIIWsoqL._SX300_SY300_QL70_FMwebp_.jpg',
      data:{
        what:'Kurkure Namkeen',
        gram:'94g',
        vegan:false,
        count:0,
        id:2,
        price:85,
     }
    }
    ,{
      img:'https://m.media-amazon.com/images/I/71HTq0LB4PL._SX679_.jpg',
      data:{
        what:`Lay's Maxx -macho `,
        gram:'57g + 6g',
        vegan:false,
        count:0,
        id:3,
        price:30,

      }
    },
    {
      img:'https://m.media-amazon.com/images/I/71AJZ8IXITL._SX679_.jpg',
      data:{
        what:'Too Yumm Veggie Stix',
        gram:'75g',
        vegan:true,
        count:0,
        id:4,
        price:20,
      }
    }
  ]);
  return (
    <div className='App'>
      <div className='Cart'>
        <Header content={'ShoppingCart'} content1={'Remove All'}></Header>
        <Items DeleteItem={DeleteItem} setdata={setdata} datalist={data}></Items>
        <hr className='linebreak' />
        <DataMan data={data}></DataMan>
      </div>
    </div>
  );
}

export default App;


// {
//   img:'https://images-eu.ssl-images-amazon.com/images/I/51oKIIWsoqL._SX300_SY300_QL70_FMwebp_.jpg',
//   data:{
//     what:'Kurkure Namkeen Naughty Tomatoes',
//     gram:'94gm',
//     vegan:false,
//  }