var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Area_de_estudio_1 = new ol.format.GeoJSON();
var features_Area_de_estudio_1 = format_Area_de_estudio_1.readFeatures(json_Area_de_estudio_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Area_de_estudio_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Area_de_estudio_1.addFeatures(features_Area_de_estudio_1);
var lyr_Area_de_estudio_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Area_de_estudio_1, 
                style: style_Area_de_estudio_1,
                popuplayertitle: 'Area_de_estudio',
                interactive: true,
                title: '<img src="styles/legend/Area_de_estudio_1.png" /> Area_de_estudio'
            });
var format_parcelas_2 = new ol.format.GeoJSON();
var features_parcelas_2 = format_parcelas_2.readFeatures(json_parcelas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parcelas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parcelas_2.addFeatures(features_parcelas_2);
var lyr_parcelas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_parcelas_2, 
                style: style_parcelas_2,
                popuplayertitle: 'parcelas',
                interactive: true,
    title: 'parcelas<br />\
    <img src="styles/legend/parcelas_2_0.png" /> Residencial<br />\
    <img src="styles/legend/parcelas_2_1.png" /> Suelo Vacante<br />\
    <img src="styles/legend/parcelas_2_2.png" /> Comercial<br />\
    <img src="styles/legend/parcelas_2_3.png" /> Area Verde<br />\
    <img src="styles/legend/parcelas_2_4.png" /> Equipamiento<br />' });
var format_lotes_urbanos_3 = new ol.format.GeoJSON();
var features_lotes_urbanos_3 = format_lotes_urbanos_3.readFeatures(json_lotes_urbanos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lotes_urbanos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lotes_urbanos_3.addFeatures(features_lotes_urbanos_3);
var lyr_lotes_urbanos_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lotes_urbanos_3, 
                style: style_lotes_urbanos_3,
                popuplayertitle: 'lotes_urbanos',
                interactive: true,
    title: 'lotes_urbanos<br />\
    <img src="styles/legend/lotes_urbanos_3_0.png" /> Residencial<br />\
    <img src="styles/legend/lotes_urbanos_3_1.png" /> Suelo Vacante<br />\
    <img src="styles/legend/lotes_urbanos_3_2.png" /> Comercial<br />\
    <img src="styles/legend/lotes_urbanos_3_3.png" /> Area Verde<br />\
    <img src="styles/legend/lotes_urbanos_3_4.png" /> Equipamiento<br />' });
var format_Manzanas_4 = new ol.format.GeoJSON();
var features_Manzanas_4 = format_Manzanas_4.readFeatures(json_Manzanas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Manzanas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Manzanas_4.addFeatures(features_Manzanas_4);
var lyr_Manzanas_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Manzanas_4, 
                style: style_Manzanas_4,
                popuplayertitle: 'Manzanas',
                interactive: true,
                title: '<img src="styles/legend/Manzanas_4.png" /> Manzanas'
            });
var format_red_vial_5 = new ol.format.GeoJSON();
var features_red_vial_5 = format_red_vial_5.readFeatures(json_red_vial_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_red_vial_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_red_vial_5.addFeatures(features_red_vial_5);
var lyr_red_vial_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_red_vial_5, 
                style: style_red_vial_5,
                popuplayertitle: 'red_vial',
                interactive: true,
                title: '<img src="styles/legend/red_vial_5.png" /> red_vial'
            });
var format_hidrografia_6 = new ol.format.GeoJSON();
var features_hidrografia_6 = format_hidrografia_6.readFeatures(json_hidrografia_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hidrografia_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hidrografia_6.addFeatures(features_hidrografia_6);
var lyr_hidrografia_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hidrografia_6, 
                style: style_hidrografia_6,
                popuplayertitle: 'hidrografia',
                interactive: true,
                title: '<img src="styles/legend/hidrografia_6.png" /> hidrografia'
            });
