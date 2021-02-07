import './scss/styles.scss';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Other from './pages/Other';
import NotFound from './pages/NotFound';
import Classe3 from './pages/Classe3';
import Classe4 from './pages/Classe4';
import Classe5 from './pages/Classe5';
import ProjectPage from './pages/ProjectPage';
function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/3/:projectId">
                        <ProjectPage />
                    </Route>
                    <Route path="/3">
                        <Classe3 />
                    </Route>
                    <Route exact path="/4/:projectId">
                        <ProjectPage />
                    </Route>
                    <Route path="/4">
                        <Classe4 />
                    </Route>
                    <Route exact path="/5/:projectId">
                        <ProjectPage />
                    </Route>
                    <Route path="/5">
                        <Classe5 />
                    </Route>
                    <Route exact path="/other">
                        <Other />
                    </Route>
                    <Route path="/404">
                        <NotFound />
                    </Route>
                    <Route exact path="/">
                        <Homepage />
                    </Route>
                    <Redirect to="/404" />
                </Switch>
                <Footer />
            </Router>
        </>
    );
}

export default App;
