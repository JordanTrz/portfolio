import "./portfolioList.scss"

const PortfolioList = ({title, id, active, setSelected}) => {

  return (
    <li onClick={()=>setSelected(id)} className={active ? "portfolioList active" : "portfolioList"}>
        {title}
    </li>
  )
}

export default PortfolioList