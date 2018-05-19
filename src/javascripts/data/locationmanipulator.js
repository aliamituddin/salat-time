function transformIPLocationResponse(response) {
  const result = {};

  result.country = response.country_name;
  result.city = response.city;
  result.timezone = response.time_zone;
  result.latitude = parseFloat(response.latitude);
  result.longitude = parseFloat(response.longitude);

  return result;
}

function transformReverseGeolocationResponse(response) {
  const result = {};

  result.country = response.address.country;

  if (response.address.state_district) {
    result.city = response.address.state_district;
  } else {
    result.city = response.address.city;
  }

  result.latitude = parseFloat(response.lat);
  result.longitude = parseFloat(response.lon);

  return result;
}

const manipulator = {
  transformIPLocationResponse,
  transformReverseGeolocationResponse,
};

export default manipulator;