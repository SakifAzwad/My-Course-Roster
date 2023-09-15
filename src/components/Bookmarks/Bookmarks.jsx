import './Bookmarks.css'

const Bookmarks = () => {
    return (
        <div className="ml-20 h-72 bg-white rounded-xl">
            <h1 className="text-lg font-bold text-[#2F80ED] p-8 pb-5">Credit Hour Remaining 20 hr</h1>
            <hr className="col3 h-[1.5px] mx-8" />
            <h1 className='text-xl font-bold px-8 py-4'>Course Name</h1>
            <hr className="col3 h-[1.5px] mx-8" />
            <h1 className='font-medium text-base px-8 py-4'>Total Credit Hour : 0</h1>
            <hr className="col3 h-[1.5px] mx-8" />
            <h1 className='text-base font-semibold px-8 py-4'>Total Price : 0 USD</h1>
        </div>
    );
};

export default Bookmarks;