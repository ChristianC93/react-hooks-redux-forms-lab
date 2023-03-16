import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BandInput from "./BandInput";
import { bandAdded } from "./bandsSlice";

function BandsContainer() {
  const bands = useSelector((state) => state.bands.entities)
  const dispatch = useDispatch();

  const bandList = bands.map((band, index) => <li key={index}>{band}</li>)

  const onBandSubmit = (band) => {
    dispatch(bandAdded(band))
  }

  return ( 
    <div>
     <BandInput onBandSubmit={ onBandSubmit } />
     <ul>{ bandList }</ul>
    </div>
  )
}

export default BandsContainer;
