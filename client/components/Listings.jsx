import React from 'react';

import data from '../data'

import Places from './Places'





export default function Listings({city, guest, startDate, endDate}) {

  // Filter function goes here

  let results = [];

  React.useEffect(() => {
    results = data.filter(space => space.city === city);
    console.log(results);
  });

  return (
    <>
      {results.map(content => <Places content={content} key={content.city}/>)}
    </>
  )
}