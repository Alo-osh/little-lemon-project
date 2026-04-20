import {Link} from 'react-router-dom'

const ConfirmedBooking = () => {
  return (
    <div className='background'>
    <div className='confirming'>
        <h1>Booking has been confirmed</h1>
        <Link to="/booking">
        <button>Back </button></Link>
    </div>
    </div>
  )
}

export default ConfirmedBooking;