import React,{ useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';


const allCategories= ['all',...new Set(items.map((item)=> item.category))];
console.log(allCategories);
//first try with items.map then new sett then spread operator u l be able tosee the difference
// new Set fetches only unique values(ex;1,2,3,1,2,3)numbers are repeated so this o=is gonna fetch only 1,2,3



function App() {
  const [menuItems,setMenuItems]=useState(items);
  const [categories,setCategories]= useState(allCategories);



  const filterItems = (category)=>{
    if(category === 'all'){
      setMenuItems(items);
      return;
    }
const newItems = items.filter((item)=>item.category === category);
setMenuItems(newItems);
  }

  return (
    <main >
      <section className='menu section'>
      <div className='title'>
        <h2>Our Menu</h2>
         <div className='underline'></div>
      </div>
      <Categories categories={categories} filterItems={filterItems}/>
      <Menu items={menuItems}/>
      </section>
    </main>
  );
}

export default App;
