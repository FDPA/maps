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

var dropdown = document.getElementById('countyDropdown');
var chamberRadios;
var beforeImg = document.getElementById('beforeImg');
var afterImg = document.getElementById('afterImg');
var beforeLabel = document.getElementById('beforeLabel');
var afterLabel = document.getElementById('afterLabel');

function initialize() {
  for (var i = 0; i < counties.length; i++) {
    var opt = document.createElement("option");
    opt.textContent = counties[i];
    opt.value = counties[i].toLowerCase();
    dropdown.options.add(opt);
  }

  document.getElementById('chamberRadioDiv').innerHTML =
    "<label><input type=\"radio\" name=\"chamberRadio\" value=\"pa_house\" onchange=\"displayMaps()\" checked=\"checked\" />House</label>" +
    "<br />" +
    "<label><input type=\"radio\" name=\"chamberRadio\" value=\"pa_senate\" onchange=\"displayMaps()\" />Senate</label>";
//    "<br />" +
//    "<label><input type=\"radio\" name=\"chamberRadio\" value=\"us_congress\" onchange=\"displayMaps()\" />Congress</label>";
  chamberRadios = document.getElementsByName('chamberRadio');

  displayMaps();
}

function displayMaps() {
  var county = dropdown.value;
  var chamber = getRadioValue(chamberRadios);
  beforeImg.src = baseUrl + "/" + county + "_" + chamber + ".jpg";
  afterImg.src = baseUrl + "/" + county + "_fdpa_" + chamber + ".jpg";
  beforeLabel.innerHTML = "Current";
  afterLabel.innerHTML = "FDPA";
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
