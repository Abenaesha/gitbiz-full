import React from "react"
import styled from "styled-components"
import {useAuth0} from "@auth0/auth0-react"
import {RiLogoutCircleRLine} from "react-icons/ri"

const Navbar = () => {
	const {isAuthenticated, loginWithRedirect, logout, user} = useAuth0()
	const isUser = isAuthenticated && user

	return (
		<Wrapper>
			{isUser && user.picture && <img src={user.picture} alt={user.name} />}
			{isUser && user.name && (
				<h4>
					Welcome, <strong>{user.name.toUpperCase()}</strong>
				</h4>
			)}
			{isUser ? (
				<button
					onClick={() => {
						logout({returnTo: window.location.origin})
					}}>
					{" "}
					<RiLogoutCircleRLine></RiLogoutCircleRLine> logout
				</button>
			) : (
				<button onClick={loginWithRedirect}>login</button>
			)}
		</Wrapper>
	)
}

const Wrapper = styled.nav`
	padding: 1.5rem;
	margin-bottom: 4rem;
	background: var(--clr-white);
	text-align: center;
	display: grid;
	grid-template-columns: auto auto 100px;
	justify-content: center;
	align-items: center;
	gap: 1.5rem;
	h4 {
		margin-bottom: 0;
		font-weight: 400;
	}
	img {
		width: 35px !important;
		height: 35px;
		border-radius: 50%;
		object-fit: cover;
	}

	button {
		text-transform: uppercase;
		background: var(--clr-primary-5);
		color: var(--clr-primary-10);
		padding: 0.300rem 0.50rem;
		letter-spacing: var(--spacing);
		display: inline-block;
		font-weight: 400;
		transition: var(--transition);
		font-size: 0.855rem;
		border: 2px solid transparent;
		cursor: pointer;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
		border-radius: var(--radius);
		svg {
			font-size: 1.2rem;
		}
	}
	button:hover {
		background: var(--clr-primary-8);
		color: var(--clr-primary-1);
	}
`

export default Navbar
