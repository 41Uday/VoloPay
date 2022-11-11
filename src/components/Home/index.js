import {Component} from 'react'

import {AiOutlinePlus} from 'react-icons/ai'

import {GoThreeBars} from 'react-icons/go'

import {BsFillGridFill} from 'react-icons/bs'

import Tabs from '../Tabs'

import YourTab from '../YourTab'

import AllTab from '../AllTab'

import BlockedTab from '../BlockedTab'

import './index.css'

const tabList = [
    {id : 1, text: "Your"},
    {id : 2, text: "All"},
    {id : 3, text: "Blocked"},
]


class Home extends Component {

    state = {tabId : tabList[1].id}

    buttonTab = (id) => {
        console.log("clicked",id)
        this.setState({tabId : id})
    }

    allTabsMethods = () => {
        const {tabId} = this.state
        switch(tabId) {
            case 1 :
                return  <YourTab />
            case 2 :
                return  <AllTab />
            case 3 :
                return <BlockedTab />
            default :
                return null
        }
    }

    render() {
        const {tabId} = this.state
        return (
            <div className='home-container'>
                <div className='card-1-home'>
                    <div className='inner-card-h-1'>
                        <h1 className='head-h-1'>Virtual cards</h1>
                        <p className='para-h-1'>Learn more</p>
                    </div>
                    <div className='inner-card-h-2'>
                        <AiOutlinePlus className='icon' />
                        <p>Virtual Card</p>
                    </div>
                </div>
                <div className='card-2-home'>
                    <ul className='h-list-container'>
                    {tabList.map(eachItem => (
                        <Tabs key={eachItem.id} tabItem={eachItem} buttonTab={this.buttonTab} tabID={tabId} />
                    ))}
                    </ul>
                    <div className='inner-card-2-h'>
                        <BsFillGridFill className='icon-1' />
                        <GoThreeBars className='icon-2' />
                    </div>
                </div>
                <hr className='hr' />
                {this.allTabsMethods()}
            </div>
        )
    }
}

export default Home