import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';
import theme from './app/theme';
import store from './app/store';
import TodosPage from './containers/TodosPage';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <TodosPage />
        </div>
      </ThemeProvider>
    </Provider>

  );
}

export default App;
