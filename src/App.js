import {Routes,Route} from 'react-router-dom'
import HomePage from './HomePage.js';
import BookingPage from './BookingPage.js'
import Nav from './Components/Nav.js'
import ConfirmedBooking from './Components/ConfirmedBooking.js';
import LogIn from './Components/LogIn.js';
import Review from './Components/Review.js';
import OnlineOrdering from './Components/OnlineOrdering.js';
import { ItemsProvider } from './Components/ItemsContext.js';
function App() {
  return (
    <div>
      <ItemsProvider>      <nav>
      <Nav/>
       </nav>
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/booking" element={<BookingPage/>}></Route>
            <Route path="/ConfirmationPage" element={<ConfirmedBooking />}></Route>
            <Route path="/LogIn" element={<LogIn/>}></Route>
            <Route path="/Review" element={<Review/>}></Route>
            <Route path='/OnlineOrdering' element={<OnlineOrdering/>}></Route>

        </Routes>
        </ItemsProvider>
    </div>

  );
}

export default App;