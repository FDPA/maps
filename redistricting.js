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
  "Adams": "14RnRCTJtofBq-9WwwZ9w7BqZqmLcK4ZE",
  "Allegheny": "1YyG76391-SHZ5wSNyfKtc0QAQPNP1UGP",
  "Armstrong": "1X5EMiuBvKQYZcRnI11rP69XfYqO0fRjQ",
  "Beaver": "18pci89eIopMBO0E2iujIVnp80C2sp6zg",
  "Bedford": "1OAyDNHlNLVj_-pJzMHnekTyTH2eM5qNH",
  "Berks": "1O8_f5cGBUNVGH0ofdBPipRe1IgIsexIj",
  "Blair": "1cHZbJ4HJmwIoglAI4KSeGGm-w4UCvmwp",
  "Bradford": "1zWtvAnoPzl3VVN4XwTNWluZKqY0N_557",
  "Bucks": "1LBOoQzqw66P0d5q8C2425AJtOOaNcOCL",
  "Butler": "1ITAbZ26ahNEmlhr4au23UCJITtvFRnki",
  "Cambria": "13bGTLlkL73AKcGvqEjdZwVGSSpRCJFBO",
  "Cameron": "13H97c9iiODQV8-URmSUtJSkYV5azityM",
  "Carbon": "1byc0khibEL3lZuPit1ZPnLAxNrT_3zwy",
  "Centre": "1ypOYqFW4TIloK9cGHl15qxir4nUq8VmE",
  "Chester": "1yWEs4UUfO5a2Ux22ON6tY-nXg9ZA8H8A",
  "Clarion": "1f7vl-gnmyIl_flCb98lna3VAEtrRD-Px",
  "Clearfield": "1786MynbTkpKko4jEc7QomyO4c3APxn33",
  "Clinton": "1qBvvf6zSinQTHeozIzbCE4-rk1d2gOpc",
  "Columbia": "1RY8NMpbm8M8R5lszH7hhlkj7hoTVtVNl",
  "Crawford": "12PvI6qROWwYPeoU8jDaPTmP5tpxQWffy",
  "Cumberland": "1myvUkRtLlxQjtcB6jU6gwTOYyFXRwlTj",
  "Dauphin": "10HPU1FREc_wq_9-oarMarcmiol99Evp_",
  "Delaware": "1prIli3M1boLjh3fXGMxmQwEe0SFu1yBM",
  "Elk": "1PEMu-jd6Lmzss-UM_eFwqkqd7TXJuCRI",
  "Erie": "1ryVOyC5XwRFIHkMh8DhwVhSM2vchw4Dm",
  "Fayette": "100T-k10KgJEyQYH-xhLHGgY6wIK0k8MS",
  "Forest": "1rc5BJD4V0EnzVSw95mExFlTO_E2lxsn-",
  "Franklin": "1JP-cMpqH59rRV9Y-QxxwfOZmiY7w20uY",
  "Fulton": "19bvVgRGAl4T821W7Slu32CSc-ARuMRFy",
  "Greene": "1XQVaQo3ydtS-pRlkQlozC4ZP00Oj6slc",
  "Huntingdon": "1SUxMShvTxVWsaz4c5hMJ_2Wby7tTjh2-",
  "Indiana": "1RRP1ltVb3RuHy2V5bi5EgJaU6G5P-_81",
  "Jefferson": "1AGZqvJ3vIqxU3S5fJIkorE1l3GJk8kdZ",
  "Juniata": "1VLcUOEauqmq3km9MP3-38OZaVUM4Gxho",
  "Lackawanna": "10xc_Y7oBPIU4sZVD_9optVKjHmHsbVT9",
  "Lancaster": "1xIF-mqL3HIxbnfrausXI1sy9B6JX7E95",
  "Lawrence": "138uNDAeopbGWreK6wnP2ssEQTeOhhddL",
  "Lebanon": "1azjkUGTSQ8ZrKR6J6yKzeK_nwdg53RGZ",
  "Lehigh": "1c-_mkqmKOi9kgJQLYIxLsceqEPmW6hXl",
  "Luzerne": "12u_dq-HpJWzFcqCeuNG8Hu4UOnkhjeDi",
  "Lycoming": "1YdRZBkshz_nrZWDJfPPwFbNo--nDSIUD",
  "McKean": "1xKzKGp7Z9LyI8CQkKeEegaKWR5iI6zNH",
  "Mercer": "1r14UrYgsEgRn_DPDngRvZs3V7HgizY_8",
  "Mifflin": "1XFDENfO7uKw4x3Jhpku6z-PQqs2ZWH-a",
  "Monroe": "1GURToaJ1319YNVDJWI_OXDvRee9KoZiA",
  "Montgomery": "1wpUF89RTGFyaQ-0TSYazaz9QkUa6Ry1j",
  "Montour": "1w-Kou_F1jhQELhrcmy6BLXZ9mZQZchqX",
  "Northampton": "1SuwNpLWUaJzSg5aMRrAQ1lvxIWLHKORq",
  "Northumberland": "1VjNJKb7N_9SumCL0ujY4xuLBorM42ATo",
  "Perry": "1qahFVQmrK3rKorhepOiNXnCSQ8ti6rBa",
  "Philadelphia": "1Pf2DcKHeyvsUwjQSb3MiSe3_3dYV6dDC",
  "Pike": "1VzhvZUai8qAFSlKAr0WYK4DhbThuUHMt",
  "Potter": "1466940eApsvRHA7YxiKfXe5xskPgBinV",
  "Schuylkill": "17sx4HJyGW736uy3BXGtt5FHEI490Xwi_",
  "Snyder": "10fhuO8R1ybaXVNMiyxk9AQszquKGX05q",
  "Somerset": "1baJYcVGac-nLimW09AIOtmkBnBSrQbKj",
  "Sullivan": "1tmtl4WCKcuojFuhnJ6VxBB2OuwBzmVnJ",
  "Susquehanna": "1_Ddq7ujQ_66woiqa-WJ9ibcU5-vXE9sK",
  "Tioga": "1DkrpQ4jnb21xoIUN0UmedYbZr44BlX44",
  "Union": "1mTEnT5kDPk1LCJOZhv1TOLafj12atqpk",
  "Venango": "1eVlBewyEsERA5bZetrr-5WX7tKK78NAM",
  "Warren": "1jozfLvHuMB2YdIXF40f0FgcpobieYDo-",
  "Washington": "13Q6Vi5aEXIqPdv7ba-UB_4pHjuz4AemT",
  "Wayne": "1ytNSYtKf2ZwQnABfWBs_LYQuACgdnbj-",
  "Westmoreland": "1hONhE2nLZRn6Mt8dgovqOoTrOHQ5bnhM",
  "Wyoming": "1UTMHow00ByEDD2ThaCevmz5wxNB4a9wV",
  "York": "1BNPxE_1D6jSdcgbNQL7sAVSkXtdgseSC"
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
    "<div id=\"interactiveMapLink\"></div>" +
    "<div><img id=\"mapImg\" /></div>";

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
//    "<label><input type=\"radio\" name=\"chamberRadio\" value=\"us_congress\" onchange=\"displayMap()\" />Congress</label>";
    "</span>";
  chamberRadios = document.getElementsByName('chamberRadio');

  document.getElementById('sourceRadioDiv').innerHTML =
    "<label style=\"color: white;\"> Map Source </label>" +
    "<span style=\"float: left; width: 100%; background: #e9e9ed; padding: 0 5px 0 10px;\">" +
    "<label style=\"font-weight: normal;\"><input type=\"radio\" name=\"sourceRadio\" value=\"current\" onchange=\"displayMap()\" checked=\"checked\" />Current</label>" +
//    "<label style=\"font-weight: normal;\"><input type=\"radio\" name=\"sourceRadio\" value=\"lrc\" onchange=\"displayMap()\" />LRC</label>" +
    "<label style=\"font-weight: normal;\"><input type=\"radio\" name=\"sourceRadio\" value=\"fdpa\" onchange=\"displayMap()\" />FDPA</label>"
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
  interactiveMapLink.innerHTML = "You can also view an <a href=\"https://www.google.com/maps/d/edit?mid=" + idByCounty[prettyCounty] + "\" target=\"_blank\">interactive map</a> for " + prettyCounty + " County.";

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
