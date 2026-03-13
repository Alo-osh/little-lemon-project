import {Routes,Route} from 'react-router-dom'
import HomePage from './HomePage.js';
import BookingPage from './BookingPage.js'
import Nav from './Components/Nav.js'
function App() {
  return (
    <div>
      <nav>
      <Nav/>
       </nav>
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/booking" element={<BookingPage/>}></Route>
        </Routes>
    </div>
  );
}

export default App;