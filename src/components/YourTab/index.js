import {Component} from 'react'

import CardItem from '../CardItem'

import './index.css'

const yourCardsList = [
    {
        name: 'Artifix',
        budgetName: 'Software subscription',
        ownerId: 21,
        spent: {
            value: 0,
            currency: "SGD"
        },
        availableToSpend: {
            value: 180,
            currency: "SGD"
        },
        cardType: "SUBSCRIPTION",
        expiry: "March",
        limit: 180,
        userName: "Uday"
    },
    {
        name: 'Zuno',
        budgetName: 'Software subscription',
        ownerId: 22,
        spent: {
            value: 0,
            currency: "SGD"
        },
        availableToSpend: {
            value: 30,
            currency: "SGD"
        },
        cardType: "BURNER",
        expiry: "2 October, 25",
        limit: 100,
        userName: "Uday"
    },
    {
        name: 'Achyutas',
        budgetName: 'Software subscription',
        ownerId: 23,
        spent: {
            value: 0,
            currency: "SGD"
        },
        availableToSpend: {
            value: 10,
            currency: "SGD"
        },
        cardType: "BURNER",
        expiry: "18 June",
        limit: 120,
        userName: "Uday"
    },
    {
        name: 'Algonox',
        budgetName: 'Software subscription',
        ownerId: 24,
        spent: {
            value: 0,
            currency: "SGD"
        },
        availableToSpend: {
            value: 10,
            currency: "SGD"
        },
        cardType: "SUBSCRIPTION",
        expiry: "8 April",
        limit: 50,
        userName: "Uday"
    },
]

class YourTab extends Component {
    render() {
        return (
            <div>
                <ul className='all-tab-list-cont'>
                    {yourCardsList.map(each => (
                        <CardItem key={each.ownerId} cardItem={each} />
                    ))}
                </ul>
            </div>
        )
    }
}

export default YourTab