import './index.css'

const CardItem = props => {
    const {cardItem} = props 
    const {name,budgetName,userName,cardType,expiry,limit,availableToSpend,spent} = cardItem 
    const res = cardType === "BURNER"
    return (
        <li className='li-item-card'>
           <div className='card-item-card-1'>
                <div>
                    <h1 className='ci-head-1'>{name}</h1>
                    <p className='ci-para-1'>{userName} . {budgetName}</p>
                </div>
                {res ? (<img src="https://thumbs.dreamstime.com/b/vector-flame-icon-simple-illustration-fire-flat-style-danger-sign-warning-attention-vector-white-background-vector-flame-183947245.jpg" alt="img" className='fire-img' />) : (
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIdgbBgHEYdEdz8l4ztXUMLgb-QIfQ-dyKNCpifQQUFb3qAGzyzy9ckz_hQl2gFurtq2I&usqp=CAU" alt="img" className='fire-img' /> 
                ) }
           </div>
           <div className='card-item-card-1'>
                <p className='ci-para-2'>{cardType}</p>
                {res ? (<p >Expires: {expiry}</p>): (<p>{expiry} Limit: {limit} SGD</p>)}
           </div>
           <div className='range'></div>
           <div className='card-item-card-1'>
                <div className='row'>
                    <div className='red'></div>
                    <p>Spent</p>
                </div>
                <p>{spent.value} {spent.currency}</p>
           </div>
           <div className='card-item-card-1'>
                <div className='row'>
                    <div className='red g'></div>
                    <p>Available to spend</p>
                </div>
                <p>{availableToSpend.value} {availableToSpend.currency}</p>
           </div>
        </li>
    )
}

export default CardItem