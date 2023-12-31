const regions = {
  "Seoul" : {
    "name" : "서울", 
    "lat" : 37.56667,
    "lon" : 126.97806
  },
  Busan : {
    "name" : "부산",
    "lat" : 35.17944,
    "lon" : 129.07556
  },
  Gyeonggi : {
    "name" : "경기",
    "lat" : 35.17944,
    "lon" : 129.07556
  },
  Incheon : {
    "name" : "인천",
    "lat" : 37.45639,
    "lon" : 126.70528
  },
  Daegu : {
    "name" : "대구",
    "lat" : 35.87222,
    "lon" : 128.60250
  },
  Daejeon : {
    "name" : "대전",
    "lat" : 36.35111,
    "lon" : 127.38500
  },
  Gwangju : {
    "name" : "광주",
    "lat" : 35.15972,
    "lon" : 126.85306
  },
  Ulsan : {
    "name" : "울산",
    "lat" : 35.53889,
    "lon" : 129.31667
  },
  Sejong : {
    "name" : "세종",
    "lat" : 36.48750,
    "lon" : 127.28167
  },
  Jeju : {
    "name" : "제주",
    "lat" : 33.50000,
    "lon" : 126.51667
  },
  Gangwon : {
    "name" : "강원",
    "lat" : 37.555837,
    "lon" : 128.209315
  },
  SouthChungcheong : {
    "name" : "충남",
    "lat" : 36.557229,
    "lon" : 126.779757
  },
  NorthChungcheong : {
    "name" : "충북",
    "lat" : 36.628503,
    "lon" : 126.779757
  },
  "NorthGyeongsang" : {
    "name" : "경북",
    "lat" : 36.248647,
    "lon" : 128.664734,
  },
  "SouthGyeongsang" : {
    "name" : "경남",
    "lat" : 35.259787,
    "lon" : 128.664734
  },
  "NorthJeolla" : {
    "name" : "전북",
    "lat" : 35.716705,
    "lon" : 127.144185
  },
  "SouthJeolla" : {
    "name" : "전남",
    "lat" : 34.819400,
    "lon" : 126.893113
  }
}
const weather = {
  "Thunderstorm" : {
    "title" : "비구름",
    "id" : {
      "200" : "오늘은 약한 비를 동반한 뇌우입니다.",
      "201" : "오늘은 비를 동반한 뇌우입니다.",
      "202" : "오늘은 폭우를 동반한 천둥번개입니다.",
      "210" : "오늘은 약한 뇌우입니다.",
      "211" : "오늘은 뇌우입니다.",
      "212" : "오늘은 심한 뇌우입니다.",
      "221" : "오늘은 들쭉날쭉한 뇌우입니다.",
      "230" : "오늘은 약한 이슬비가 내리는 뇌우입니다.",
      "231" : "오늘은 이슬비를 동반한 뇌우입니다.",
      "232" : "오늘은 강한 비를 동반한 뇌우입니다."
    }
  },
  "Drizzle" : {
    "title" : "이슬비",
    "id" : {
      "300" : "오늘은 약한 이슬입니다.",
      "301" : "오늘은 이슬입니다.",
      "302" : "오늘은 강한 이슬입니다.",
      "310" : "오늘은 약한 이슬비입니다.",
      "311" : "오늘은 이슬비입니다.",
      "312" : "오늘은 매우 강한 이슬비입니다.",
      "313" : "오늘은 소나기와 이슬비입니다.",
      "314" : "오늘은 강한 소나기와 이슬비입니다.",
      "321" : "오늘은 소나기성 이슬비입니다.",
    }
  },
  "Rain" : {
    "title" : "비",
    "id" : {
      "500" : "오늘 날씨는 약한 비입니다.",
      "501" : "오늘 날씨는 비입니다.",
      "502" : "오늘 날씨는 강한 비입니다.",
      "503" : "오늘 날씨는 폭우입니다.",
      "504" : "오늘 날씨는 강한 폭우입니다.",
      "511" : "오늘 날씨는 우빙입니다.",
      "520" : "오늘 날씨는 약한 소나기입니다.",
      "521" : "오늘 날씨는 소나기입니다.",
      "522" : "오늘 날씨는 매우 강한 소나기입니다.",
      "531" : "오늘 날씨는 들쭉날쭉한 소나기입니다.",
    }
  },
  "Snow" : {
    "title" : "눈",
    "id" : {
      "600" : "오늘은 약한 눈입니다.",
      "601" : "오늘은 눈입니다.",
      "602" : "오늘은 강한 눈입니다.",
      "611" : "오늘은 진눈깨비입니다.",
      "612" : "오늘은 약한 소나기성 진눈깨비입니다.",
      "613" : "오늘은 소나기성 진눈깨비입니다.",
      "615" : "오늘은 약한 눈과 비입니다.",
      "616" : "오늘은 눈과 비입니다.",
      "620" : "오늘은 약한 소나기눈입니다.",
      "621" : "오늘은 소나기눈입니다.",
      "622" : "오늘은 강한 소나기눈입니다.",
    }
  },
  "Mist" : {
    "title" : "엷은 안개",
    "id" : {
      "701" : "대기 중에 엷은 안개가 있습니다."
    }
  },
  "Smoke" : {
    "title" : "안개",
    "id" : {
      "711" : "대기 중에 안개가 있습니다."
    }
  },
  "Haze" : {
    "title" : "연무",
    "id" :  {
      "721" : "대기 중에 연무가 있습니다."
    }
  },
  "Dust" : {
    "title" : "먼지",
    "id" : {
      "731" : "대기 중에 먼지가 있습니다.",
    },
  },
  "Fog" : {
    "title" : "짙은 안개",
    "id" : {
      "741" : "대기 중에 짙은 안개가 있습니다.",
    }
  },
  "Sand" : {
    "title" : "모래 폭풍",
    "id" : {
      "751" : "대기 중에 모래 폭풍가 있습니다.",
    }
  },
  "Dust" : {
    "title" : "먼지",
    "id" : {
      "761" : "대기 중에 먼지가 있습니다.",
    }
  },
  "Ash" : {
    "title" : "화산재",
    "id" : {
      "762" : "대기 중에 화산재가 있습니다.",
    }
  },
  "Squall" : {
    "title" : "돌풍",
    "id" : {
      "771" : "대기 중에 돌풍가 있습니다.",
    }
  },
  "Tornado" : {
    "title" : "돌풍",
    "id" : {
      "772" : "대기 중에 폭풍가 있습니다.",
    }
  },
  "Clear" : {
    "title" : "맑음",
    "id" : {
      "800" : "오늘 하늘은 맑습니다."
    }
  },
  "Clouds" : {
    "title" : "흐림",
    "id" : {
      "801" : "날씨가 아주 약간 흐립니다.",
      "802" : "날씨가 약간 흐립니다.",
      "803" : "날씨가 흐립니다.",
      "804" : "매우 많이 흐립니다.",
    }
  }
}
// export를 사용하면 에러가 발생한다.
module.exports.regions = regions
module.exports.weather = weather
