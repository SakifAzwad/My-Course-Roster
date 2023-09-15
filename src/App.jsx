import { useState } from 'react'
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [showToast, setShowToast] = useState(false);
  const [insert,setInsert]=useState([]);
  const [totalCost, setTotalCost] = useState(0);

  const handleClick=course=>
  {
    let cost=course.price;
    let isAdded=insert.find((item)=>item.id==course.id)
    if(isAdded)
    {
      toast.error("The Course is already added", {
        position: toast.POSITION.TOP_LEFT
        // You can customize other options here
      });
      setShowToast(true);
    }
    else
    {
      insert.forEach(x=>{
        cost+=x.price;
      })
      setTotalCost(cost);
      setInsert([...insert,course]);
    }
  }

  return (
    <>
      <Header></Header>
      <div className='flex'>
        <Courses handleClick={handleClick} ></Courses>
        {showToast && <ToastContainer />}
        <Bookmarks insert={insert} totalCost={totalCost}></Bookmarks>
      </div>
    </>
  )
}

export default App
