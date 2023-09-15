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
  const [totalCredit, setTotalCredit] = useState(0);
  const handleClick=course=>
  {
    let cost=course.price;
    let credit=course.credit;
    let isAdded=insert.find((item)=>item.id==course.id)
    if(isAdded)
    {
      toast.error("The course is already added", {
        position: toast.POSITION.TOP_LEFT
        // You can customize other options here
      });
      setShowToast(true);
    }
    else
    {
      insert.forEach(x=>{
        cost+=x.price;
        credit+=x.credit;
      })
      if(credit>20)
      {
        toast.error("You can't take more than 20 credit", {
          position: toast.POSITION.TOP_LEFT
          // You can customize other options here
        });
        setShowToast(true);
      }
      else{
        setTotalCredit(credit);
      setTotalCost(cost);
      setInsert([...insert,course]);
      }
    }
  }

  return (
    <>
      <Header></Header>
      <div className='lg:flex pb-8'>
        <Courses handleClick={handleClick} ></Courses>
        {showToast && <ToastContainer />}
        <Bookmarks insert={insert} totalCost={totalCost} totalCredit={totalCredit}></Bookmarks>
      </div>
    </>
  )
}

export default App
