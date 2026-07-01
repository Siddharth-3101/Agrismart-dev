import { useState } from "react";

import {

    MapContainer,
    TileLayer,
    LayersControl,
    ScaleControl

} from "react-leaflet";

import Geoman from "react-leaflet-geoman-v2";

import * as turf from "@turf/turf";

import L from "leaflet";

import "leaflet/dist/leaflet.css";

import "@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css";

import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({

    iconRetinaUrl: markerIcon2x,

    iconUrl: markerIcon,

    shadowUrl: markerShadow

});

const {

    BaseLayer

} = LayersControl;

function LeafletMap({

    onPolygonChange

}){

    const [polygon,setPolygon] = useState(null);

    /* =======================================
            SAVE POLYGON
    ======================================= */

    const savePolygon = (layer)=>{

        if(!layer)

            return;

        const geoJson = layer.toGeoJSON();

        const coords = geoJson.geometry.coordinates[0];

        const polygonObject = turf.polygon([coords]);

        const area = turf.area(polygonObject);

        const coordinates = coords.map(

            ([lng,lat])=>[lat,lng]

        );

        const center = layer.getBounds().getCenter();

        const data = {

            geoJson,

            coordinates,

            area,

            acres:Number(

                area*0.000247105

            ).toFixed(2),

            hectares:Number(

                area/10000

            ).toFixed(2),

            center:{

                lat:center.lat,

                lng:center.lng

            }

        };

        setPolygon(data);

        onPolygonChange(data);

    };

    return(

        <div className="leafletWrapper">

            <MapContainer

                center={[11.0168,76.9558]}

                zoom={16}

                scrollWheelZoom={true}

                style={{

                    width:"100%",

                    height:"650px",

                    borderRadius:"18px"

                }}

            >

                <LayersControl position="topright">

                    <BaseLayer checked name="Satellite">

                        <TileLayer

                            attribution="Esri"

                            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"

                        />

                    </BaseLayer>

                    <BaseLayer name="Street">

                        <TileLayer

                            attribution="OpenStreetMap"

                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

                        />

                    </BaseLayer>

                </LayersControl>

                {/* Satellite Labels */}

                <TileLayer

                    attribution="Esri"

                    url="https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}"

                />

                <ScaleControl position="bottomleft"/>