var wms_layers = [];


        var lyr_BingMapsSatelliteImagery_0 = new ol.layer.Tile({
            'title': 'Bing Maps Satellite Imagery',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://t0.tiles.virtualearth.net/tiles/a{q}.jpeg?g=685&mkt=en-us&n=z'
            })
        });

        var lyr_Positron_1 = new ol.layer.Tile({
            'title': 'Positron',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_amphoe_2 = new ol.format.GeoJSON();
var features_amphoe_2 = format_amphoe_2.readFeatures(json_amphoe_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_amphoe_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_amphoe_2.addFeatures(features_amphoe_2);
var lyr_amphoe_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_amphoe_2, 
                style: style_amphoe_2,
                popuplayertitle: "amphoe",
                interactive: true,
                title: '<img src="styles/legend/amphoe_2.png" /> amphoe'
            });
var format_stream_3 = new ol.format.GeoJSON();
var features_stream_3 = format_stream_3.readFeatures(json_stream_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_stream_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_stream_3.addFeatures(features_stream_3);
var lyr_stream_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_stream_3, 
                style: style_stream_3,
                popuplayertitle: "stream",
                interactive: true,
                title: '<img src="styles/legend/stream_3.png" /> stream'
            });
var format_transportation_4 = new ol.format.GeoJSON();
var features_transportation_4 = format_transportation_4.readFeatures(json_transportation_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_transportation_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_transportation_4.addFeatures(features_transportation_4);
var lyr_transportation_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_transportation_4, 
                style: style_transportation_4,
                popuplayertitle: "transportation",
                interactive: true,
                title: '<img src="styles/legend/transportation_4.png" /> transportation'
            });
var format_village_5 = new ol.format.GeoJSON();
var features_village_5 = format_village_5.readFeatures(json_village_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_village_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_village_5.addFeatures(features_village_5);cluster_village_5 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_village_5
});
var lyr_village_5 = new ol.layer.Vector({
                declutter: true,
                source:cluster_village_5, 
                style: style_village_5,
                popuplayertitle: "village",
                interactive: true,
                title: '<img src="styles/legend/village_5.png" /> village'
            });

lyr_BingMapsSatelliteImagery_0.setVisible(true);lyr_Positron_1.setVisible(true);lyr_amphoe_2.setVisible(true);lyr_stream_3.setVisible(true);lyr_transportation_4.setVisible(true);lyr_village_5.setVisible(true);
var layersList = [lyr_BingMapsSatelliteImagery_0,lyr_Positron_1,lyr_amphoe_2,lyr_stream_3,lyr_transportation_4,lyr_village_5];
lyr_amphoe_2.set('fieldAliases', {'AREA': 'AREA', 'AMP_CODE': 'AMP_CODE', 'AMP_NAM_T': 'AMP_NAM_T', 'AMP_NAM_E': 'AMP_NAM_E', 'PROV_CODE': 'PROV_CODE', 'strata': 'strata', });
lyr_stream_3.set('fieldAliases', {'LENGTH': 'LENGTH', 'STR_ID': 'STR_ID', 'STR_NAM_T': 'STR_NAM_T', 'STR_NAM_E': 'STR_NAM_E', 'LOCAL_NAM': 'LOCAL_NAM', 'STR_TYPE': 'STR_TYPE', });
lyr_transportation_4.set('fieldAliases', {'LENGTH': 'LENGTH', 'TRANS_TYP': 'TRANS_TYP', 'TYP_T': 'TYP_T', 'NAME_T': 'NAME_T', 'NAME_E': 'NAME_E', 'TranNo': 'TranNo', 'TranTyp_n': 'TranTyp_n', });
lyr_village_5.set('fieldAliases', {'NRD_CODE': 'NRD_CODE', 'VILL_CODE': 'VILL_CODE', 'VILL_NAM_T': 'VILL_NAM_T', 'PROV_CODE': 'PROV_CODE', 'AMP_CODE': 'AMP_CODE', 'TAM_CODE': 'TAM_CODE', });
lyr_amphoe_2.set('fieldImages', {'AREA': 'TextEdit', 'AMP_CODE': 'TextEdit', 'AMP_NAM_T': 'TextEdit', 'AMP_NAM_E': 'TextEdit', 'PROV_CODE': 'TextEdit', 'strata': 'Range', });
lyr_stream_3.set('fieldImages', {'LENGTH': 'TextEdit', 'STR_ID': 'TextEdit', 'STR_NAM_T': 'TextEdit', 'STR_NAM_E': 'TextEdit', 'LOCAL_NAM': 'TextEdit', 'STR_TYPE': 'TextEdit', });
lyr_transportation_4.set('fieldImages', {'LENGTH': 'TextEdit', 'TRANS_TYP': 'TextEdit', 'TYP_T': 'TextEdit', 'NAME_T': 'TextEdit', 'NAME_E': 'TextEdit', 'TranNo': 'Range', 'TranTyp_n': 'Range', });
lyr_village_5.set('fieldImages', {'NRD_CODE': 'TextEdit', 'VILL_CODE': 'TextEdit', 'VILL_NAM_T': 'TextEdit', 'PROV_CODE': 'TextEdit', 'AMP_CODE': 'TextEdit', 'TAM_CODE': 'TextEdit', });
lyr_amphoe_2.set('fieldLabels', {'AREA': 'no label', 'AMP_CODE': 'no label', 'AMP_NAM_T': 'no label', 'AMP_NAM_E': 'no label', 'PROV_CODE': 'no label', 'strata': 'no label', });
lyr_stream_3.set('fieldLabels', {'LENGTH': 'no label', 'STR_ID': 'no label', 'STR_NAM_T': 'no label', 'STR_NAM_E': 'no label', 'LOCAL_NAM': 'no label', 'STR_TYPE': 'no label', });
lyr_transportation_4.set('fieldLabels', {'LENGTH': 'no label', 'TRANS_TYP': 'no label', 'TYP_T': 'no label', 'NAME_T': 'no label', 'NAME_E': 'no label', 'TranNo': 'no label', 'TranTyp_n': 'no label', });
lyr_village_5.set('fieldLabels', {'NRD_CODE': 'no label', 'VILL_CODE': 'no label', 'VILL_NAM_T': 'no label', 'PROV_CODE': 'no label', 'AMP_CODE': 'no label', 'TAM_CODE': 'no label', });
lyr_village_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});