var format_Zona_de_riesgo_7 = new ol.format.GeoJSON();
var features_Zona_de_riesgo_7 = format_Zona_de_riesgo_7.readFeatures(json_Zona_de_riesgo_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zona_de_riesgo_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zona_de_riesgo_7.addFeatures(features_Zona_de_riesgo_7);
var lyr_Zona_de_riesgo_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zona_de_riesgo_7, 
                style: style_Zona_de_riesgo_7,
                popuplayertitle: 'Zona_de_riesgo',
                interactive: true,
    title: 'Zona_de_riesgo<br />\
    <img src="styles/legend/Zona_de_riesgo_7_0.png" /> Cota <= 4.5 msnm<br />\
    <img src="styles/legend/Zona_de_riesgo_7_1.png" /> 4.5 < Cota <= 5.5 msnm<br />\
    <img src="styles/legend/Zona_de_riesgo_7_2.png" /> Cota > 5.5 msnm<br />' });
var format_Accesibilidad_educativa_300m_8 = new ol.format.GeoJSON();
var features_Accesibilidad_educativa_300m_8 = format_Accesibilidad_educativa_300m_8.readFeatures(json_Accesibilidad_educativa_300m_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Accesibilidad_educativa_300m_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Accesibilidad_educativa_300m_8.addFeatures(features_Accesibilidad_educativa_300m_8);
var lyr_Accesibilidad_educativa_300m_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Accesibilidad_educativa_300m_8, 
                style: style_Accesibilidad_educativa_300m_8,
                popuplayertitle: 'Accesibilidad_educativa_300m',
                interactive: true,
                title: '<img src="styles/legend/Accesibilidad_educativa_300m_8.png" /> Accesibilidad_educativa_300m'
            });
var format_equipamientos_9 = new ol.format.GeoJSON();
var features_equipamientos_9 = format_equipamientos_9.readFeatures(json_equipamientos_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_equipamientos_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_equipamientos_9.addFeatures(features_equipamientos_9);
var lyr_equipamientos_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_equipamientos_9, 
                style: style_equipamientos_9,
                popuplayertitle: 'equipamientos',
                interactive: true,
                title: '<img src="styles/legend/equipamientos_9.png" /> equipamientos'
            });
var format_Riesgo_de_inundacion_10 = new ol.format.GeoJSON();
var features_Riesgo_de_inundacion_10 = format_Riesgo_de_inundacion_10.readFeatures(json_Riesgo_de_inundacion_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Riesgo_de_inundacion_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Riesgo_de_inundacion_10.addFeatures(features_Riesgo_de_inundacion_10);
var lyr_Riesgo_de_inundacion_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Riesgo_de_inundacion_10, 
                style: style_Riesgo_de_inundacion_10,
                popuplayertitle: 'Riesgo_de_inundacion',
                interactive: true,
                title: '<img src="styles/legend/Riesgo_de_inundacion_10.png" /> Riesgo_de_inundacion'
            });
var format_Accesibilidad_salud_600m_11 = new ol.format.GeoJSON();
var features_Accesibilidad_salud_600m_11 = format_Accesibilidad_salud_600m_11.readFeatures(json_Accesibilidad_salud_600m_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Accesibilidad_salud_600m_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Accesibilidad_salud_600m_11.addFeatures(features_Accesibilidad_salud_600m_11);
var lyr_Accesibilidad_salud_600m_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Accesibilidad_salud_600m_11, 
                style: style_Accesibilidad_salud_600m_11,
                popuplayertitle: 'Accesibilidad_salud_600m',
                interactive: true,
                title: '<img src="styles/legend/Accesibilidad_salud_600m_11.png" /> Accesibilidad_salud_600m'
            });
