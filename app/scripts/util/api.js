function getCountryData(countryCode, dataType) {
  return $.ajax({
    url: `https://api.worldbank.org/countries/${countryCode}/indicators/${dataType}?per_page=56&format=jsonP`,
    type: 'GET',
    dataType: 'json',
    headers: {'Access-Control-Allow-Origin': 'https://obscure-retreat-5519.herokuapp.com/'},
  });
}

export default getCountryData;

