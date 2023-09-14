
import { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards'
import Cart from './components/Cart/Cart'
import { useEffect } from 'react';


function App() {

  const [course, setCourse] = useState([]);
  const [books, setBooks] = useState([]);
  

  const handleSelectBook = (book) => {

    const newBooks = [...books,book]
    setBooks(newBooks)

  }

  useEffect(() => {
    fetch('course.json')
      .then(res => res.json())
      .then(data => setCourse(data))
  }, [])

  return (
    <div className="container mx-auto">

      <h1 className="text-center text-3xl py-12 font-bold">Course Registration</h1>

      <div className='flex gap-4'>
        <div className='grid gap-4 mb-4 md:grid-cols-3'>
          {
            course.map((course) => <Cards handleSelectBook={handleSelectBook} key={course.id} course={course} />)
          }
        </div>
        <Cart books={books} />
      </div>


    </div>
  )
}

export default App