var format_area_verde_12 = new ol.format.GeoJSON();
var features_area_verde_12 = format_area_verde_12.readFeatures(json_area_verde_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_area_verde_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_area_verde_12.addFeatures(features_area_verde_12);
var lyr_area_verde_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_area_verde_12, 
                style: style_area_verde_12,
                popuplayertitle: 'area_verde',
                interactive: true,
                title: '<img src="styles/legend/area_verde_12.png" /> area_verde'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Area_de_estudio_1.setVisible(false);lyr_parcelas_2.setVisible(true);lyr_lotes_urbanos_3.setVisible(true);lyr_Manzanas_4.setVisible(false);lyr_red_vial_5.setVisible(true);lyr_hidrografia_6.setVisible(true);lyr_Zona_de_riesgo_7.setVisible(false);lyr_Accesibilidad_educativa_300m_8.setVisible(false);lyr_equipamientos_9.setVisible(true);lyr_Riesgo_de_inundacion_10.setVisible(false);lyr_Accesibilidad_salud_600m_11.setVisible(false);lyr_area_verde_12.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,lyr_Area_de_estudio_1,lyr_parcelas_2,lyr_lotes_urbanos_3,lyr_Manzanas_4,lyr_red_vial_5,lyr_hidrografia_6,lyr_Zona_de_riesgo_7,lyr_Accesibilidad_educativa_300m_8,lyr_equipamientos_9,lyr_Riesgo_de_inundacion_10,lyr_Accesibilidad_salud_600m_11,lyr_area_verde_12];
