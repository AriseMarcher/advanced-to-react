import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from '@emotion/react'

const theme = {
	colors: {
		primary: 'tomato'
	}
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<ThemeProvider theme={theme}>
		<App />
	</ThemeProvider>
);

