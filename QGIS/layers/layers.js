ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([78.128979, 28.557463, 80.879124, 30.328435]);
var wms_layers = [];

var format_contourusncontours_0 = new ol.format.GeoJSON();
var features_contourusncontours_0 = format_contourusncontours_0.readFeatures(json_contourusncontours_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_contourusncontours_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_contourusncontours_0.addFeatures(features_contourusncontours_0);
var lyr_contourusncontours_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_contourusncontours_0, 
                style: style_contourusncontours_0,
                popuplayertitle: 'contour usn — contours',
                interactive: true,
                title: '<img src="styles/legend/contourusncontours_0.png" /> contour usn — contours'
            });
var format_mergedtehsils_1 = new ol.format.GeoJSON();
var features_mergedtehsils_1 = format_mergedtehsils_1.readFeatures(json_mergedtehsils_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_mergedtehsils_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mergedtehsils_1.addFeatures(features_mergedtehsils_1);
var lyr_mergedtehsils_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mergedtehsils_1, 
                style: style_mergedtehsils_1,
                popuplayertitle: 'merged tehsils',
                interactive: true,
                title: '<img src="styles/legend/mergedtehsils_1.png" /> merged tehsils'
            });

        var lyr_OSMStandard_2 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_studyUSNstudy_site_3 = new ol.format.GeoJSON();
var features_studyUSNstudy_site_3 = format_studyUSNstudy_site_3.readFeatures(json_studyUSNstudy_site_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_studyUSNstudy_site_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_studyUSNstudy_site_3.addFeatures(features_studyUSNstudy_site_3);
var lyr_studyUSNstudy_site_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_studyUSNstudy_site_3, 
                style: style_studyUSNstudy_site_3,
                popuplayertitle: 'study USN — study_site',
                interactive: false,
                title: '<img src="styles/legend/studyUSNstudy_site_3.png" /> study USN — study_site'
            });
var lyr_studydem3dnew_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'study dem 3d new<br />\
    <img src="styles/legend/studydem3dnew_4_0.png" /> 184<br />\
    <img src="styles/legend/studydem3dnew_4_1.png" /> 186<br />\
    <img src="styles/legend/studydem3dnew_4_2.png" /> 188<br />\
    <img src="styles/legend/studydem3dnew_4_3.png" /> 190<br />\
    <img src="styles/legend/studydem3dnew_4_4.png" /> 192<br />\
    <img src="styles/legend/studydem3dnew_4_5.png" /> 194<br />\
    <img src="styles/legend/studydem3dnew_4_6.png" /> 196<br />\
    <img src="styles/legend/studydem3dnew_4_7.png" /> 199<br />\
    <img src="styles/legend/studydem3dnew_4_8.png" /> 201<br />\
    <img src="styles/legend/studydem3dnew_4_9.png" /> 203<br />\
    <img src="styles/legend/studydem3dnew_4_10.png" /> 205<br />\
    <img src="styles/legend/studydem3dnew_4_11.png" /> 207<br />\
    <img src="styles/legend/studydem3dnew_4_12.png" /> 209<br />\
    <img src="styles/legend/studydem3dnew_4_13.png" /> 211<br />\
    <img src="styles/legend/studydem3dnew_4_14.png" /> 213<br />\
    <img src="styles/legend/studydem3dnew_4_15.png" /> 215<br />\
    <img src="styles/legend/studydem3dnew_4_16.png" /> 217<br />\
    <img src="styles/legend/studydem3dnew_4_17.png" /> 219<br />\
    <img src="styles/legend/studydem3dnew_4_18.png" /> 221<br />\
    <img src="styles/legend/studydem3dnew_4_19.png" /> 223<br />\
    <img src="styles/legend/studydem3dnew_4_20.png" /> 226<br />\
    <img src="styles/legend/studydem3dnew_4_21.png" /> 228<br />\
    <img src="styles/legend/studydem3dnew_4_22.png" /> 230<br />\
    <img src="styles/legend/studydem3dnew_4_23.png" /> 232<br />\
    <img src="styles/legend/studydem3dnew_4_24.png" /> 234<br />\
    <img src="styles/legend/studydem3dnew_4_25.png" /> 236<br />\
    <img src="styles/legend/studydem3dnew_4_26.png" /> 238<br />\
    <img src="styles/legend/studydem3dnew_4_27.png" /> 240<br />\
    <img src="styles/legend/studydem3dnew_4_28.png" /> 242<br />\
    <img src="styles/legend/studydem3dnew_4_29.png" /> 244<br />\
    <img src="styles/legend/studydem3dnew_4_30.png" /> 246<br />\
    <img src="styles/legend/studydem3dnew_4_31.png" /> 248<br />\
    <img src="styles/legend/studydem3dnew_4_32.png" /> 251<br />\
    <img src="styles/legend/studydem3dnew_4_33.png" /> 253<br />\
    <img src="styles/legend/studydem3dnew_4_34.png" /> 255<br />\
    <img src="styles/legend/studydem3dnew_4_35.png" /> 257<br />\
    <img src="styles/legend/studydem3dnew_4_36.png" /> 259<br />\
    <img src="styles/legend/studydem3dnew_4_37.png" /> 261<br />\
    <img src="styles/legend/studydem3dnew_4_38.png" /> 263<br />\
    <img src="styles/legend/studydem3dnew_4_39.png" /> 265<br />\
    <img src="styles/legend/studydem3dnew_4_40.png" /> 267<br />\
    <img src="styles/legend/studydem3dnew_4_41.png" /> 269<br />\
    <img src="styles/legend/studydem3dnew_4_42.png" /> 271<br />\
    <img src="styles/legend/studydem3dnew_4_43.png" /> 273<br />\
    <img src="styles/legend/studydem3dnew_4_44.png" /> 275<br />\
    <img src="styles/legend/studydem3dnew_4_45.png" /> 278<br />\
    <img src="styles/legend/studydem3dnew_4_46.png" /> 280<br />\
    <img src="styles/legend/studydem3dnew_4_47.png" /> 282<br />\
    <img src="styles/legend/studydem3dnew_4_48.png" /> 284<br />\
    <img src="styles/legend/studydem3dnew_4_49.png" /> 286<br />\
    <img src="styles/legend/studydem3dnew_4_50.png" /> 288<br />\
    <img src="styles/legend/studydem3dnew_4_51.png" /> 290<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/studydem3dnew_4.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [78.719028, 28.724583, 80.077361, 29.370972]
        })
    });
