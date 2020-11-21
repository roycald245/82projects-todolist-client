import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import theme from './app/theme';
import TodosPage from './containers/TodosPage';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <TodosPage />
      </div>
    </ThemeProvider>

  );
}

export default App;
