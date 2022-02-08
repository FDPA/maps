var counties = [
  "Adams", "Allegheny", "Armstrong", "Beaver", "Bedford", "Berks", "Blair", "Bradford", "Bucks", "Butler",
  "Cambria", "Cameron", "Carbon", "Centre", "Chester", "Clarion", "Clearfield", "Clinton", "Columbia",
  "Crawford", "Cumberland", "Dauphin", "Delaware", "Elk", "Erie", "Fayette", "Forest", "Franklin", "Fulton",
  "Greene", "Huntingdon", "Indiana", "Jefferson", "Juniata", "Lackawanna", "Lancaster", "Lawrence", "Lebanon",
  "Lehigh", "Luzerne", "Lycoming", "McKean", "Mercer", "Mifflin", "Monroe", "Montgomery", "Montour",
  "Northampton", "Northumberland", "Perry", "Philadelphia", "Pike", "Potter", "Schuylkill", "Snyder",
  "Somerset", "Sullivan", "Susquehanna", "Tioga", "Union", "Venango", "Warren", "Washington", "Wayne",
  "Westmoreland", "Wyoming", "York"
];
var idByCounty = {
  "Adams":"1DIG-aasBOaeFR1uHrEBUAkUiELm47Ahb",
  "Allegheny":"1ZGdNsEhYfIEd_bFd1GiaSHdjxp43KNPl",
  "Armstrong":"1EfLNqUp9MGQCBvx4j0JLyux7yq3xmyrG",
  "Beaver":"1n_1PgK29Hl7Ro9OgWB4uIcUiAkl10orr",
  "Bedford":"1Djmx024RW58vPdKsJKkZgx1lUjjByj6J",
  "Berks":"1k1cb5ePGjPv0ntC3dp-zyq7TA6MAxKDW",
  "Blair":"1dhlfIqfJYasxzyL1tOTgN750S_1Kmr92",
  "Bradford":"1IfaFREHamQDOxa0lpjhilfyVeMdTJ0OM",
  "Bucks":"1KOeeLsWbs3nKplMG31c1lhjzqboJVQaP",
  "Butler":"1Xeno62bCHuIeETdCksN-kha_l94WQh6D",
  "Cambria":"1t7NAwGOzEybTZPpkH5cyC2qEvZDCV4OQ",
  "Cameron":"1zNg-E8kpLkapmgI1gzqEveDvJMR_aE4F",
  "Carbon":"18AobtHiDUKt1tkydsLhl8htDdxGns-wj",
  "Centre":"16As2gelYMa9B1pwl2StJRx8AUNU3WbtQ",
  "Chester":"1ISk3mPHzwBW3b-RxfTTFvhJ44XmcXher",
  "Clarion":"1afudOMKeQEX7wGy6b5-Pb-YyaxovFfQd",
  "Clearfield":"12HV9HERUyAgu9yNPjAxLBhbjTgi3Ii8S",
  "Clinton":"1iwCo4AIf3-hoKDb8p09gYBSfXKy7UXMY",
  "Columbia":"1GwmWEHr1h4uh-CZhSnMxokmfDOYf3ftq",
  "Crawford":"18RLVUgw9XfPf3uu4AkQNNJTuNvGEGYE5",
  "Cumberland":"1d5ka8p7d_AvmmJd7UnzfxnWuwUx1Jgd0",
  "Dauphin":"1bqsHdxTZA8qf31eIVgjAG6coz3GNfPqa",
  "Delaware":"10i5LsstvUW5OL19-uVykpKEsN9LB0aL6",
  "Elk":"1AmPTzEzMylx-LL0qXpPWotJlosezjot5",
  "Erie":"1Xu341o75hNjGxkLt84LZZldxjASBXyVY",
  "Fayette":"1liI99UWKpl9tbQ-sLIhTw9p5w5gd9EJ1",
  "Forest":"1tHqBqLTJV58FvZ7zEsjgzORq_1_dcoCa",
  "Franklin":"1OOpIHoQ9FQ70Jis7KrYdOXioEuMX5VLK",
  "Fulton":"154lu0Yp8iewvGhdCVwmgbGm0vIfMkw_g",
  "Greene":"1OBTbEoVdjIgvdwlRv3MnACnW7F-HBjet",
  "Huntingdon":"1M6L4vvMA2bGO85MmvIDITzwjTseW1oMd",
  "Indiana":"1VW7IucC-YKEvH90VEmq6T3WALOw4c-aU",
  "Jefferson":"1A95IK6y5JKgGFgEiwUJ8hoF7wb9xxB1p",
  "Juniata":"1Mh8Y361YvXvMKmne9X4do-3OtB9pML1B",
  "Lackawanna":"1rGWParnzdwcNEXLg8aj7lgPuCbqLrBGR",
  "Lancaster":"1nym5G6rUJLERUQIHUV7WUQZYNU2f6Ka2",
  "Lawrence":"1Fk2RRMTaJyZxqg7VQr8YhWjHfsFg2TFX",
  "Lebanon":"1PKWkQeswpVnIeL8BbVF5y-2wuYwAybcT",
  "Lehigh":"1zJbfiwu0kBCL2XPIMmLAXPi7NYmqE0mw",
  "Luzerne":"1EoWGgfPBQF7JVJl-bsuAnH9-dYNULMwi",
  "Lycoming":"1OMq7VhGDDK0dKR_-JhpmifFAx58WUnJh",
  "McKean":"1l530b5q4ovxIrmSNuUvWxqX7EKa3GqcI",
  "Mercer":"1-zGWAOA-qFn4HfBgpUIuBpnPvmSmuvO4",
  "Mifflin":"1S_VAjqECP8unklFTTlB6962phPANExa3",
  "Monroe":"1RYC9BkhCl_uFXWX98QIA603x1jMbs_e_",
  "Montgomery":"1c34fVnOtevVt-aK1IQUcQ96gz8bYBXce",
  "Montour":"136DZvIVI__R5LBMmsjEX-p2AjLQ-i8Y9",
  "Northampton":"1bTGVjyP_Z_uYcB9HnHZWL9aii8ReT6Zl",
  "Northumberland":"17h5Xpjcz29mP4HD7u996YsMsiORgOhh6",
  "Perry":"1cz455S4qWH9QFboufn9AaPEJ-m5R18jZ",
  "Philadelphia":"1jkXTDCdxBKLh2o0cQYJlX7G-3rbn50c1",
  "Pike":"1Cp6LAQ9TYatG4srPwM-67f2AwflfdPwJ",
  "Potter":"1_vIZFcsBewppHyItCsTWwGJvjorPhUBm",
  "Schuylkill":"1pgtmLn0e6QdvlGzoG89Y7Pn2e2zCVWGL",
  "Snyder":"1EjcE9Anm-DRNqMT-8qosqIgbvB9jKziR",
  "Somerset":"17f0-d55glnfTxAYLO8u-sDjcu5aW2aD1",
  "Sullivan":"1p9M4Km2p14-bni5uTCtQw6b54XoDuG6i",
  "Susquehanna":"1B9dbY-XkTYxcSwIvX5Vg7KcxZRR665OV",
  "Tioga":"1L1vflf4ohywlowFmwWXh1m0tWybliTxM",
  "Union":"1bWXp-ZTveS7Tb_uzu8a8jh0cDHtCPC5b",
  "Venango":"1A97UsAlrmi0HqSCzlszbC7hvGq1bobga",
  "Warren":"1vlP7wEaZ5QhzcQ9xD9NyN_eRJlmLdlyv",
  "Washington":"1pWTMMM1Js5yZGqPHfQHPLP9YYiyeWYka",
  "Wayne":"1ESJgFC6ki537ECOz9K9ADq_RO9e766zU",
  "Westmoreland":"1gai7VHMlN4ckEsz5NX5XrkpTTT2PTouE",
  "Wyoming":"1AFjJU3S1UVvxaJC4hy9iXQRn2RbYl-0a",
  "York":"1BJNtG-7IMxdHMqJAx3Ve59Iew9mLWun5"
};