var format_mergedbufferfixed_5 = new ol.format.GeoJSON();
var features_mergedbufferfixed_5 = format_mergedbufferfixed_5.readFeatures(json_mergedbufferfixed_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_mergedbufferfixed_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mergedbufferfixed_5.addFeatures(features_mergedbufferfixed_5);
var lyr_mergedbufferfixed_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mergedbufferfixed_5, 
                style: style_mergedbufferfixed_5,
                popuplayertitle: 'merged buffer fixed',
                interactive: true,
                title: '<img src="styles/legend/mergedbufferfixed_5.png" /> merged buffer fixed'
            });
var lyr_nanaksagarlulc2_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'nanak sagar lulc 2<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/nanaksagarlulc2_6.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [79.796152, 28.902732, 79.876064, 28.973876]
        })
    });
var lyr_tumarialulc2_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'tumaria lulc 2<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/tumarialulc2_7.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [78.857998, 29.252981, 78.977320, 29.358055]
        })
    });
var lyr_baurlulc_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'baur lulc<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/baurlulc_8.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [79.223594, 29.100727, 79.295299, 29.163156]
        })
    });
var lyr_baigullulc_9 = new ol.layer.Image({
        opacity: 1,
        
    title: 'baigul lulc<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/baigullulc_9.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [79.602759, 28.857822, 79.659253, 28.907765]
        })
    });
var lyr_haripuralulc2_10 = new ol.layer.Image({
        opacity: 1,
        
    title: 'haripura lulc 2<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/haripuralulc2_10.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [79.279456, 29.088802, 79.356084, 29.155568]
        })
    });
var lyr_dhoralulc2_11 = new ol.layer.Image({
        opacity: 1,
        
    title: 'dhora lulc 2<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/dhoralulc2_11.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [79.549845, 28.910394, 79.612243, 28.965120]
        })
    });
var format_streamsusnstreams_12 = new ol.format.GeoJSON();
var features_streamsusnstreams_12 = format_streamsusnstreams_12.readFeatures(json_streamsusnstreams_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_streamsusnstreams_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_streamsusnstreams_12.addFeatures(features_streamsusnstreams_12);
var lyr_streamsusnstreams_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_streamsusnstreams_12, 
                style: style_streamsusnstreams_12,
                popuplayertitle: 'streams usn — streams',
                interactive: true,
                title: '<img src="styles/legend/streamsusnstreams_12.png" /> streams usn — streams'
            });
