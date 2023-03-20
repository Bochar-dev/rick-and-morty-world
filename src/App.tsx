import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import { AppRoute } from './consts/app-route';
import MainPage from './pages/MainPage/MainPage';
import CharactersPage from './pages/CharactersPage/characters-page';
import LocationsPage from './pages/LocationsPage/LocationsPage';
import EpisodesPage from './pages/EpisodesPage/EpisodesPage';

const App = () => {
    return (
        <>
            <Header />

            <Routes>
                <Route
                    path={AppRoute.Main}
                    element={<MainPage />}
                />
                <Route
                    path={AppRoute.Characters}
                    element={<CharactersPage />}
                />
                <Route
                    path={AppRoute.Locations}
                    element={<LocationsPage />}
                />
                <Route
                    path={AppRoute.Episodes}
                    element={<EpisodesPage />}
                />
            </Routes>
        </>
    );
};

export default App;