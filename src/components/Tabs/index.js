import './index.css'

const Tab = (props) => {
    const {tabItem,buttonTab,tabID} = props 
    const {id,text} = tabItem 
    const clickTab = () => {
        buttonTab(id)
        
    }
    const classValue = tabID === id ? "cls" : ""
    return (
        <div className='tab-container'>
            <p className={`tab-text ${classValue}`} onClick={clickTab}>{text}</p>
        </div>
    )
}

export default Tab