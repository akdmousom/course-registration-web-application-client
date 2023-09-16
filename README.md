# Course Registration Web Application Version 0.1

**Common 3 Project features**

 - Course Card Feature

```Javascript

import { BsCurrencyDollar, BsBook } from 'react-icons/bs'
import './Card.css'
import PropTypes from 'prop-types';
const Cards = ({ course, handleSelectBook, handleTotalPrice, }) => {

const { id, title, img, credit, description, price } = course

    return (
        <div className="w-2/3">

            <div className="card w-72 h-[500px] grid  bg-base-100 p-2 shadow-xl">
                <figure><img className="w-[300px] h-full" src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-lg font-semibold">{title}</h2>
                    <p className="font-normal text-sm text-[#1C1B1B99]">{description.slice(0, 100)}...</p>
                </div>
                <div className="flex justify-between gap-2 px-1 ">
                    <p className='flex items-center text-base font-normal text-[#1C1B1B99] gap-2'><span><BsCurrencyDollar /></span> Price : {price} </p>
                    <p className='flex items-center text-base font-normal text-[#1C1B1B99] gap-2'><span><BsBook /></span> Credit : {credit} hr  </p>
                </div>
                <button onClick={() => { handleSelectBook(course, id); handleTotalPrice(price, credit, id); }} className="btn text-lg font-semibold text-white hover:bg-blue-800 w-70 bg- 
                [#2F80ED]">Select</button>
            </div>

        </div>
    );
};

Cards.propTypes = {
    course: PropTypes.object.isRequired,
    handleSelectBook: PropTypes.func.isRequired,
    handleTotalPrice: PropTypes.func.isRequired,
}

export default Cards;

```

- Course Cart Feature

```Javascript

import PropTypes from "prop-types";
import './Cart.css'
const Cart = ({ books, creditHour, totalPrice, totalCreditHour }) => {

    return (
        <div>
            <div className=" w-full rounded-lg bg-white">
                <div className="p-4">

                    <h1 className="text-lg my-2 font-bold text-[#2F80ED]">Credit Hour Remaining {creditHour} hr</h1>
                    <hr />
                    <h2 className="font-bold text-lg mt-1">Course Name</h2>

                    {books.map(book => <li key={book.id} className="my-2 text-base font-normal text-[#1C1B1B99] list-decimal">{book.title}</li>)}

                    <hr />

                    <p className="text-base my-2 font-medium">Total Credit Hour : {totalCreditHour} </p>

                    <hr />

                    <p className="my-2">Total Price : {totalPrice}  USD</p>

                </div>
            </div>
        </div>
    );
};

Cart.propTypes = {
    books: PropTypes.array.isRequired,
    creditHour: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
    totalCreditHour: PropTypes.number.isRequired,

}

export default Cart;

```

- Toast Feature

```Javascript

import Swal from 'sweetalert2'
Swal.fire({
          title: 'Oh Ho',
          text: 'You Reach Your Credit Limit',
          icon: 'error',
          confirmButtonText: 'Try Again Later'

```

## How can i managed the state in this project?
> First I think about the whole project then I realize that I can complete this project easily
> After that I break down the entire website into small pieces and think if I click on a button, many places will change.
> And after that I start creating the state Total Price Total Credit and the state to keep the data like this I create the states and then I create some components and pass these states to them and create two handle functions which work when something is clicked There will be changes such as price increase, credit hours will increase, remaining hours will decrease, etc. And in this way I finish the work of the project


