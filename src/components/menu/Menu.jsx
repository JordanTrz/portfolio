import "./menu.scss"

const Menu = ({menuOpen,setMenuOpen}) => {

    const handleClose = () =>{
        setMenuOpen(false)
    }

  return (
    <div className={"menu " + (menuOpen && "active")}>
        <ul>
            <li onClick={handleClose}>
                <a href="#intro">Home</a>
            </li>
            <li onClick={handleClose}>
                <a href="#portfolio">Portfolio</a>
            </li>
            <li onClick={handleClose}>
                <a href="#works">Works</a>
            </li>
            {/* <li onClick={handleClose}>
                <a href="#testimonials">Testimonials</a>
            </li> */}
            <li onClick={handleClose}>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </div>
  )
}

export default Menu