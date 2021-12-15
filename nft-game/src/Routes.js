import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import Profile from './pages/Profile';
import Exchange from './pages/Exchange';
import CardGalinha from './components/CardGalinha';
import MarketPlace from './pages/MarketPlace';
import NftsWallet from './pages/NftsWallet';
import PlayGame from './pages/Game/PlayGame';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="/exchange">
                    <Exchange />
                </Route>
                <Route path="/buyNft">
                    <CardGalinha />
                </Route>
                <Route path="/marketPlace">
                    <MarketPlace />
                </Route>
                <Route path="/nftsWallet">
                    <NftsWallet />
                </Route>
                <Route path="/playGame">
                    <PlayGame />
                </Route>


            </Switch>
        </BrowserRouter>
    )
}

export default Routes;