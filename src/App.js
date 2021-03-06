import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import MealsPage from './pages/MealsPage';
import DrinksPage from './pages/DrinksPage';
import ProfilePage from './pages/ProfilePage';
import ExplorePage from './pages/ExplorePage';
import ExploreMainPage from './pages/ExploreMainPage';
import ExplorePageByArea from './pages/ExplorePageByArea';
import DetailsPage from './pages/DetailsPage';
import ExploreMealIngredientPage from './pages/ExploreMealIngredientPage';
import ExploreDrinkIngredientPage from './pages/ExploreDrinkIngredientPage';
import NotFoundPage from './pages/NotFoundPage';
import DonePage from './pages/DonePage';
import FavoritesPage from './pages/FavoritesPage';

function App() {
  return (
    <center>
      <Switch>
        <Route path="/explorar/comidas/area" component={ExplorePageByArea} />
        <Route path="/explorar/bebidas/area" component={NotFoundPage} />
        <Route path="/explorar/comidas/ingredientes" component={ExploreMealIngredientPage} />
        <Route path="/explorar/bebidas/ingredientes" component={ExploreDrinkIngredientPage} />
        <Route path="/comidas/:id/in-progress" component="" />
        <Route path="/bebidas/:id/in-progress" component="" />
        <Route path="/comidas/:id" component={DetailsPage} />
        <Route path="/bebidas/:id" component={DetailsPage} />
        <Route path="/explorar/comidas" component={ExploreMainPage} />
        <Route path="/explorar/bebidas" component={ExploreMainPage} />
        <Route path="/receitas-feitas" component={DonePage} />
        <Route path="/receitas-favoritas" component={FavoritesPage} />
        <Route path="/comidas" component={MealsPage} />
        <Route path="/bebidas" component={DrinksPage} />
        <Route path="/explorar" component={ExplorePage} />
        <Route path="/perfil" component={ProfilePage} />
        <Route exact path="/" component={LoginPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </center>
  );
}

export default App;