var baseUrl = "https://fdpa.github.io/maps/images";

var dropdown;
var chamberRadios;
var sourceRadios;
var interactiveMapLink;
var mapImg;

function initialize() {
  document.getElementById('controlsAndMap').innerHTML =
    "<div style=\"background: #00645e; float: left; width: 100%; margin-bottom: 20px; padding: 0 10px 10px 10px\">" +
        "<span style=\"float:left; width: auto; padding: 0 10px 0 5px;\">" +
          "<label style=\"color: #fff;\">County</label>" +
          "<select id=\"countyDropdown\" onchange=\"displayMap()\"></select>" +
        "</span>" +
        "<div id=\"chamberRadioDiv\" style=\"float: left; padding: 0 5px 0 5px; min-width: 25%; margin: 0 10px 0 10px;\"></div>" +
        "<div id=\"sourceRadioDiv\" style=\"float: left; padding: 0 5px 0 5px; min-width: 25%; margin: 0 10px 0 10px;\"></div>" +
    "</div>" +
    "<div><img id=\"mapImg\" /></div>" +
    "<div id=\"interactiveMapLink\"></div>";

  dropdown = document.getElementById('countyDropdown');
  for (var i = 0; i < counties.length; i++) {
    var opt = document.createElement("option");
    opt.textContent = counties[i];
    opt.value = counties[i].toLowerCase();
    dropdown.options.add(opt);
  }

  document.getElementById('chamberRadioDiv').innerHTML =
    "<label style=\"color: white;\"> Chamber </label>" +
    "<span style=\"float: left; width: 100%; background: #e9e9ed; padding: 0 5px 0 10px;\">" +
    "<label style=\"font-weight: normal;\"><input type=\"radio\" name=\"chamberRadio\" value=\"pa_house\" onchange=\"displayMap()\" checked=\"checked\" />House</label>" +
    "<label style=\"font-weight: normal;\"><input type=\"radio\" name=\"chamberRadio\" value=\"pa_senate\" onchange=\"displayMap()\" />Senate</label>" +
//    "<label><input type=\"radio\" name=\"chamberRadio\" value=\"us_congress\" onchange=\"displayMap()\" />Congress</label>" +
    "</span>";
  chamberRadios = document.getElementsByName('chamberRadio');

  document.getElementById('sourceRadioDiv').innerHTML =
    "<label style=\"color: white;\"> Map Source </label>" +
    "<span style=\"float: left; width: 100%; background: #e9e9ed; padding: 0 5px 0 10px;\">" +
    "<label style=\"font-weight: normal;\"><input type=\"radio\" name=\"sourceRadio\" value=\"current\" onchange=\"displayMap()\" checked=\"checked\" />Current</label>" +
    "<label style=\"font-weight: normal;\"><input type=\"radio\" name=\"sourceRadio\" value=\"fdpa\" onchange=\"displayMap()\" />FDPA</label>" +
    "<label style=\"font-weight: normal;\"><input type=\"radio\" name=\"sourceRadio\" value=\"lrc\" onchange=\"displayMap()\" />LRC Preliminary</label>" +
    "<label style=\"font-weight: normal;\"><input type=\"radio\" name=\"sourceRadio\" value=\"lrc_final\" onchange=\"displayMap()\" />LRC Final</label>" +
    "</span>";
  sourceRadios = document.getElementsByName('sourceRadio');

  interactiveMapLink = document.getElementById('interactiveMapLink');

  mapImg = document.getElementById('mapImg');
  mapImg.style.width = "500px";
  mapImg.style.height = "500px";
  
  displayMap();
}

function displayMap() {
  var county = dropdown.value;
  var prettyCounty = county[0].toUpperCase() + county.substring(1);
  interactiveMapLink.innerHTML = "If you'd like to see more detail, try our <a href=\"https://www.google.com/maps/d/edit?mid=" + idByCounty[prettyCounty] + "\" target=\"_blank\">interactive map</a> for " + prettyCounty + " County.";

  var chamber = getRadioValue(chamberRadios);
  var source = getRadioValue(sourceRadios);
  var sourceString = "";
  if (source !== "current") {
    sourceString = source + "_";
  }
  mapImg.src = baseUrl + "/" + county + "_" + sourceString + chamber + ".jpg";
  return false;
}

function getRadioValue(radioElement) {
  for (i=0; i<radioElement.length; i++) {
    if (radioElement[i].checked) {
      return radioElement[i].value;
    }
  }
  return null;
}
