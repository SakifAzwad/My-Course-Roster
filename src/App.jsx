import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'

function App() {
  

  return (
    <>
      <Header></Header>
      <div className='flex'>
        <Courses></Courses>
        <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
