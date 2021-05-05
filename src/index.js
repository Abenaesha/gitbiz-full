import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import {GithubProvider} from "./context/context"
import {Auth0Provider} from "@auth0/auth0-react"

// abenaesha.eu.auth0.com
// M3hnE5vMtqKVc4twvSSmxwolQT1AN8ox

ReactDOM.render(
	<React.StrictMode>
		<Auth0Provider
			domain="abenaesha.eu.auth0.com"
			clientId="M3hnE5vMtqKVc4twvSSmxwolQT1AN8ox"
      redirectUri={window.location.origin}
      cacheLocation='localstorage'
      >
			<GithubProvider>
				<App />
			</GithubProvider>
		</Auth0Provider>
	</React.StrictMode>,
	document.getElementById("root")
)