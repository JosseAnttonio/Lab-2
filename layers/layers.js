var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Barrios_Biobio_1 = new ol.format.GeoJSON();
var features_Barrios_Biobio_1 = format_Barrios_Biobio_1.readFeatures(json_Barrios_Biobio_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Barrios_Biobio_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Barrios_Biobio_1.addFeatures(features_Barrios_Biobio_1);
var lyr_Barrios_Biobio_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Barrios_Biobio_1, 
                style: style_Barrios_Biobio_1,
                popuplayertitle: 'Barrios_Biobio',
                interactive: true,
                title: '<img src="styles/legend/Barrios_Biobio_1.png" /> Barrios_Biobio'
            });
var format_PuntosporBarrio_2 = new ol.format.GeoJSON();
var features_PuntosporBarrio_2 = format_PuntosporBarrio_2.readFeatures(json_PuntosporBarrio_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PuntosporBarrio_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PuntosporBarrio_2.addFeatures(features_PuntosporBarrio_2);
var lyr_PuntosporBarrio_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PuntosporBarrio_2, 
                style: style_PuntosporBarrio_2,
                popuplayertitle: 'Puntos por Barrio',
                interactive: true,
                title: '<img src="styles/legend/PuntosporBarrio_2.png" /> Puntos por Barrio'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Barrios_Biobio_1.setVisible(true);lyr_PuntosporBarrio_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Barrios_Biobio_1,lyr_PuntosporBarrio_2];
lyr_Barrios_Biobio_1.set('fieldAliases', {'Id': 'Id', 'Nombre': 'Nombre', 'Area': 'Area', 'hab_m2': 'hab_m2', 'Sum_Poblac': 'Sum_Poblac', 'av_hab': 'av_hab', 'Long_tLic': 'Long_tLic', 'Long_tNLic': 'Long_tNLic', 'Suma_Trans': 'Suma_Trans', 'porc_cober': 'porc_cober', 'Distance': 'Distance', 'LongcicloK': 'LongcicloK', 'Long_rvial': 'Long_rvial', 'CUT_REG': 'CUT_REG', 'CUT_PROV': 'CUT_PROV', 'CUT_COM': 'CUT_COM', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'SUPERFICIE': 'SUPERFICIE', });
lyr_PuntosporBarrio_2.set('fieldAliases', {'Name': 'Name', 'Dirección': 'Dirección', 'Tipo': 'Tipo', 'Descrip': 'Descrip', 'Video': 'Video', 'Horario': 'Horario', });
lyr_Barrios_Biobio_1.set('fieldImages', {'Id': 'Range', 'Nombre': 'TextEdit', 'Area': 'TextEdit', 'hab_m2': 'TextEdit', 'Sum_Poblac': 'Range', 'av_hab': 'TextEdit', 'Long_tLic': 'TextEdit', 'Long_tNLic': 'TextEdit', 'Suma_Trans': 'TextEdit', 'porc_cober': 'TextEdit', 'Distance': 'TextEdit', 'LongcicloK': 'TextEdit', 'Long_rvial': 'TextEdit', 'CUT_REG': 'TextEdit', 'CUT_PROV': 'TextEdit', 'CUT_COM': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'SUPERFICIE': 'TextEdit', });
lyr_PuntosporBarrio_2.set('fieldImages', {'Name': 'TextEdit', 'Dirección': 'TextEdit', 'Tipo': 'TextEdit', 'Descrip': 'TextEdit', 'Video': 'TextEdit', 'Horario': 'TextEdit', });
lyr_Barrios_Biobio_1.set('fieldLabels', {'Id': 'no label', 'Nombre': 'inline label - always visible', 'Area': 'no label', 'hab_m2': 'no label', 'Sum_Poblac': 'no label', 'av_hab': 'no label', 'Long_tLic': 'no label', 'Long_tNLic': 'no label', 'Suma_Trans': 'no label', 'porc_cober': 'no label', 'Distance': 'no label', 'LongcicloK': 'no label', 'Long_rvial': 'no label', 'CUT_REG': 'no label', 'CUT_PROV': 'no label', 'CUT_COM': 'no label', 'REGION': 'no label', 'PROVINCIA': 'no label', 'COMUNA': 'no label', 'SUPERFICIE': 'no label', });
lyr_PuntosporBarrio_2.set('fieldLabels', {'Name': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Tipo': 'inline label - always visible', 'Descrip': 'inline label - always visible', 'Video': 'inline label - always visible', 'Horario': 'inline label - always visible', });
lyr_PuntosporBarrio_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});