var format_Riversusnrivers_13 = new ol.format.GeoJSON();
var features_Riversusnrivers_13 = format_Riversusnrivers_13.readFeatures(json_Riversusnrivers_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Riversusnrivers_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Riversusnrivers_13.addFeatures(features_Riversusnrivers_13);
var lyr_Riversusnrivers_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Riversusnrivers_13, 
                style: style_Riversusnrivers_13,
                popuplayertitle: 'Rivers usn — rivers',
                interactive: true,
                title: '<img src="styles/legend/Riversusnrivers_13.png" /> Rivers usn — rivers'
            });
var format_RainfallstationCRC_14 = new ol.format.GeoJSON();
var features_RainfallstationCRC_14 = format_RainfallstationCRC_14.readFeatures(json_RainfallstationCRC_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RainfallstationCRC_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RainfallstationCRC_14.addFeatures(features_RainfallstationCRC_14);
var lyr_RainfallstationCRC_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RainfallstationCRC_14, 
                style: style_RainfallstationCRC_14,
                popuplayertitle: 'Rainfall station,CRC',
                interactive: true,
                title: '<img src="styles/legend/RainfallstationCRC_14.png" /> Rainfall station,CRC'
            });
var format_rfstation_15 = new ol.format.GeoJSON();
var features_rfstation_15 = format_rfstation_15.readFeatures(json_rfstation_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_rfstation_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rfstation_15.addFeatures(features_rfstation_15);
cluster_rfstation_15 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_rfstation_15
});
var lyr_rfstation_15 = new ol.layer.Vector({
                declutter: false,
                source:cluster_rfstation_15, 
                style: style_rfstation_15,
                popuplayertitle: 'rf station',
                interactive: true,
                title: '<img src="styles/legend/rfstation_15.png" /> rf station'
            });
var format_USNRESERVOIRSadded_16 = new ol.format.GeoJSON();
var features_USNRESERVOIRSadded_16 = format_USNRESERVOIRSadded_16.readFeatures(json_USNRESERVOIRSadded_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_USNRESERVOIRSadded_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_USNRESERVOIRSadded_16.addFeatures(features_USNRESERVOIRSadded_16);
var lyr_USNRESERVOIRSadded_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_USNRESERVOIRSadded_16, 
                style: style_USNRESERVOIRSadded_16,
                popuplayertitle: 'USN RESERVOIRS — added',
                interactive: true,
                title: '<img src="styles/legend/USNRESERVOIRSadded_16.png" /> USN RESERVOIRS — added'
            });
var format_USNDAMSusn_dams__dam_17 = new ol.format.GeoJSON();
var features_USNDAMSusn_dams__dam_17 = format_USNDAMSusn_dams__dam_17.readFeatures(json_USNDAMSusn_dams__dam_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_USNDAMSusn_dams__dam_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_USNDAMSusn_dams__dam_17.addFeatures(features_USNDAMSusn_dams__dam_17);
cluster_USNDAMSusn_dams__dam_17 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_USNDAMSusn_dams__dam_17
});
var lyr_USNDAMSusn_dams__dam_17 = new ol.layer.Vector({
                declutter: false,
                source:cluster_USNDAMSusn_dams__dam_17, 
                style: style_USNDAMSusn_dams__dam_17,
                popuplayertitle: 'USN DAMS — usn_dams__dam',
                interactive: true,
                title: '<img src="styles/legend/USNDAMSusn_dams__dam_17.png" /> USN DAMS — usn_dams__dam'
            });

