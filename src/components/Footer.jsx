import React from "react";
import { FaTwitter, FaFacebookF } from "react-icons/fa";
import styled from "styled-components";

import logo from "../assets/img/logo.png";

const Footer = () => {
  return (
    <FooterStyle>
      <div>
        <a href="/">
          <span className="hidden">&nbsp;</span>
          <img src={logo} alt="Studybrook logo" />
        </a>
        <nav>
          <a href="#terms">Terms</a>
          <a href="#privacy">Privacy</a>
          <a href="#contact">Contact Us</a>
          <a href="#twitter">
            <span className="hidden">Twitter</span>
            <FaTwitter />
          </a>
          <a href="#facebook">
            <span className="hidden">Facebook</span>
            <FaFacebookF />
          </a>
        </nav>
      </div>
    </FooterStyle>
  );
};

export default Footer;

const FooterStyle = styled.footer`
	border-top: 1px solid #e0e0e0;
	width: 100%;
	div {
		display: flex;
		width: 95%;
		max-width: 1500px
		margin: 0 auto;
		justify-content: space-between;
		align-items: center;
		padding: 20px 0;

		nav {
			width: 35%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 1.4rem;

			a {
				color: #3f3f3f;
				text-decoration: none;
				transition: all 300ms ease;

				&:hover {
					color: #1ad9c4;
				}

				svg {
					font-size: 1.8rem;
					color: #1ad9c4;
					transition: all 300ms ease;

					&:hover {
						color: #3f3f3f;
					}
				}
			}
		}
	}
`;
