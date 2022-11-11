import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <div className="left">
          <h3>Estatery</h3>
          <h4>Rent</h4>
          <h4>Sell</h4>
          <h4>Manage Property</h4>
          <h4>Resources</h4>
        </div>
      </div>
      <div className="right">
        <button>Login</button>
        <button>SignUp</button>
      </div>
    </div>
  )
}

export default Navbar