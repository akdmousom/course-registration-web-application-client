
import { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards'
import Cart from './components/Cart/Cart'
import { useEffect } from 'react';


function App() {

  const [course, setCourse] = useState([]);
  const [books, setBooks] = useState([]);
  const [creditHour, setCreditHour] = useState(20)
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalCreditHour, setTotalCreditHour] = useState(0)


  const handleSelectBook = (book, id) => {

    const newBooks = [...books, book]

   if (books.find(book => book.id === id)) {

    return
    
   } else{

    if (creditHour < 0) {

      return

    } else if (books.find((book) => book.id === id)) {

      return
      
    } else{
      setBooks(newBooks)
    }
   }

  }

  const handleTotalPrice = (price, credit,id) => {
    const newCreditHours = creditHour - credit;
    const totalCreditHours = totalCreditHour + credit;

   
    if (books.find(book => book.id === id)) {

      return alert('Book Already Listed')

      
    }else{
      if (newCreditHours < 0) {

        return alert('You Reach your credit hour')
        
      }else{
        setTotalCreditHour(totalCreditHours)
      }
  
      if (newCreditHours < 0) {
  
        return alert('Sorry You Reach Your Credit Hour Limit')
  
      } else {
  
        const newTotalPrice = totalPrice + price
        setTotalPrice(newTotalPrice)
  
      }
  
  
      if (newCreditHours < 0) {
  
        return <div className="toast toast-start toast-middle">
          <div className="alert alert-info">
            <span>New mail arrived.</span>
          </div>
          <div className="alert alert-success">
            <span>Message sent successfully.</span>
          </div>
        </div>
  
      } else {
  
        setCreditHour(newCreditHours)
      }
    }

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
            course.map((course) => <Cards handleTotalPrice={handleTotalPrice} handleSelectBook={handleSelectBook} key={course.id} course={course} />)
          }
        </div>
        <Cart totalCreditHour={totalCreditHour} totalPrice={totalPrice} creditHour={creditHour} books={books} />
      </div>


    </div>
  )
}

export default App
