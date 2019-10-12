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
    background-size: cover;

    div {
        max-width: 1500px
        margin: 0 auto;

        h2 {
            font-size: 6rem;
            width: 75%;
            max-width: 660px
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
            width: 55%;
            min-width: 500px;
            display: flex;
            justify-content: space-between;
            margin-left: 75px;

            @media(max-width: 1150px) {
                flex-wrap: wrap;
            }

            input {
                border: 1px solid #969797;
                border-radius: 20px;
                padding: 10px 0 10px 15px
                font-size: 1.6rem;
    
                &:first-of-type {
                    width: 60%;

                    @media(max-width: 1150px) {
                        width: 75%;
                    }
                }
    
                &:last-of-type {
                    width: 18%;
                    min-width: 120px;
                }

                &[type=number]::-webkit-inner-spin-button, 
                &[type=number]::-webkit-outer-spin-button { 
                -webkit-appearance: none; 
                margin: 0; 
                }
            }
    
            button {
                width: 18%;
                min-width: 120px;
                font-size: 1.5rem;
                text-transform: uppercase;
                border-radius: 20px;
                background: #223547;
                padding: 10px;
                color: #FFF;
                transition: all 300ms ease;
    
                &:hover {
                    background: #1ad9c4;
                }

                @media(max-width: 1150px) {
                    margin-top: 20px;
                }
            }
        }
    }

	
`;
