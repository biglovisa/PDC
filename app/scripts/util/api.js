function getCountryData(countryCode, dataType) {
  return $.ajax({
    url: `http://api.worldbank.org/countries/${countryCode}/${dataType}?per_page=56&format=jsonP`,
    type: 'GET',
    dataType: 'jsonp',
    jsonp: 'prefix',
    jsonpCallback: 'jquery_'+(new Date).getTime(),
    headers: {'Access-Control-Allow-Origin': 'http://localhost:8080'},
  });
}

export default getCountryData;
