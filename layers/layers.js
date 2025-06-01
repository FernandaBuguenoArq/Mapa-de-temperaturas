var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 0.400000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_manzanasdequilpueparasitioweb_1 = new ol.format.GeoJSON();
var features_manzanasdequilpueparasitioweb_1 = format_manzanasdequilpueparasitioweb_1.readFeatures(json_manzanasdequilpueparasitioweb_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_manzanasdequilpueparasitioweb_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_manzanasdequilpueparasitioweb_1.addFeatures(features_manzanasdequilpueparasitioweb_1);
var lyr_manzanasdequilpueparasitioweb_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_manzanasdequilpueparasitioweb_1, 
                style: style_manzanasdequilpueparasitioweb_1,
                popuplayertitle: 'manzanas de quilpue para sitio web',
                interactive: true,
    title: 'manzanas de quilpue para sitio web<br />\
    <img src="styles/legend/manzanasdequilpueparasitioweb_1_0.png" /> 1<br />\
    <img src="styles/legend/manzanasdequilpueparasitioweb_1_1.png" /> 2<br />\
    <img src="styles/legend/manzanasdequilpueparasitioweb_1_2.png" /> 3<br />\
    <img src="styles/legend/manzanasdequilpueparasitioweb_1_3.png" /> 4<br />\
    <img src="styles/legend/manzanasdequilpueparasitioweb_1_4.png" /> 5<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_manzanasdequilpueparasitioweb_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_manzanasdequilpueparasitioweb_1];
lyr_manzanasdequilpueparasitioweb_1.set('fieldAliases', {'fid': 'Manzana', 'NOMBRE_DIS': 'Nombre de distrito', 'CODIGO_DIS': 'Codigo de distrito', 'TOTAL_PERS': 'Habitantes', 'TOTAL_VIV_': 'Viviendas', 'CANTIDAD_H': 'Hogares', 'VERANO 2024 ESCALA_Temperatura media': 'Temperatura media en verano', 'VERANO 2024 ESCALA_ESCALA': 'Clasificación de la manzana en base a su temperatura', 'oscilacion de temperatura_Min': 'oscilacion de temperatura_Min', 'oscilacion de temperatura_Max': 'oscilacion de temperatura_Max', 'oscilacion de temperatura_Temperatura minima de la manzana': 'oscilacion de temperatura_Temperatura minima de la manzana', 'oscilacion de temperatura_Temperatura maxima de la manzana': 'Temperatura máxima', 'oscilacion de temperatura_oscilacion de temperatura': 'Oscilación de temperatura', });
lyr_manzanasdequilpueparasitioweb_1.set('fieldImages', {'fid': 'TextEdit', 'NOMBRE_DIS': 'TextEdit', 'CODIGO_DIS': 'TextEdit', 'TOTAL_PERS': 'TextEdit', 'TOTAL_VIV_': 'TextEdit', 'CANTIDAD_H': 'TextEdit', 'VERANO 2024 ESCALA_Temperatura media': 'TextEdit', 'VERANO 2024 ESCALA_ESCALA': 'Range', 'oscilacion de temperatura_Min': 'TextEdit', 'oscilacion de temperatura_Max': 'TextEdit', 'oscilacion de temperatura_Temperatura minima de la manzana': 'TextEdit', 'oscilacion de temperatura_Temperatura maxima de la manzana': 'TextEdit', 'oscilacion de temperatura_oscilacion de temperatura': 'TextEdit', });
lyr_manzanasdequilpueparasitioweb_1.set('fieldLabels', {'fid': 'inline label - always visible', 'NOMBRE_DIS': 'hidden field', 'CODIGO_DIS': 'hidden field', 'TOTAL_PERS': 'inline label - always visible', 'TOTAL_VIV_': 'hidden field', 'CANTIDAD_H': 'hidden field', 'VERANO 2024 ESCALA_Temperatura media': 'hidden field', 'VERANO 2024 ESCALA_ESCALA': 'hidden field', 'oscilacion de temperatura_Min': 'hidden field', 'oscilacion de temperatura_Max': 'hidden field', 'oscilacion de temperatura_Temperatura minima de la manzana': 'hidden field', 'oscilacion de temperatura_Temperatura maxima de la manzana': 'inline label - always visible', 'oscilacion de temperatura_oscilacion de temperatura': 'inline label - always visible', });
lyr_manzanasdequilpueparasitioweb_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});