import React from "react";
import styled from "styled-components";

const Component = styled.li`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin: 1rem 0;
  .title {
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    background-color: #a63f28;
    color: #ffffff;
    padding: 10px 8px;
    text-transform: uppercase;
    font-weight: bold;
  }
  .row {
    padding: 10px 8px;
    break-word: break-word;
    .prop-key {
      color: #a63f28;
    }
  }
`;

interface Props {
  listing: {
    id: string;
    title: string;
    published: boolean;
    untappdId: number;
  };
}

const Listing: React.FC<Props> = ({ listing }) => {
  return (
    <Component>
      <div className="title">{listing.title}</div>
      <div className="row">
        <span className="prop-key">id:</span> {listing.id}
      </div>
      <div className="row">
        <span className="prop-key">published:</span>{" "}
        {listing.published.toString()}
      </div>
      <div className="row">
        <span className="prop-key">untappdId:</span> {listing.untappdId}
      </div>
    </Component>
  );
};

export default Listing;
