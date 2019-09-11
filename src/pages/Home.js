import React, { Component, Fragment } from 'react';
import { db } from '../services/db';
import { auth, isAuthenticated, isAuthorized, signIn, signOut } from '../services/auth';
import Header from "../components/Header";
import CoffeePurchased from '../components/CoffeePurchased';

class Home extends Component {
    state = {
        isLoading: true,
        customerDocRef: db.collection('customers').doc(this.props.match.params.email)
    }

    componentDidMount() {
        this.initAuth();
        this.initCustomer();
    }

    initAuth = () => {
        db.collection('admins').get().then(col => {
            col.forEach(doc => {
                const authorizedUserIds = doc.data().ids;
                this.setState({
                    isLoading: false,
                    isAuthorized: isAuthorized(this.state.user, authorizedUserIds),
                    authorizedUserIds
                });
            })
        })

        auth.onAuthStateChanged((user) => {
            this.setState({
                isLoading: !this.state.authorizedUserIds,
                isAuthenticated: isAuthenticated(user),
                isAuthorized: isAuthorized(user, this.state.authorizedUserIds),
                user
            })
        })
    }

    initCustomer = () => {
        this.state.customerDocRef.get().then(doc => {
            let customer = doc.data();
            if (!customer) {
                customer = { coffeeCount: 1 };
                this.state.customerDocRef.set(customer);
            }
        });

        this.state.customerDocRef.onSnapshot(doc => {
            const customer = doc.data();
            if (customer)
                this.setState({ customer: { ...customer, email: doc.id } });

        })
    }

    render() {
        console.log(this.state);
        return (
            <Fragment>
                <Header />
                <div className="App">
                    {
                        this.state.isLoading &&
                        <h1>Loading...</h1>
                    }
                    {
                        !this.state.isLoading &&
                        <Fragment>
                            {
                                this.state.isAuthorized &&
                                this.state.customer &&
                                <Fragment>
                                    <h1>{this.state.customer.email}</h1>
                                    <CoffeePurchased customerDocRef={this.state.customerDocRef} customer={this.state.customer} />
                                </Fragment>
                            }
                            {
                                !this.state.isAuthenticated &&
                                <button onClick={signIn}>Sign In</button>
                            }
                            <br/>
                            {
                                this.state.isAuthenticated &&
                                <Fragment>
                                    {
                                        !this.state.isAuthorized &&
                                        <h1>Not authorized</h1>
                                    }
                                    <button onClick={signOut}>Sign Out</button>
                                </Fragment>
                            }
                        </Fragment>
                    }
                </div>
            </Fragment>
        )
    }
}

export default Home;
