
import { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards'
import Cart from './components/Cart/Cart'
import { useEffect } from 'react';
import Swal from 'sweetalert2'
import 'react-toastify/dist/ReactToastify.css';




function App() {

  const [course, setCourse] = useState([]);
  const [books, setBooks] = useState([]);
  const [creditHour, setCreditHour] = useState(20)
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalCreditHour, setTotalCreditHour] = useState(0)


  const handleSelectBook = (book, id) => {
    console.log(book.credit);

    const newBooks = [...books, book]

    if (books.find(book => book.id === id) || creditHour < 0 || totalCreditHour == 20  ) {

      Swal.fire({
        title: 'Error!',
        text: 'Course All Ready Added',
        icon: 'error',
        confirmButtonText: 'Try New Course'
      })

    } else if (book.credit > creditHour ) {
      return
    } else{
      setBooks(newBooks)
    }

  }

  const handleTotalPrice = (price, credit, id) => {
    const newCreditHours = creditHour - credit;
    const totalCreditHours = totalCreditHour + credit;


    if (books.find(book => book.id === id)) {

      return 


    } else {
      if (newCreditHours < 0) {

      return(
        Swal.fire({
          title: 'Oh Ho',
          text: 'Course All Ready Added Cha',
          icon: 'error',
          confirmButtonText: 'Try New Course'
        })

      );
      } else {
        setTotalCreditHour(totalCreditHours)
      }

      if (newCreditHours < 0) {

       return(
        Swal.fire({
          title: 'Oh Ho',
          text: 'Course All Ready Added',
          icon: 'error',
          confirmButtonText: 'Try New Course'
        })
       );

      } else {

        const newTotalPrice = totalPrice + price
        setTotalPrice(newTotalPrice)

      }


      if (newCreditHours < 0) {

       return(
        Swal.fire({
          title: 'Oh Ho',
          text: 'You Reach Your Credit Limit',
          icon: 'error',
          confirmButtonText: 'Try Again Later'
        })
       );

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
  );
}

export default App
