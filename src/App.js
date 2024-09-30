import { useState } from 'react';
import './App.css';
import FilterButtons from './components/FilterButtons/FilterButtons.jsx';
import Footer from './components/Footer/Footer.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import ProductList from './components/Products/ProductList.jsx';
const products = [
  { name: "Smart watch", 
  category: "Smartwatch", 
  price: 400, 
  image: "../imgs/smart1.jpg" ,
  info:"Smartwatch"
},
{ name: "Smart watch", 
  category: "Smartwatch", 
  price: 399, 
  image: "../imgs/smart2.jpg" ,
  info:"Smartwatch"
},
{
  name: "Smartwatch", 
  category: "Smartwatch", 
  price: 600, 
  image: "../imgs/smart3.webp" ,
  info:"Smartwatch"

},
{
  name: "Smart watch", 
  category: "Smartwatch", 
  price: 799.49, 
  image: "imgs/smart4.jfif" ,
  info:"Smartwatch"

},{
  name: "Bluetooth Speaker", 
  category: "BluetoothSpeaker", 
  price: 300, 
  image: "imgs/BluetoothSpeaker.jpg" ,
  info:"BluetoothSpeaker"

},

{
  name: "Wireless Earbuds", 
  category: "WirelessEarbuds", 
  price: 150, 
  image: "imgs/Wireless Earbuds.jpg" ,
  info:"WirelessEarbuds"

},
];
function App() {
  const [filteredProd, setFilteredProd] = useState(products);
  const [title,setTitle]=useState('OUR PRODUCT LISTS')
  const handleFilterChange = (category) => {
    if (category === 'all') {
        setFilteredProd(products);
        setTitle('OUR PRODUCT LISTS')
    } else {
        setFilteredProd(products.filter(product => product.category === category));
        setTitle(`${category} LIST`)
    }
};

  return (
   <>
  <Navbar title={title}/>
  <FilterButtons onFilterChange={handleFilterChange} />
  <ProductList products={filteredProd}/>
  <Footer/>
   </>
  );
}

export default App;