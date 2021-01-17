import './scss/styles.scss';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';

function App() {
    return (
        <>
            <Navbar />
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Homepage />
                    </Route>
                </Switch>
            </Router>
            <Footer />
        </>
    );
}

export default App;
