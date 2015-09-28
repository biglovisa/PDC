function getCountryData(countryCode, dataType) {
  return $.ajax({
    url: `http://api.worldbank.org/countries/${countryCode}/indicators/${dataType}?per_page=56&format=jsonP`,
    type: 'GET',
    dataType: 'jsonp',
    jsonp: 'prefix',
    jsonpCallback: 'jquery_'+(new Date).getTime(),
    headers: { 'Access-Control-Allow-Origin': 'https://obscure-retreat-5519.herokuapp.com' }
  });
}

export default getCountryData;
