import React from "react";
import store from "../store";
import { Provider } from "react-redux";
import "../styles/index.scss";

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;
