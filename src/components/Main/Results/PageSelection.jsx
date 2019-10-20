import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";

const PageSelection = () => {
  const [linkArray, setLinkArray] = useState([]);

  useEffect(() => {
    const results = 120;
    const links = new Array(Math.ceil(results / 12));
    for (let i = 0; i < links.length; i += 1) {
      links[i] = i + 1;
    }
    setLinkArray(links);
  }, []);

  return (
    <nav>
      {linkArray.map(el => {
        return (
          <Link to={`/${el}`} key={el}>
            {el}
          </Link>
        );
      })}
    </nav>
  );
};

export default PageSelection;
