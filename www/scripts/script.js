alert("hello");

require (["esri/Map", "esri/views/MapView","esri/WebMap"],
   function(Map, MapView,WebMap)
   {
      let map1 = new Map({basemap:"topo"}); //słowo klucz new + nazwa modułu
      let map2 = new Map({basemap:"satellite"});
      let map3 = new Map({basemap:"osm"});
      let map4 = new WebMap({
         portalItem: {
            id:"a3fb49a8810046a5880c486458d00044"
         }
      })

      let mapContainer = new MapView({
         container: "containerRight",  // miejsce gdzie chcemy osadzić mapę (bierzemy klasę z pliku html //
         map: map4  //czyli nasza zmienna z mapą bazową zdefiniowana wcześniej //
      });
      document.getElementById("przycisk1").onclick = function(){
         console.log('klik');
         mapContainer.map=map2;
      }
      document.getElementById("przycisk2").onclick = function(){
         console.log('klik');
         mapContainer.map=map1;
      }
      document.getElementById("przycisk3").onclick = function(){
         console.log('klik');
         mapContainer.map=map3;
      }
      document.getElementById("przycisk4").onclick = function(){
         console.log('klik');
         mapContainer.map=map4;
      }
   })