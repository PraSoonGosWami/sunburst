/**
 * Library Used
 * Open source
 * URL - https://github.com/vasturiano/sunburst-chart
 *
 * Dummy Data used for showcase
 * Covid -19 world data
 * URL - https://gist.githubusercontent.com/shacheeswadia/3955e21fff7eddcc3862ec4797109cda/raw/209c22d8c607cf76b16ec18c7fd95c02e5fdbbe3/sunburstData.json
 */

//generates new color for the arcs
//can be replace with color property in the data

function getRandomColor() {
  var letters = "123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 15)];
  }
  return color;
}
const url =
  "https://gist.githubusercontent.com/shacheeswadia/3955e21fff7eddcc3862ec4797109cda/raw/209c22d8c607cf76b16ec18c7fd95c02e5fdbbe3/sunburstData.json";

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    Sunburst()
      .data(data[0])
      .color(() => getRandomColor())
      .strokeColor("none")
      .maxLevels(2)
      .label((d) => `${d.name} - ${d.total_deaths}`)
      .tooltipTitle((d) => `<i>${d.name}</i>`)
      .tooltipContent((d) => `<i>Deaths: ${d.total_deaths}</i>`)
      .radiusScaleExponent(1)(document.getElementById("chart"));
  });
