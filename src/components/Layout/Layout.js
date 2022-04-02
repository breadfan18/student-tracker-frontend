// Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import { Route, Switch } from 'react-router-dom';
import HWSubmission from '../../pages/HWSubmission';
import Dashboard from '../../pages/Dashboard';
import HWDetails from '../../pages/HWDetails';
import HWHistory from '../../pages/HWHistory';
import Calendar from '../../pages/Calendar';
import Login from '../Login/Login';

// Styles

const Layout = props => {
    return (
        <div>
            <Header user={props.user}/>
            <main>
                {
                    props.user ?
                        <>
                            <Switch>
                                <Route
                                    exact path='/'
                                    render={() => 'Home Page Component Goes Here'}
                                />
                                <Route
                                    exact path='/hwsubmission'
                                    render={() => <HWSubmission />}
                                />
                                <Route
                                    exact path='/dashboard'
                                    render={() => <Dashboard />}
                                />
                                <Route
                                    exact path='/hwdetails'
                                    render={() => <HWDetails />}
                                />
                                <Route
                                    exact path='/hwhistory'
                                    render={() => <HWHistory
                                        user={props.user}
                                    />}
                                />
                                <Route
                                    exact path='/calendar'
                                    render={() => <Calendar />}
                                />
                            </Switch>
                        </>
                        :
                        <Login />
                }
            </main>
            <Footer />
        </div>
    )
}

export default Layout;