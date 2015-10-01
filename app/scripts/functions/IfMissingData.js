import React from 'react';

export default function(countries) {
  var missing = [];

  for (var i = 0; i < countries.length; i++ ) {
    if (countries[i].values.length === 0) {
      missing.push(countries[i].key);
    }
  }

  return missing.length === 0 ?  "" : <h6 className='missing details'>Missing data for: {missing.join(", ")}</h6>;
}
