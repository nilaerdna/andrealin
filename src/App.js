import './scss/styles.scss';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Other from './pages/Other';
import NotFound from './pages/NotFound';
import Classe3 from './pages/Classe3';
import Classe4 from './pages/Classe4';
import Classe5 from './pages/Classe5';

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route exact path="/3" component={Classe3} />
                    <Route exact path="/4" component={Classe4} />
                    <Route exact path="/5" component={Classe5} />
                    <Route exact path="/other" component={Other} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </Router>
            <Footer />
        </>
    );
}

export default App;
