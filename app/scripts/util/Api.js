function getCountryData(countryCode, dataType) {
  return $.ajax({
    url: `http://api.worldbank.org/countries/${countryCode}/indicators/${dataType}?format=jsonP`,
    type: 'GET',
    dataType: 'jsonp',
    jsonp: 'prefix',
    jsonpCallback: 'jquery_'+(new Date).getTime(),
    headers: { 'Access-Control-Allow-Origin': 'https://public-data-compiler.herokuapp.com' }
  });
}

export default getCountryData;