lyr_Area_de_estudio_1.set('fieldAliases', {'id': 'id', });
lyr_parcelas_2.set('fieldAliases', {'fid': 'fid', 'cod_predio': 'cod_predio', 'uso_suelo': 'uso_suelo', 'area_m2': 'area_m2', 'valor_m2': 'valor_m2', });
lyr_lotes_urbanos_3.set('fieldAliases', {'fid': 'fid', 'id_lote': 'id_lote', 'manzana': 'manzana', 'uso': 'uso', 'n_habitantes': 'n_habitantes', });
lyr_Manzanas_4.set('fieldAliases', {'fid': 'fid', 'manzana': 'manzana', 'area_m2': 'area_m2', });
lyr_red_vial_5.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'tipo_via': 'tipo_via', 'ancho_m': 'ancho_m', });
lyr_hidrografia_6.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'tipo': 'tipo', 'cota_msnm': 'cota_msnm', });
lyr_Zona_de_riesgo_7.set('fieldAliases', {'fid': 'fid', 'cod_predio': 'cod_predio', 'uso_suelo': 'uso_suelo', 'area_m2': 'area_m2', 'valor_m2': 'valor_m2', 'cota_msnm': 'cota_msnm', });
lyr_Accesibilidad_educativa_300m_8.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'tipo': 'tipo', 'capacidad': 'capacidad', });
lyr_equipamientos_9.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'tipo': 'tipo', 'capacidad': 'capacidad', });
lyr_Riesgo_de_inundacion_10.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'tipo': 'tipo', 'cota_msnm': 'cota_msnm', });
lyr_Accesibilidad_salud_600m_11.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'tipo': 'tipo', 'capacidad': 'capacidad', });
lyr_area_verde_12.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'tipo': 'tipo', 'area_m2': 'area_m2', });
lyr_Area_de_estudio_1.set('fieldImages', {'id': 'TextEdit', });
lyr_parcelas_2.set('fieldImages', {'fid': 'TextEdit', 'cod_predio': 'TextEdit', 'uso_suelo': 'TextEdit', 'area_m2': 'TextEdit', 'valor_m2': 'TextEdit', });
lyr_lotes_urbanos_3.set('fieldImages', {'fid': 'TextEdit', 'id_lote': 'TextEdit', 'manzana': 'TextEdit', 'uso': 'TextEdit', 'n_habitantes': 'Range', });
lyr_Manzanas_4.set('fieldImages', {'fid': 'TextEdit', 'manzana': '', 'area_m2': '', });
lyr_red_vial_5.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'tipo_via': 'TextEdit', 'ancho_m': 'TextEdit', });
lyr_hidrografia_6.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'tipo': 'TextEdit', 'cota_msnm': 'TextEdit', });
lyr_Zona_de_riesgo_7.set('fieldImages', {'fid': 'TextEdit', 'cod_predio': 'TextEdit', 'uso_suelo': 'TextEdit', 'area_m2': 'TextEdit', 'valor_m2': 'TextEdit', 'cota_msnm': 'Range', });
lyr_Accesibilidad_educativa_300m_8.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'tipo': 'TextEdit', 'capacidad': 'Range', });
lyr_equipamientos_9.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'tipo': 'TextEdit', 'capacidad': 'Range', });
lyr_Riesgo_de_inundacion_10.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'tipo': 'TextEdit', 'cota_msnm': 'TextEdit', });
lyr_Accesibilidad_salud_600m_11.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'tipo': 'TextEdit', 'capacidad': 'Range', });
lyr_area_verde_12.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'tipo': 'TextEdit', 'area_m2': 'TextEdit', });
lyr_Area_de_estudio_1.set('fieldLabels', {'id': 'no label', });
lyr_parcelas_2.set('fieldLabels', {'fid': 'inline label - visible with data', 'cod_predio': 'inline label - visible with data', 'uso_suelo': 'inline label - visible with data', 'area_m2': 'inline label - visible with data', 'valor_m2': 'inline label - always visible', });
lyr_lotes_urbanos_3.set('fieldLabels', {'fid': 'inline label - visible with data', 'id_lote': 'inline label - visible with data', 'manzana': 'inline label - visible with data', 'uso': 'inline label - visible with data', 'n_habitantes': 'inline label - visible with data', });
lyr_Manzanas_4.set('fieldLabels', {'fid': 'inline label - always visible', 'manzana': 'inline label - visible with data', 'area_m2': 'inline label - visible with data', });
lyr_red_vial_5.set('fieldLabels', {'fid': 'inline label - visible with data', 'nombre': 'inline label - visible with data', 'tipo_via': 'inline label - visible with data', 'ancho_m': 'inline label - visible with data', });
lyr_hidrografia_6.set('fieldLabels', {'fid': 'inline label - visible with data', 'nombre': 'inline label - visible with data', 'tipo': 'inline label - always visible', 'cota_msnm': 'inline label - visible with data', });
lyr_Zona_de_riesgo_7.set('fieldLabels', {'fid': 'inline label - visible with data', 'cod_predio': 'inline label - visible with data', 'uso_suelo': 'inline label - visible with data', 'area_m2': 'inline label - visible with data', 'valor_m2': 'inline label - visible with data', 'cota_msnm': 'inline label - visible with data', });
lyr_Accesibilidad_educativa_300m_8.set('fieldLabels', {'fid': 'inline label - visible with data', 'nombre': 'inline label - visible with data', 'tipo': 'inline label - visible with data', 'capacidad': 'inline label - visible with data', });
lyr_equipamientos_9.set('fieldLabels', {'fid': 'inline label - visible with data', 'nombre': 'inline label - visible with data', 'tipo': 'inline label - visible with data', 'capacidad': 'inline label - visible with data', });
lyr_Riesgo_de_inundacion_10.set('fieldLabels', {'fid': 'inline label - visible with data', 'nombre': 'inline label - visible with data', 'tipo': 'inline label - visible with data', 'cota_msnm': 'inline label - visible with data', });
lyr_Accesibilidad_salud_600m_11.set('fieldLabels', {'fid': 'inline label - visible with data', 'nombre': 'inline label - visible with data', 'tipo': 'inline label - visible with data', 'capacidad': 'inline label - visible with data', });
lyr_area_verde_12.set('fieldLabels', {'fid': 'inline label - visible with data', 'nombre': 'inline label - visible with data', 'tipo': 'inline label - visible with data', 'area_m2': 'inline label - visible with data', });
lyr_area_verde_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});