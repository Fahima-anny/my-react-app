import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'
import Book from './Book'

function App() {
const actors = ['Salman Shah', 'Josim', 'Shoriful Raj' , 'Riaz' , 'Hero Alom']

const singers = [
  {   name: 'Mahfuj' , age: 50  },
  {   name: 'Tahsan' , age: 38  },
  {   name: 'Eva' , age: 40  },
  {   name: 'Mithila' , age: 35  },
]

const books = [
  {name:'biology', price:150},
  {name:'math', price:100},
  {name:'physics', price:130},
  {name:'chemistry', price:120},
]

  return (
    <>
      <h1>Vite + React</h1>

<Book data={books}></Book>

{/* {
  books.map(book => <Book data={book}></Book>)
} */}

{/* {
singers.map(singer => <Singer details={singer}></Singer>)
} */}

{/* <Actor name='Bappa Raj'></Actor>
{
  actors.map( actor => <Actor name={actor}></Actor> )
} */}

      {/* <Todo id='1' isDone={true} task='learn react'></Todo>
      <Todo id='2' isDone={false} task='learn data base'></Todo>
      <Todo id='3' isDone={true} task='learn fire base'></Todo> */}
      {/* <Person></Person>
      <Student></Student>
      <Developer></Developer>
      <Product name='laptop' price='70000'></Product>
      <Product name='TV' price='30000'></Product>
      <Product name='Digital Watch' price='7000'></Product>
      <SchoolStudent name='Yusuf' grade='0' roll='01'></SchoolStudent>
      <SchoolStudent name='Fahima' grade='12' roll='1018261'></SchoolStudent>
      <SchoolStudent name='Tahsan' grade='10' roll='9797600'></SchoolStudent>
      <SchoolStudent></SchoolStudent> */}
    </>
  )
}

function SchoolStudent({ name = 'Not Found', grade = 0, roll = 0 }) {
  return (
    <div className='student'>
      <h3>Name: {name}</h3>
      <h3>Grade: {grade}</h3>
      <h3>Roll: {roll}</h3>
    </div>
  )
}

function Product(props) {
  console.log(props);
  return (
    <div className='student'>
      <h3>Product : {props.name}</h3>
      <h3>Price : {props.price}</h3>
    </div>
  )
}

function Person() {
  const name = 'Fahima';
  const age = 23;
  return (
    <h3>Hi! I am {name} with age {age} .</h3>
  )
}

function Student() {
  const data = { name: 'Faruk', age: 37, gender: 'Male' };
  return (
    <div className='student'>
      <h2>My name is {data.name}</h2>
      <h2>My age is {data.age}</h2>
      <h2>My gender is {data.gender}</h2>
    </div>
  )
}

let developerStyle = {
  borderRadius: '20px',
  border: '2px solid red',
  backgroundColor: 'yellow',
  padding: '10px',
  margin: '10px'
}

function Developer() {
  return (
    <div style={developerStyle}>
      <h2>I am learning web <br></br> development with react</h2>
    </div>
  )
}


export default App
