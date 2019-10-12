import React from 'react';
import styled from 'styled-components';

import molecules from '../../assets/img/molecules.svg';

const Main = () => {
	return (
		<MainStyle>
			<LandingStyle>
				<div>
					<h2>Looking for a clinical trial near you?</h2>
					<p>
						We'll help you break through the complex medical <br />
						jargon and find a clinical study that you're eligible to join.
					</p>
					<form>
						<input type='text' placeholder='Medical Condition' />
						<input type='number' placeholder='Postal Code' />
						<button>Find a Trial</button>
					</form>
				</div>
			</LandingStyle>
		</MainStyle>
	);
};

export default Main;

const MainStyle = styled.main`
	width: 100%;

	margin: 0 auto;
`;

const LandingStyle = styled.div`
    height: 90vh;
    background-image: url("${molecules}");

    div {
        max-width: 1000px
        margin: 0 auto;

        h2 {
            font-size: 6rem;
            width: 75%;
            margin-top: 150px;
            margin-left: 75px;
        }
    
        p {
            font-size: 2rem;
            width: 60%;
            margin: 45px 0 45px 75px;
            line-height: 1.5;
        }
    
        form {
            width: 75%;
            display: flex;
            justify-content: space-between;
            margin-left: 75px;
            input {
                border: 1px solid #969797;
                border-radius: 20px;
                padding: 10px 0 10px 15px
                font-size: 1.6rem;
    
                &:first-of-type {
                    width: 60%;
                }
    
                &:last-of-type {
                    width: 18%;
                    text-align: center;
                }
            }
    
            button {
                width: 18%;
                font-size: 1.5rem;
                text-transform: uppercase;
                border-radius: 20px;
                background: #223547;
                color: #FFF;
                transition: all 300ms ease;
    
                &:hover {
                    background: #1ad9c4;
                }
            }
        }
    }

	
`;
