import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";
import styled from "styled-components";
import {
  FaAngleLeft,
  FaAngleDoubleLeft,
  FaAngleRight,
  FaAngleDoubleRight,
} from "react-icons/fa";

import { Context } from "../../../context";

const PageSelection = ({ page }) => {
  const [linkArray, setLinkArray] = useState([]);

  const { state } = useContext(Context);
  const { totalResults } = state;

  useEffect(() => {
    const results = Number(totalResults);
    const links = new Array(Math.ceil(results / 12));
    for (let i = 0; i < links.length; i += 1) {
      links[i] = i + 1;
    }
    setLinkArray(links);
  }, [totalResults]);

  return (
    linkArray.length > 10 && (
      <PageLinks>
        {page !== "1" && (
          <>
            <PageLink to="../1">
              <FaAngleDoubleLeft />
            </PageLink>
            <PageLink to={`../${Number(page) - 1}`}>
              <FaAngleLeft />
            </PageLink>
          </>
        )}
        {linkArray.map(el => {
          return (
            <PageLink to={`../${el}`} key={el} page={page} el={el.toString()}>
              {el}
            </PageLink>
          );
        })}
        {linkArray[linkArray.length - 1] &&
        page !== linkArray[linkArray.length - 1].toString() ? (
          <>
            <PageLink to={`../${Number(page) + 1}`}>
              <FaAngleRight />
            </PageLink>
            <PageLink to={`../${linkArray[linkArray.length - 1]}`}>
              <FaAngleDoubleRight />
            </PageLink>
          </>
        ) : null}
      </PageLinks>
    )
  );
};

export default PageSelection;

PageSelection.propTypes = {
  page: PropTypes.string.isRequired,
};

const PageLinks = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 20px auto 30px;
  width: 50%;
`;

const PageLink = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 600;
  color: #223547;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 300ms ease;
  box-shadow: ${({ page, el }) => {
    if (page === undefined && el === undefined) return null;
    return page === el ? `0 1px 2px 1px #b0b0b0;` : null;
  }};

  &:hover {
    box-shadow: 0 1px 2px 1px #b0b0b0;
  }
`;
