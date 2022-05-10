import React, { useState } from "react";
import styled from "styled-components";
import List from "./list";
import Loader from "./loader";
import { LAMBDA_ENDPOINT } from "../config";
import logo from "../assets/logo.png";

const Component = styled.div`
  .header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: auto;
      height: 150px;
      margin: 1rem;
    }
  }
  button {
    background-color: #a63f28;
    color: #fff;
    padding: 10px 18px;
    text-decoration: none;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 2px;
    text-transform: uppercase;
    &:hover {
      background-color: #7c2f24;
    }
    &:disabled {
      opacity: 0.5;
    }
  }
`;

interface Data {
  updated: Listing[];
  skipped: Listing[];
  created: Listing[];
}

interface Listing {
  id: string;
  title: string;
  published: boolean;
  untappdId: number;
}

const Main: React.FC = () => {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [data, setData] = useState<Data>();

  const handleFetch = async () => {
    try {
      setIsFetching(true);
      const endpoint = LAMBDA_ENDPOINT;
      const response = await fetch(endpoint, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = await response.json();
      if (response.ok) {
        console.log("DATA", json);
        setData(json);
      }
      setIsFetching(false);
    } catch (err: any) {
      console.log("ERROR", err.message);
      setIsFetching(false);
    }
  };

  return (
    <Component>
      <div className="header">
        <img src={logo} alt="Cerveza Cito" />
        <button type="button" onClick={handleFetch} disabled={isFetching}>
          Sync Beer Menu
        </button>
      </div>
      {isFetching && <Loader />}
      {data && <List data={data} />}
    </Component>
  );
};

export default Main;
