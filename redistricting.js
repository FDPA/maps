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
  "Adams":"1j-N0HHwFXT6ZewwuJJG64k6MMpFqqE_9",
  "Allegheny":"1X2hjhazB4V0ijfY010_0eWghTOKdlL-d",
  "Armstrong":"1a1T5J8gVC4wlaOsCm-fQHF2GWaL1TReq",
  "Beaver":"1X_mrjCr_vGR9YE7wDD75G7PeAWiLSmaQ",
  "Bedford":"10oxsIQZc3c0CnZrAzpMDCaCkdrGlgYQo",
  "Berks":"1m-eYvjr0UHEcFY25GS7kv0zguJjkLa2C",
  "Blair":"13Wcm_AHIy_ms_hnfjuzv1wDZL_LmHdnh",
  "Bradford":"1mV3A72w7-LWEjtQEdcb1nyVOh7k0Pab5",
  "Bucks":"1f42jH92dDhUOrPEgF7j2EPEgs5PeOiIG",
  "Butler":"1sitddP6Fju2rf2tH5j1bA2EqbpnnYp8n",
  "Cambria":"1d_ibOAKkZ-CkJcNaRUZGaL3KC7v7754z",
  "Cameron":"18QzAD2Ef54MoUt275BDb0oY6igxnNn_2",
  "Carbon":"1JAQtQs3F8s5bQd9gzriEFbNJTmDvqqO5",
  "Centre":"19o1b7JRbq9LVYcRQvSRbIEgfI03PBmAL",
  "Chester":"1iisG8IJsJr3EQWsxYPPMHMyeRPMFBAK8",
  "Clarion":"155NEnSvgdIUd-7aCMH7FA8DFG71enMrB",
  "Clearfield":"1ZwAgQEy5owaORWiY918kJ5RJPNUn6Gdw",
  "Clinton":"1wLeQXrOMF7lkfI0-PbPauTpsK5lbbyHC",
  "Columbia":"1ejVbfsvo1bRzp5RGOqSRhE24qByaAkEU",
  "Crawford":"1fd_NxYK_RN0dZeBadG_8uRVrFstxMXg4",
  "Cumberland":"1p2-WQ-j7xVjPDh6EiW195CJIUK9doqt3",
  "Dauphin":"1uw6ZPXmmJNzWGYVdSNPw4A__sJ_6Byxd",
  "Delaware":"1xARfT6Rt9ieFtuBExRQXHUUuEStYWsoe",
  "Elk":"1-kk6JeEuNsdZwcevy5PIi1766bLoJBQE",
  "Erie":"1a8MERIEfLifJ5FAuCdDEzz_SoOEMNSxj",
  "Fayette":"19jDX-mPqmKIB-rRj682C8ApSj26az37q",
  "Forest":"1_9cl6NPuSW8QRaS_IkR_Bf_btVONhWuc",
  "Franklin":"1G7DTBddkVPtmKc1_hsWAKb10f6UNM3Ki",
  "Fulton":"10sMuHq6q2WD5XEZ0PU_PnVlbcFTzN-_4",
  "Greene":"1gmxjNA3POyNVKbc9gwFk057lpZ0EdUBW",
  "Huntingdon":"1LBgMywJ7IQWdkTA__zTonBZqprTttLOG",
  "Indiana":"1T1CXftc2wEKeRUPsJwAr5BUouHlNp229",
  "Jefferson":"1RH9QGHF9uxAlW7VAnli9YIxgdnYT_vOa",
  "Juniata":"1uhaVfu3PUbRvz68gGA8ccSAdEc8130N-",
  "Lackawanna":"1FNs4QaFZox-HLC6uC4EPHFNsVDvwht4T",
  "Lancaster":"1W7oY-oipMcXsVW2lc865yCylSf96hWT5",
  "Lawrence":"1Em2ViAzp940JxDFUilevjusU8RTf4yEo",
  "Lebanon":"1n847DdDCaQyiGxcQD7uyMlZAW3rd37LF",
  "Lehigh":"1-5GQAmPqyCthctExLh8J21cuFRkkvJ4d",
  "Luzerne":"1vZgdLh964fygTNpZgwsKazFwyzsc7kQb",
  "Lycoming":"1gv0VOeojlC4oBMajUtN5vxNxRcxeXNWf",
  "McKean":"1moBbHQGfFuOv4TbxPCNFFz8aFrJn3YPY",
  "Mercer":"1_W-nJhxCznZ7pSO3DM41GuQ2uQRoPbzq",
  "Mifflin":"14YShjl_Q_wDc9yK7ypSLwbJkhYk2i4Qu",
  "Monroe":"1vMaNj1n8bXrOU6ByyChvulB68lYW1HEx",
  "Montgomery":"1Q9QfsLUfEaPDY840WbAfZLUoMMXYDpmy",
  "Montour":"1McnRY_qLeseV_L02pHL6wMuonQbjDNJX",
  "Northampton":"1F763Ai6UkkacC2JlmCEgB-y6OUPKoDXg",
  "Northumberland":"1q4THSzgBBoxN64nOu-z0bkBe_mDIjgdO",
  "Perry":"1zEjU_RuHJYx2gwnHKgK8du7VeU-VaoFc",
  "Philadelphia":"1Ozibb8A1LSEJU9mHaE2yKynutRuYhsuf",
  "Pike":"1--b0jRFRSMoG6r21DQMrVwD8IAJaBdJk",
  "Potter":"1p6BlTaQSbju7hXX47g-SknuHGB4Mt6Ms",
  "Schuylkill":"1wbu6aMp3nbBrUdVWS-fU6HUF_BnZWE9r",
  "Snyder":"1WXH4wV-9rcTDCjGXJHPDZpcWTJdzlfw0",
  "Somerset":"1zlTUtq-ggZ9Sa9MLvo1LYR_S-i16c4kn",
  "Sullivan":"1OoNhREdPGIaZSgOhUmurXowk-6nqkgPF",
  "Susquehanna":"1-t-QugsQid-t0wvOpdRhfGu9woWq51Dp",
  "Tioga":"1hm9n7DuaF_RPyTa9ZSHJqOLvCXczx49g",
  "Union":"1lANaDXW5CdByL2sCZhdDyAHy2mnxGo_-",
  "Venango":"1dW51aLgxpM8uR0TuxDUf0e2Y-iWBJJhz",
  "Warren":"1aDHYoSMU2fQUIQDvt_nySq2CfoLvXPea",
  "Washington":"1WMmf9uzW9Q3MHiu6xLVXAcvrqKbGLf_c",
  "Wayne":"1jE7TVUvPC-msOpLgf80rf6BVymvuO6bu",
  "Westmoreland":"1MfOBxuVZlA5qy1haa19dU7KI9qm8Jt8n",
  "Wyoming":"1YdFpMBNeXvF4A_8Yv6_Q_tKZ-la3AfJw",
  "York":"1SzuRhD6Z08YuyynQDLF8sYqGJ8u8IBSz"
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
//    "<label><input type=\"radio\" name=\"chamberRadio\" value=\"us_congress\" onchange=\"displayMap()\" />Congress</label>";
    "</span>";
  chamberRadios = document.getElementsByName('chamberRadio');

  document.getElementById('sourceRadioDiv').innerHTML =
    "<label style=\"color: white;\"> Map Source </label>" +
    "<span style=\"float: left; width: 100%; background: #e9e9ed; padding: 0 5px 0 10px;\">" +
    "<label style=\"font-weight: normal;\"><input type=\"radio\" name=\"sourceRadio\" value=\"current\" onchange=\"displayMap()\" checked=\"checked\" />Current</label>" +
    "<label style=\"font-weight: normal;\"><input type=\"radio\" name=\"sourceRadio\" value=\"lrc\" onchange=\"displayMap()\" />LRC</label>" +
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
