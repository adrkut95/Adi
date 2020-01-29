alert("hello");

require (["esri/Map", "esri/views/MapView","esri/WebMap","esri/widgets/BasemapToggle",
"esri/widgets/BasemapGallery","esri/layers/GraphicsLayer","esri/widgets/Sketch","esri/layers/FeatureLayer"],
   function(Map, MapView,WebMap,BasemapToggle, BasemapGallery,GraphicsLayer,Sketch,FeatureLayer)
   {
      let map1 = new Map({basemap:"topo"}); //słowo klucz new + nazwa modułu
      let map2 = new Map({basemap:"satellite"});
      let map3 = new Map({basemap:"osm"});
      var graphicsLayer = new GraphicsLayer();
      let map4 = new WebMap({
         portalItem: {
            id:"4e9dd6f2ed9d4d85bf0aa62bc1d9ce92"
         },layers: [graphicsLayer]
      });
      let mapContainer = new MapView({
         container: "containerRight",  // miejsce gdzie chcemy osadzić mapę (bierzemy klasę z pliku html //
         map: map4  //czyli nasza zmienna z mapą bazową zdefiniowana wcześniej //
      });
      

      var map = new Map({
        basemap: "topo-vector",
         
      });
      var sketch = new Sketch({
        view:  mapContainer,
        layer: graphicsLayer
      });
      mapContainer.ui.add(sketch, "top-right");

      var trailheadsLayer = new FeatureLayer({
         url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/ArcGIS/rest/services/USA%20States/FeatureServer/0"
       });
 
       map4.add(trailheadsLayer);

      var basemapGallery = new BasemapGallery({
         view: mapContainer,
         source: {
           portal: {
             url: "https://www.arcgis.com",
             useVectorBasemaps: true  // Load vector tile basemaps
           }
         }
       });
       mapContainer.ui.add(basemapGallery, "top-right");

      
       mapContainer.ui.add(basemapToggle, "bottom-right");

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