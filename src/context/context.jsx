import React, {useState, useEffect} from "react"
import mockUser from "./mockData.js/mockUser"
import mockRepos from "./mockData.js/mockRepos"
import mockFollowers from "./mockData.js/mockFollowers"
import axios from "axios"

const baseUrl = "https://api.github.com"

const GithubContext = React.createContext()

const GithubProvider = ({children}) => {
	const [githubUser, setGithubUser] = useState(mockUser)
	const [repos, setRepos] = useState(mockRepos)
	const [followers, setFollowers] = useState(mockFollowers)

	// request loading
	const [requests, setRequests] = useState(0)
	const [isLoading, setIsLoading] = useState(false)
  
	// error 
	const [ error, setError ] = useState( { show: false, msg: '' } )

	const searchGithubUser = async ( user ) => {
		// remove error msg once you input the correct username
		toggleError()
		setIsLoading(true)
		const response = await axios( `${ baseUrl }/users/${ user }` )
			.catch( err => console.log( err ) )
		console.log(response);
		if ( response ) {
			setGithubUser( response.data )
			// more logic here
		} else {
			toggleError(true, 'there is no user with that username')
		}
		checkRequests();
		setIsLoading(false)
	}
	
	// check rate
	const checkRequests = () => {
		axios(`${baseUrl}/rate_limit`)
			.then(({data}) => {
				let {
					rate: { remaining },
				} = data;
				setRequests( remaining )
				if ( remaining === 0 ) {
					toggleError(true, 'sorry you have exceeded your hourly rate limit!')
				}
			})
			.catch((err) => console.log(err))
	}

	const toggleError = ( show = false, msg ) => {
		setError({show, msg})
	}

	// error
	useEffect(checkRequests, [])

	return (
		<GithubContext.Provider value={{githubUser, repos, followers, requests, error, searchGithubUser, isLoading}}>
			{children}
		</GithubContext.Provider>
	)
}

export {GithubProvider, GithubContext}
