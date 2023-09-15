/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import Bookmark from '../Bookmark/Bookmark';
import './Bookmarks.css'

const Bookmarks = ({insert,totalCost,totalCredit}) => {
    return (
        <div>
            <div className="lg:ml-20 md:ml-4 bg-white rounded-xl">
            <h1 className="text-lg font-bold text-[#2F80ED] p-8 pb-5">Credit Hour Remaining {20-totalCredit} hr</h1>
            <hr className="col3 h-[1.5px] mx-8" />
            <h1 className='text-xl font-bold px-8 py-4'>Course Name</h1>
            
           <ol className='ml-8'>
            {
                 
            insert.map((x,idx) =><li key={x.id} className='col4 my-2 text-base font-normal '>{idx+1}.<Bookmark x={x} ></Bookmark></li>)
                
            }
           </ol>
            <hr className="col3 h-[1.5px] mx-8" />
            <h1 className='font-medium text-base px-8 py-4'>Total Credit Hour : {totalCredit}</h1>
            <hr className="col3 h-[1.5px] mx-8" />
            <h1 className='text-base font-semibold px-8 py-4'>Total Price : {totalCost} USD</h1>
        </div>
        </div>
    );
};

export default Bookmarks;