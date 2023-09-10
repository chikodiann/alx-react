import React from 'react';
import { createRoot } from "react-dom/client";
import App from './App';
import Notifications from './Notifications';
import reportWebVitals from "./reportWebVitals";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
	<React.StrictMode>
		<App />
    <Notifications />
	</React.StrictMode>
);

reportWebVitals();