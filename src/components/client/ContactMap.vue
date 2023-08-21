<template lang="">
    <MapboxMap
        style=" width: 550px; height: 300px; border-radius: 15px; border: 2px solid lime"
        access-token="pk.eyJ1IjoibWluaG5uIiwiYSI6ImNsZTV4a2JudzAwNGwzcG1ycGRkNWp1bDcifQ.vPDFDfqa5J5Zrqghpz68RQ"
        map-style="mapbox://styles/mapbox/streets-v9"
        :center="mapCenter"
        :zoom="15" 
    >
        <MapboxMarker :lng-lat="mapCenter" popup>
            <template v-slot:popup>
                <p>Freshfood</p>
            </template>
        </MapboxMarker>
        <MapboxGeolocateControl/>
        <MapboxNavigationControl position="bottom-right" />
    </MapboxMap>
</template>
<script>
import { MapboxMap, MapboxMarker, MapboxGeolocateControl, MapboxNavigationControl} from '@studiometa/vue-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { ref } from 'vue';
export default {
    components: {
        MapboxMap,
        MapboxMarker,
        MapboxGeolocateControl,
        MapboxNavigationControl 
    },
    data(){
        return{
            mapCenter : ref([105.8342, 21.0278])
        }
    }
}
</script>
<style lang="">
    
</style>