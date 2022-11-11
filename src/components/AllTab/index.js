import {Component} from 'react'

import {FiSearch} from 'react-icons/fi'

import {BsFilter} from 'react-icons/bs'

import {CiCircleRemove} from 'react-icons/ci'

import CardItem from '../CardItem'

import './index.css'

const cardsList = [
    {
        name: 'Mixmax',
        budgetName: 'Software subscription',
        ownerId: 1,
        spent: {
            value: 0,
            currency: "SGD"
        },
        availableToSpend: {
            value: 9,
            currency: "SGD"
        },
        cardType: "BURNER",
        expiry: "9 feb",
        limit: 100,
        userName: "Vishal"
    },
    {
        name: 'Quickbooks',
        budgetName: 'Software subscription',
        ownerId: 2,
        spent: {
            value: 0,
            currency: "SGD"
        },
        availableToSpend: {
            value: 1,
            currency: "SGD"
        },
        cardType: "SUBSCRIPTION",
        expiry: "August",
        limit: 10,
        userName: "Rajesh"
    },
    {
        name: 'Motion',
        budgetName: 'Software subscription',
        ownerId: 3,
        spent: {
            value: 0,
            currency: "SGD"
        },
        availableToSpend: {
            value: 15,
            currency: "SGD"
        },
        cardType: "SUBSCRIPTION",
        expiry: "November",
        limit: 5,
        userName: "Rajith"
    },
    {
        name: 'Pandadoc',
        budgetName: 'Software subscription',
        ownerId: 4,
        spent: {
            value: 0,
            currency: "SGD"
        },
        availableToSpend: {
            value: 180,
            currency: "SGD"
        },
        cardType: "SUBSCRIPTION",
        expiry: "September",
        limit: 180,
        userName: "Mayank"
    },
    {
        name: 'Apple Dev License',
        budgetName: 'Software subscription',
        ownerId: 5,
        spent: {
            value: 148,
            currency: "SGD"
        },
        availableToSpend: {
            value: 30,
            currency: "SGD"
        },
        cardType: "BURNER",
        expiry: "1 May, 23",
        limit: 100,
        userName: "Rajesh"
    },
    {
        name: 'Xero',
        budgetName: 'Software subscription',
        ownerId: 6,
        spent: {
            value: 0,
            currency: "SGD"
        },
        availableToSpend: {
            value: 5,
            currency: "SGD"
        },
        cardType: "BURNER",
        expiry: "9 feb",
        limit: 100,
        userName: "Mahesh"
    },
    {
        name: 'Mookambika',
        budgetName: 'Software subscription',
        ownerId: 7,
        spent: {
            value: 0,
            currency: "SGD"
        },
        availableToSpend: {
            value: 5,
            currency: "SGD"
        },
        cardType: "BURNER",
        expiry: "6 July",
        limit: 100,
        userName: "Sathish"
    },
    {
        name: 'Tata Tic',
        budgetName: 'Software subscription',
        ownerId: 8,
        spent: {
            value: 0,
            currency: "SGD"
        },
        availableToSpend: {
            value: 100,
            currency: "SGD"
        },
        cardType: "SUBSCRIPTION",
        expiry: "December",
        limit: 15,
        userName: "Jyothi"
    },
    
]

class AllTab extends Component {

    state = {listOfCards : cardsList,isSearch: false,searchValue : ""}

    searchIcon = () => {
        this.setState({isSearch : true})
    }

    crossButton = () => {
        this.setState({isSearch: false})
    }

    changeSearch = event => {
        this.setState({searchValue: event.target.value})
    }

    render() {
        const {listOfCards,isSearch,searchValue} = this.state
        const filterResult = listOfCards.filter(e => e.name.toLowerCase().includes(searchValue.toLowerCase()))
        const count = filterResult.length === 0
        return (
            <div>
                <div className='card-1-a-t'>
                    {isSearch ? (<div className='circle'>
                        <input type="search" className='search-icon'  onChange={this.changeSearch} />
                        <CiCircleRemove className='cross' onClick={this.crossButton} />
                    </div>) : (<FiSearch onClick={this.searchIcon} />)}
                    <div className='filter-container'>
                        <BsFilter />
                        <p>Filter</p>
                    </div>
                </div>
                {count ? (<div className='all-tab-list-cont'>
                    <h1>There is no cards, type other name!</h1>
                </div>) : (
                    <ul className='all-tab-list-cont'>
                    {filterResult.map(each => (
                        <CardItem key={each.ownerId} cardItem={each} />
                    ))}
                </ul>
                )}
            </div>
        )
    }
}

export default AllTab