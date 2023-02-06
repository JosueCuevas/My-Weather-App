function helpGeolocation() {
  return new Promise((resolve, reject) => {
    const options = {
      enableHighAccuracy: true,
      timeout: 150000,
      maximumAge: 0,
    };
    function success(pos) {
      const crd = pos.coords;
      resolve({ lat: crd.latitude, lon: crd.longitude });
    }
    function error(err) {
      reject(err);
    }
    navigator.geolocation.getCurrentPosition(success, error, options);
  });
}

export default helpGeolocation;
