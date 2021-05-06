import React from "react"
import {useAuth0} from "@auth0/auth0-react"
import styled from "styled-components"
import loginImg from "../images/login-img.svg"
import {RiLoginCircleLine} from "react-icons/ri"

const Login = () => {
  const { loginWithRedirect } = useAuth0();

	return (
		<Wrapper>
			<div className="container">
				<h1>
        <span>G</span>itbiz
      </h1>
				<img src={loginImg} alt="github user" />
			<h2>
        The <span>B</span>iz that gets the <span>G</span>it
      </h2>
				<button className="btn" onClick={loginWithRedirect}><RiLoginCircleLine></RiLoginCircleLine> login / sign up</button>
			</div>
		</Wrapper>
	)
}
const Wrapper = styled.section`
	min-height: 80vh;
	display: grid;
	place-items: center;
	.container {
		width: 90vw;
		max-width: 600px;
		text-align: center;
	}
	img {
		margin-bottom: 5rem;
	}
	h1 {
		margin-bottom: 2.5rem;
		padding: 20px;
		// background-color: rgba(74, 228, 138, 0.267);
		// margin-bottom: 90px;
		// border-color: rgb(19, 12, 3);
		// border-radius: 40px;
	}
	h2 {
		margin-bottom: 2.5rem;
	}
	span {
		color: rgb(220, 50, 20);
	}
`
export default Login
