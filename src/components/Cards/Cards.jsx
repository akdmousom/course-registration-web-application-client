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
                <button onClick={() => { handleSelectBook(course, id); handleTotalPrice(price, credit, id); }} className="btn text-lg font-semibold text-white hover:bg-blue-800 w-70 bg-[#2F80ED]">Select</button>
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