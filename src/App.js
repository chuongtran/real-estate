import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import PageHome from './pages/PageHome/PageHome';
import GlobalStyle from 'styles/GlobalStyle';
import PagePropertyDetails from 'pages/PagePropertyDetails/PagePropertyDetails';
import PagePropertiesListing from 'pages/PagePropertiesListing/PagePropertiesListing';
import Footer from 'components/Footer/Footer';
import PageLogin from 'pages/PageAuthenticate/PageLogin';

import 'antd/dist/antd.less';
import PropertyFiltersContainer from 'components/PropertyFilters/PropertyFiltersContainer';

function App() {
  return (
    <div>
      <GlobalStyle />
      <PropertyFiltersContainer.Provider>
        <Switch>
          <Route exact path="/" component={PageHome} />
          <Route exact path="/properties" component={PagePropertiesListing} />
          <Route exact path="/properties/:propertyId" component={PagePropertyDetails} />

          <Route exact path="/login" component={PageLogin} />
        </Switch>
      </PropertyFiltersContainer.Provider>
      <Footer />
    </div>
  );
}

export default App;
