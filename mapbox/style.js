
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "Ath_basemap_0": {
            "type": "raster",
            "tiles": ["https://api.mapbox.com/styles/v1/abbiesawyer/ck6cl9pfm55171inwyrkqh1e8/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYWJiaWVzYXd5ZXIiLCJhIjoiY2s2Y2tiOHJ4MWQ4cjNxcGJ4ZWUwaTNzMCJ9.tRL33Braw52lvgXiHXoObQ"],
            "tileSize": 256
        },
        "Boundary_1": {
            "type": "geojson",
            "data": json_Boundary_1
        }
                    ,
        "Streets_2": {
            "type": "geojson",
            "data": json_Streets_2
        }
                    ,
        "Parcels_3": {
            "type": "geojson",
            "data": json_Parcels_3
        }
                    ,
        "Buildings_4": {
            "type": "geojson",
            "data": json_Buildings_4
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_Ath_basemap_0_0",
            "type": "raster",
            "source": "Ath_basemap_0"
        },
        {
            "id": "lyr_Boundary_1_0",
            "type": "fill",
            "source": "Boundary_1",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#9b6f74'}
        }
,
        {
            "id": "lyr_Streets_2_0",
            "type": "line",
            "source": "Streets_2",
            "layout": {},
            "paint": {'line-width': 1.88976377955, 'line-opacity': 1.0, 'line-color': '#ffffff'}
        }
,
        {
            "id": "lyr_Parcels_3_0",
            "type": "fill",
            "source": "Parcels_3",
            "layout": {},
            "paint": {'fill-opacity': 0.6, 'fill-color': '#faf7f5'}
        }
,
        {
            "id": "lyr_Buildings_4_0",
            "type": "fill",
            "source": "Buildings_4",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#680c00'}
        }
],
}