lyr_contourusncontours_0.setVisible(true);lyr_mergedtehsils_1.setVisible(true);lyr_OSMStandard_2.setVisible(true);lyr_studyUSNstudy_site_3.setVisible(true);lyr_studydem3dnew_4.setVisible(true);lyr_mergedbufferfixed_5.setVisible(true);lyr_nanaksagarlulc2_6.setVisible(true);lyr_tumarialulc2_7.setVisible(true);lyr_baurlulc_8.setVisible(true);lyr_baigullulc_9.setVisible(true);lyr_haripuralulc2_10.setVisible(true);lyr_dhoralulc2_11.setVisible(true);lyr_streamsusnstreams_12.setVisible(true);lyr_Riversusnrivers_13.setVisible(true);lyr_RainfallstationCRC_14.setVisible(true);lyr_rfstation_15.setVisible(true);lyr_USNRESERVOIRSadded_16.setVisible(true);lyr_USNDAMSusn_dams__dam_17.setVisible(true);
var layersList = [lyr_contourusncontours_0,lyr_mergedtehsils_1,lyr_OSMStandard_2,lyr_studyUSNstudy_site_3,lyr_studydem3dnew_4,lyr_mergedbufferfixed_5,lyr_nanaksagarlulc2_6,lyr_tumarialulc2_7,lyr_baurlulc_8,lyr_baigullulc_9,lyr_haripuralulc2_10,lyr_dhoralulc2_11,lyr_streamsusnstreams_12,lyr_Riversusnrivers_13,lyr_RainfallstationCRC_14,lyr_rfstation_15,lyr_USNRESERVOIRSadded_16,lyr_USNDAMSusn_dams__dam_17];
lyr_contourusncontours_0.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_mergedtehsils_1.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'boundary': 'boundary', 'type': 'type', 'name': 'name', 'admin_level': 'admin_level', 'name:ur': 'name:ur', 'name:fa': 'name:fa', 'alt_name:ur': 'alt_name:ur', 'alt_name': 'alt_name', 'layer': 'layer', 'path': 'path', });
lyr_studyUSNstudy_site_3.set('fieldAliases', {'fid': 'fid', });
lyr_mergedbufferfixed_5.set('fieldAliases', {'fid': 'fid', 'dm_name': 'dm_name', 'dm_lat': 'dm_lat', 'dm_long': 'dm_long', 'Areal Description': 'Areal Description', 'Radius': 'Radius', 'layer': 'layer', 'path': 'path', });
lyr_streamsusnstreams_12.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'Length_km': 'Length_km', 'Average width': 'Average width', 'Max. Depth': 'Max. Depth', 'Flow Direction': 'Flow Direction', 'Stream _type': 'Stream _type', 'Source_location': 'Source_location', 'Mouth_location': 'Mouth_location', 'Land Use ': 'Land Use ', 'Nearby villages': 'Nearby villages', });
lyr_Riversusnrivers_13.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'waterway': 'waterway', 'fishing': 'fishing', 'name:en': 'name:en', 'layer': 'layer', 'bridge': 'bridge', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'tidal': 'tidal', 'width': 'width', 'tunnel': 'tunnel', 'seasonal': 'seasonal', 'intermittent': 'intermittent', 'name:kn': 'name:kn', 'int_name': 'int_name', 'name': 'name', 'boat': 'boat', });
lyr_RainfallstationCRC_14.set('fieldAliases', {'fid': 'fid', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'name': 'name', 'Ann. Avg. Rainfall(mm)': 'Ann. Avg. Rainfall(mm)', 'Monthly Avg. Rainfall(mm)': 'Monthly Avg. Rainfall(mm)', 'Est. Daily Rainfall 2016': 'Est. Daily Rainfall 2016', 'Est. Daily Rainfall 2018': 'Est. Daily Rainfall 2018', 'Est. Daily  Rainfall 2020(mm)': 'Est. Daily  Rainfall 2020(mm)', 'Total Monsoon Season Rainfall': 'Total Monsoon Season Rainfall', });
lyr_rfstation_15.set('fieldAliases', {'fid': 'fid', 'station_id': 'station_id', 'lat': 'lat', 'telemetry': 'telemetry', 'agency_id': 'agency_id', 'state_name': 'state_name', 'state_code': 'state_code', 'block_name': 'block_name', 'block_code': 'block_code', 'basin_name': 'basin_name', 'basin_code': 'basin_code', 'sub_basin1': 'sub_basin1', 'created_da': 'created_da', 'remarks': 'remarks', 'remarks1': 'remarks1', 'remarks2': 'remarks2', 'remarks3': 'remarks3', 'class': 'class', 'year': 'year', 'param': 'param', 'station_co': 'station_co', 'station_na': 'station_na', 'station_ty': 'station_ty', 'agency_nam': 'agency_nam', 'district_n': 'district_n', 'district_c': 'district_c', 'sub_basin_': 'sub_basin_', 'created_00': 'created_00', 'station_da': 'station_da', 'long': 'long', 'LOCATED IN': 'LOCATED IN', });
lyr_USNRESERVOIRSadded_16.set('fieldAliases', {'fid': 'fid', 'wbname': 'wbname', 'state': 'state', 'River': 'River', 'Type': 'Type', 'Height(m)': 'Height(m)', 'Height(feet)': 'Height(feet)', 'Length': 'Length', 'Length(feet)': 'Length(feet)', 'Reservoir Capacity(mcm)': 'Reservoir Capacity(mcm)', 'Catchment area(sqkm)': 'Catchment area(sqkm)', 'Description': 'Description', });
lyr_USNDAMSusn_dams__dam_17.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'dm_name': 'dm_name', 'dtcode': 'dtcode', 'state': 'state', 'dm_cmp_yr': 'dm_cmp_yr', 'dm_ses_zon': 'dm_ses_zon', 'River': 'River', 'Type': 'Type', 'Length(m)': 'Length(m)', 'Reservoir Capacity(mcm)': 'Reservoir Capacity(mcm)', 'Objectives': 'Objectives', 'Benefits': 'Benefits', 'Challenges': 'Challenges', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Height in m': 'Height in m', 'height in feet': 'height in feet', });
lyr_contourusncontours_0.set('fieldImages', {'fid': '', 'ID': '', 'ELEV': '', });
lyr_mergedtehsils_1.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'boundary': 'TextEdit', 'type': 'TextEdit', 'name': 'TextEdit', 'admin_level': 'TextEdit', 'name:ur': 'TextEdit', 'name:fa': 'TextEdit', 'alt_name:ur': 'TextEdit', 'alt_name': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_studyUSNstudy_site_3.set('fieldImages', {'fid': '', });
lyr_mergedbufferfixed_5.set('fieldImages', {'fid': '', 'dm_name': '', 'dm_lat': '', 'dm_long': '', 'Areal Description': '', 'Radius': '', 'layer': '', 'path': '', });
lyr_streamsusnstreams_12.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'Length_km': 'TextEdit', 'Average width': 'TextEdit', 'Max. Depth': 'TextEdit', 'Flow Direction': 'TextEdit', 'Stream _type': 'TextEdit', 'Source_location': 'TextEdit', 'Mouth_location': 'TextEdit', 'Land Use ': 'TextEdit', 'Nearby villages': 'TextEdit', });
lyr_Riversusnrivers_13.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'waterway': 'TextEdit', 'fishing': 'TextEdit', 'name:en': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'tidal': 'TextEdit', 'width': 'TextEdit', 'tunnel': 'TextEdit', 'seasonal': 'TextEdit', 'intermittent': 'TextEdit', 'name:kn': 'TextEdit', 'int_name': 'TextEdit', 'name': 'TextEdit', 'boat': 'TextEdit', });
lyr_RainfallstationCRC_14.set('fieldImages', {'fid': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'name': 'TextEdit', 'Ann. Avg. Rainfall(mm)': 'TextEdit', 'Monthly Avg. Rainfall(mm)': 'TextEdit', 'Est. Daily Rainfall 2016': 'TextEdit', 'Est. Daily Rainfall 2018': 'TextEdit', 'Est. Daily  Rainfall 2020(mm)': 'TextEdit', 'Total Monsoon Season Rainfall': 'TextEdit', });
lyr_rfstation_15.set('fieldImages', {'fid': 'TextEdit', 'station_id': 'TextEdit', 'lat': 'TextEdit', 'telemetry': 'TextEdit', 'agency_id': 'TextEdit', 'state_name': 'TextEdit', 'state_code': 'TextEdit', 'block_name': 'TextEdit', 'block_code': 'TextEdit', 'basin_name': 'TextEdit', 'basin_code': 'TextEdit', 'sub_basin1': 'TextEdit', 'created_da': 'DateTime', 'remarks': 'TextEdit', 'remarks1': 'TextEdit', 'remarks2': 'TextEdit', 'remarks3': 'TextEdit', 'class': 'TextEdit', 'year': 'TextEdit', 'param': 'TextEdit', 'station_co': 'TextEdit', 'station_na': 'TextEdit', 'station_ty': 'TextEdit', 'agency_nam': 'TextEdit', 'district_n': 'TextEdit', 'district_c': 'TextEdit', 'sub_basin_': 'TextEdit', 'created_00': 'DateTime', 'station_da': 'TextEdit', 'long': 'TextEdit', 'LOCATED IN': '', });
lyr_USNRESERVOIRSadded_16.set('fieldImages', {'fid': '', 'wbname': '', 'state': '', 'River': '', 'Type': '', 'Height(m)': '', 'Height(feet)': '', 'Length': '', 'Length(feet)': '', 'Reservoir Capacity(mcm)': '', 'Catchment area(sqkm)': '', 'Description': '', });
lyr_USNDAMSusn_dams__dam_17.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'dm_name': 'TextEdit', 'dtcode': 'TextEdit', 'state': 'TextEdit', 'dm_cmp_yr': 'TextEdit', 'dm_ses_zon': 'TextEdit', 'River': 'TextEdit', 'Type': 'TextEdit', 'Length(m)': 'TextEdit', 'Reservoir Capacity(mcm)': 'TextEdit', 'Objectives': 'TextEdit', 'Benefits': 'TextEdit', 'Challenges': 'TextEdit', 'Latitude': '', 'Longitude': '', 'Height in m': '', 'height in feet': '', });
lyr_contourusncontours_0.set('fieldLabels', {'fid': 'no label', 'ID': 'hidden field', 'ELEV': 'no label', });
lyr_mergedtehsils_1.set('fieldLabels', {'fid': 'no label', 'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'boundary': 'hidden field', 'type': 'hidden field', 'name': 'no label', 'admin_level': 'hidden field', 'name:ur': 'no label', 'name:fa': 'hidden field', 'alt_name:ur': 'hidden field', 'alt_name': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_studyUSNstudy_site_3.set('fieldLabels', {'fid': 'no label', });
lyr_mergedbufferfixed_5.set('fieldLabels', {'fid': 'no label', 'dm_name': 'no label', 'dm_lat': 'hidden field', 'dm_long': 'hidden field', 'Areal Description': 'no label', 'Radius': 'no label', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_streamsusnstreams_12.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'Length_km': 'no label', 'Average width': 'no label', 'Max. Depth': 'no label', 'Flow Direction': 'no label', 'Stream _type': 'no label', 'Source_location': 'no label', 'Mouth_location': 'no label', 'Land Use ': 'no label', 'Nearby villages': 'no label', });
lyr_Riversusnrivers_13.set('fieldLabels', {'fid': 'hidden field', 'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'waterway': 'hidden field', 'fishing': 'hidden field', 'name:en': 'no label', 'layer': 'no label', 'bridge': 'hidden field', 'wikipedia': 'hidden field', 'wikidata': 'hidden field', 'tidal': 'hidden field', 'width': 'hidden field', 'tunnel': 'hidden field', 'seasonal': 'hidden field', 'intermittent': 'hidden field', 'name:kn': 'hidden field', 'int_name': 'hidden field', 'name': 'hidden field', 'boat': 'hidden field', });
lyr_RainfallstationCRC_14.set('fieldLabels', {'fid': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'name': 'no label', 'Ann. Avg. Rainfall(mm)': 'no label', 'Monthly Avg. Rainfall(mm)': 'no label', 'Est. Daily Rainfall 2016': 'no label', 'Est. Daily Rainfall 2018': 'no label', 'Est. Daily  Rainfall 2020(mm)': 'no label', 'Total Monsoon Season Rainfall': 'no label', });
lyr_rfstation_15.set('fieldLabels', {'fid': 'no label', 'station_id': 'no label', 'lat': 'no label', 'telemetry': 'no label', 'agency_id': 'no label', 'state_name': 'no label', 'state_code': 'no label', 'block_name': 'no label', 'block_code': 'no label', 'basin_name': 'no label', 'basin_code': 'no label', 'sub_basin1': 'no label', 'created_da': 'no label', 'remarks': 'no label', 'remarks1': 'no label', 'remarks2': 'no label', 'remarks3': 'no label', 'class': 'no label', 'year': 'no label', 'param': 'no label', 'station_co': 'no label', 'station_na': 'no label', 'station_ty': 'no label', 'agency_nam': 'no label', 'district_n': 'no label', 'district_c': 'no label', 'sub_basin_': 'no label', 'created_00': 'no label', 'station_da': 'no label', 'long': 'no label', 'LOCATED IN': 'no label', });
lyr_USNRESERVOIRSadded_16.set('fieldLabels', {'fid': 'hidden field', 'wbname': 'no label', 'state': 'no label', 'River': 'no label', 'Type': 'no label', 'Height(m)': 'no label', 'Height(feet)': 'no label', 'Length': 'no label', 'Length(feet)': 'no label', 'Reservoir Capacity(mcm)': 'no label', 'Catchment area(sqkm)': 'no label', 'Description': 'no label', });
lyr_USNDAMSusn_dams__dam_17.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'dm_name': 'no label', 'dtcode': 'no label', 'state': 'no label', 'dm_cmp_yr': 'no label', 'dm_ses_zon': 'no label', 'River': 'no label', 'Type': 'no label', 'Length(m)': 'hidden field', 'Reservoir Capacity(mcm)': 'hidden field', 'Objectives': 'no label', 'Benefits': 'no label', 'Challenges': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Height in m': 'no label', 'height in feet': 'no label', });
lyr_USNDAMSusn_dams__dam_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});