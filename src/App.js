import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  const nayoks = ['Anwar',  'Alomgir', 'Sakib', 'Bappi']
  const products =[
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price:'$60.99'},
    {name: 'PDF Reader', price: '$6.99'},
    {name: 'Premier EI', price: '$6.00'}
  ]
  
 const nayokNames = nayoks.map(nayok => nayok);
 console.log(nayokNames);
  return (
    <div className="App">
      <header className="App-header">
         <p> I am a React Person</p>
        <Counter></Counter>
        <Users></Users>
         <ul>
           {
             nayoks.map(nayok => <li>{nayok}</li> )
           }
           {
             products.map(product => <li>{product.name}</li>)
           }
           
         </ul>
         {
           products.map(product => <Product product = {product}> </Product>)
         }    
         <Person></Person>
      </header>
    </div>
  );
}

function Counter()
{
  const [count,setCount] = useState(10);
  const handleIncrease = () =>setCount(count + 1);
 
  return(
    <div> 
      <h1>Count: {count} </h1>
      <button onMouseMove ={ () =>setCount(count-1)}>Decrease</button>
      <button onClick ={() =>setCount(count + 1)}>Inrease</button>
    </div>
  )
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data))
  },[])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
       {
         console.log(users)
       }
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
      
    </div>
  )
}

function Product(props){
  const ProductStyle={
    border:'1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height:'200px',
    width:'200px',
    float: 'left'
  }
  const {name, price} = props.product;
  console.log(name, price)
  return (
    <div style ={ProductStyle}>
    <h3>{name}</h3>
     <h5>{price}</h5>
     <button>Buy Now</button>
    </div>
  )
}

function Person(props){
 
  return (
  <div style={{border:'2px solid gold', width:'400px'}}>
      <h3>My name:{props.name}</h3>
      <p>My Profession:{props.job}</p>
  </div>
  )
}

export default App;
