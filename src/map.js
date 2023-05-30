// 위도, 경도 뽑아오기
function success({ coords, timestamp }) {
  const latitude = coords.latitude; // 위도
  const longitude = coords.longitude; // 경도

  alert(`위도: ${latitude}, 경도: ${longitude}, 위치 반환 시간: ${timestamp}`);
  //location.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
}

function getUserLocation() {
  if (!navigator.geolocation) {
    throw "위치 정보가 지원되지 않습니다.";
  }
  navigator.geolocation.getCurrentPosition(success);
}

getUserLocation();

// 카카오 지오코더
var geocoder = new kakao.maps.services.Geocoder();

var coord = new kakao.maps.LatLng(37.56496830314491, 126.93990862062978);
var callback = function (result, status) {
  if (status === kakao.maps.services.Status.OK) {
    console.log(
      "그런 너를 마주칠까 " + result[0].address.address_name + "을 못가"
    );
  }
};

geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
