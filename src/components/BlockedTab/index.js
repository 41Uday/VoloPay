import {Component} from 'react'

import CardItem from '../CardItem'

import './index.css'

const yourCardsList = [
    {
        name: 'D3 Tech',
        budgetName: 'Software subscription',
        ownerId: 11,
        spent: {
            value: 0,
            currency: "SGD"
        },
        availableToSpend: {
            value: 40,
            currency: "SGD"
        },
        cardType: "SUBSCRIPTION",
        expiry: "July",
        limit: 180,
        userName: "Uday"
    },
    {
        name: 'V7 Height',
        budgetName: 'Software subscription',
        ownerId: 12,
        spent: {
            value: 148,
            currency: "SGD"
        },
        availableToSpend: {
            value: 30,
            currency: "SGD"
        },
        cardType: "BURNER",
        expiry: "4 January, 21",
        limit: 100,
        userName: "Uday"
    }
]


class BlockedTab extends Component {
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

export default BlockedTab