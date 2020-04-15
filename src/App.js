import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import TopNavigation from './components/layout/TopNavigation'
import Home from './containers/Home';
import Detail from './containers/Detail';
import SearchResult from './containers/SearchResult'
import About from './flatPages/About'
import Footer from './components/layout/Footer';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#03210E"
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
          <BrowserRouter>
            <React.Fragment>
              <TopNavigation />
              <header className="App-header">
                <div className="container">
                  <Route exact path="/" component={Home} />
                  <Route path="/detail/:movieId" component={Detail} />
                  <Route path="/search" component={SearchResult} />
                  <Route path="/about" component={About} />
                </div>
              </header>
              <Footer />
            </React.Fragment>
          </BrowserRouter>
          
      </div>
    </ThemeProvider>
  );
}

export default App;
