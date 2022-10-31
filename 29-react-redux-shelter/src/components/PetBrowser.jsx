import React, { useState } from "react";
// import { useSelector } from 'react-redux'
import { css } from '@emotion/react';
import Pet from "./Pet";
import Filters from './Filters';
import { useFetchPetsQuery } from '../app/services/petsApi';
import RotateLoader from 'react-spinners/RotateLoader';

function PetBrowser() {

  // const pets = useSelector(state => state.pets)

  const [type, setType] = useState("");

  const { data=[], isFetching } = useFetchPetsQuery(type)

  const override = css`
    display: flex;
    margin: 0 auto;
    z-index: 1;
  `

  const petCards = data.map((pet) => (
    <Pet key={pet.id} pet={pet} />
  ));

  return (
    <div>
      <div style={{height: "100px", padding: "50px"}}>
        <RotateLoader color={"#F5A623"} loading={isFetching} size={20} css={override}/>
      </div>
      <Filters onChangeType={setType}/>
      <div className="ui cards">{petCards}</div>
    </div>
  );
}

export default PetBrowser;
