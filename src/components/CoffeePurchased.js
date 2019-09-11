import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faCoffee);

const CoffeePurchased = ({ customerDocRef, customer }) => {
    const required = [1, 2, 3, 4, 5];
    const numberPurchased = customer.coffeeCount;
    const numberFree = Math.floor(numberPurchased / 6);
    const numberOfCups = (numberPurchased - numberFree) % 5;
    const numberRemaining = required.length - numberOfCups;
    const isNextCupFree = numberPurchased % 6 === 5;

    const adjust = (isPurchased) => {
        isPurchased ? adjustCoffeeCount(-1) : adjustCoffeeCount(1);
    }

    const adjustCoffeeCount = (adjustBy) => {
        let coffeeCount = customer.coffeeCount + adjustBy;
        if (coffeeCount < 0) {
            coffeeCount = 0;
        }
        customerDocRef.update({ coffeeCount });
    };

    const saveDateTime = () => {
        var lastFree = new Date();
        customerDocRef.update({ lastFree });
    };

    const handleFreeClick = () => {
        adjustCoffeeCount(1)
        saveDateTime()
    };


    return (
        <React.Fragment>
            {
                required.map(num => {
                    const isPurchased = isNextCupFree || numberOfCups >= num;
                    return (
                        <span key={num} onClick={() => adjust(isPurchased)} className="cup">
                            <FontAwesomeIcon icon="coffee" size="4x" color={isPurchased ? "green" : "grey"} />
                        </span>
                    )
                })
            }
            {
                customer &&
                customer.lastFree &&
                <p>{"Most recent free coffee: " + customer.lastFree.toDate()}</p>
            }
            {
                !isNextCupFree &&
                <h1>{`${numberRemaining} coffee(s) remaining until free`}</h1>
            }
            {
                isNextCupFree &&
                <React.Fragment>
                    <h1>Next coffee is free!</h1>
                    <button className="button" onClick={handleFreeClick}>Use free coffee</button>
                </React.Fragment>
            }
            
        </React.Fragment>
    )

}

export default CoffeePurchased;