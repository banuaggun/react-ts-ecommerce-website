import { Link, Outlet } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/store">Products</Link>
        </li>
      </ul>
      <div>
        <div className='badge'>2</div>
        <button type="button">Cart</button>
      </div>
      <Outlet/>
    </nav>
  )
}

export default Navbar