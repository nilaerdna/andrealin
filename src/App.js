import './scss/styles.scss';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import NotFound from './pages/NotFound';

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Homepage />
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </Router>
            <Footer />
        </>
    );
}

export default App;
