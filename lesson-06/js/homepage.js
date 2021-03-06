fetch('https://byui-cit230.github.io/weather/data/towndata.json')
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    const townname = towns.filter((town) => town.name === 'Preston' || town.name === 'Soda Springs' || town.name === 'Fish Haven');
    townname.forEach((town) => {
      let section = document.createElement('section');
      let h2 = document.createElement('h2');
      let motto = document.createElement('p');
      let yrfounded = document.createElement('p');
      let population = document.createElement('p');
      let annualrainfall = document.createElement('p');
      let image = document.createElement('img');
      let div = document.createElement('div');

      h2.textContent = `${town.name}`;
      motto.textContent = `${town.motto}`;
      yrfounded.textContent = `Year Founded: ${town.yearFounded}`;
      population.textContent = `Population: ${town.currentPopulation}`;
      annualrainfall.textContent = `Annual Rain Fall: ${town.averageRainfall}`;

      if (town.name === 'Preston') {
        image.setAttribute('src', "images/hotairballoons.webp");
        image.setAttribute('alt', "Hot air balloons over a valley with a town in the background.");
      } else if (town.name === 'Soda Springs') {
        image.setAttribute('src', "images/sodafountain.webp");
        image.setAttribute('alt', "A store with a soda fountain sign and several soda refrigerators.");
      } else {
        image.setAttribute('src', "images/manfishingonriver.webp");
        image.setAttribute('alt', "A man flyfishing while wading in a river.");
      }

      div.appendChild(h2);
      div.appendChild(motto);
      div.appendChild(yrfounded);
      div.appendChild(population);
      div.appendChild(annualrainfall);
      section.appendChild(div);
      section.appendChild(image);

      document.querySelector('div.sections').appendChild(section);
    });
  });
