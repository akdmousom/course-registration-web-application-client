import PropTypes from "prop-types";
const Cart = ({books}) => {

    
    
    return (
        <div>
            <div className=" w-full rounded-lg bg-white">
                <div className="p-4">

                    <h1 className="text-lg my-2 font-bold text-[#2F80ED]">Credit Hour Remaining 7 hr</h1>
                    <hr />
                    <h2 className="font-bold text-lg mt-1">Course Name</h2>

                    {books.map(book => <li key={book.id} className="my-2 text-base font-normal text-[#1C1B1B99] list-decimal">{book.title}</li>)}

                    <hr />

                    <p className="text-base my-2 font-medium">Total Credit Hour : 13</p>

                    <hr />

                    <p className="my-2">Total Price : 48000 USD</p>

                </div>
            </div>
        </div>
    );
};

Cart.propTypes ={
    books : PropTypes.array.isRequired,
}

export default Cart;