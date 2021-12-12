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

var baseUrl = "https://fdpa.github.io/maps/images";

var dropdown;
var chamberRadios;
var sourceRadios;
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

  mapImg = document.getElementById('mapImg');
  mapImg.style.width = "500px";
  mapImg.style.height = "500px";
  
  displayMap();
}

function displayMap() {
  var county = dropdown.value;
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
