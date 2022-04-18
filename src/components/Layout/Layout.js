// Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import { Route, Switch } from 'react-router-dom';
import HWSubmission from '../../pages/HWSubmission';
import Dashboard from '../../pages/Dashboard';
import HWDetails from '../../pages/HWDetails';
import HWHistory from '../../pages/HWHistory';
import Calendar from '../../pages/Calendar';
import HomePage from '../../pages/HomePage';
import Login from '../Login/Login';

// Styles

const Layout = props => {
    // console.log(props.homework, 'is homework in layout')
    return (
        <div>
            <Header user={props.user} />
            <main>
                {
                    props.user ?
                        <>
                            <Switch>
                                <Route
                                    exact path='/'
                                    render={() => <HomePage props={props} />}
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
                                        homework={props.homework}
                                    />}
                                />
                                <Route
                                    exact path='/calendar'
                                    render={() => <Calendar />}
                                />
                            </Switch>
                        </>
                        :
                        <Login students={props.students} />
                }
            </main>
            <Footer />
        </div>
    )
}

export default Layout;