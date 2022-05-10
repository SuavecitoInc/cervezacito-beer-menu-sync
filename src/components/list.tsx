import React from "react";
import styled from "styled-components";
import Listing from "./listing";

const Component = styled.div`
  .list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    li:nth-child(even) {
      background-color: #f3e8e0;
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

interface Props {
  data: Data;
}

const List: React.FC<Props> = ({ data }) => {
  return (
    <Component>
      <h3>
        UPDATED <em>({data.updated.length})</em>
      </h3>
      <ul className="list">
        {data.updated.map((el: Listing) => {
          return <Listing key={el.id} listing={el} />;
        })}
      </ul>

      <h3>
        SKIPPED <em>({data.skipped.length})</em>
      </h3>
      <ul className="list">
        {data.skipped.map((el: Listing) => {
          return <Listing key={el.id} listing={el} />;
        })}
      </ul>

      <h3>
        CREATED <em>({data.created.length})</em>
      </h3>
      <ul className="list">
        {data.created.map((el: Listing) => {
          return <Listing key={el.id} listing={el} />;
        })}
      </ul>
    </Component>
  );
};

export default List;
