import {Routes,Route} from 'react-router-dom'
import HomePage from './HomePage.js';
import BookingPage from './BookingPage.js'
import Nav from './Components/Nav.js'
import Footer from './Components/Footer.js';
import ConfirmedBooking from './Components/ConfirmedBooking.js';
import LogIn from './Components/LogIn.js';
import Review from './Components/Review.js';
function App() {
  return (
    <div>
      <nav>
      <Nav/>
       </nav>
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/booking" element={<BookingPage/>}></Route>
            <Route path="/ConfirmationPage" element={<ConfirmedBooking />}></Route>
            <Route path="/LogIn" element={<LogIn/>}></Route>
            <Route path="/Review" element={<Review/>}></Route>


        </Routes>
    </div>
  );
}

export default App;