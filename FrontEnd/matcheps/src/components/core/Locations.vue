<template>
  <div class="locations">
    <ListFilter
      @change="updateSelectedEps"
      :title="'Seleccione las EPS'"
      :list="epsList"
      v-if="epsList"
      :unique="true"
    />
    <div class="locations__map">
      <GmapMap
        :center="{ lat: 4.678149, lng: -74.073771 }"
        :zoom="12"
        map-type-id="roadmap"
        style="width: 85%; height: auto;"
        ref="map"
      >
      </GmapMap>
    </div>
  </div>
</template>

<script>
import ListFilter from '@components/shared/ListFilter';
import api from '@utils/api.js';

export default {
  name: 'Locations',
  components: { ListFilter },
  data() {
    return {
      epsList: [],
      selectedEps: null,
      markers: [],
      map: null,
    };
  },
  mounted() {
    this.getEpsList();
    this.$nextTick(() => {
      this.$refs.map.$mapPromise.then((ref) => {
        this.map = ref;
      });
    });
  },
  methods: {
    async getEpsList() {
      this.epsList = await api.get('eps');
      this.epsList = this.epsList.map((eps) => ({
        id: eps.id,
        name: eps.name,
      }));
    },
    getEpsMarkers() {
      const epsName = this.epsList.filter((eps) => {
        return eps.id === this.selectedEps;
      })[0].name;

      var request = {
        query: epsName,
      };

      var service = new google.maps.places.PlacesService(this.map);

      service.textSearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            this.createMarker(results[i]);
          }

          this.map.setCenter(results[0].geometry.location);
        }
      });
    },
    createMarker(place) {
      var marker = new google.maps.Marker({
        map: this.map,
        position: place.geometry.location,
      });

      this.markers.push(marker);

      var infoWindow = new google.maps.InfoWindow();
      var service = new google.maps.places.PlacesService(this.map);

      google.maps.event.addListener(marker, 'click', function () {
        let desc = `
        <span style="font-size: 2em">
            <strong>${place.name}</strong>
            ${place.formatted_address}
            </span>
        `;

        infoWindow.close();
        infoWindow.setContent(desc);
        infoWindow.open(this.map, this);
      });
    },
    updateSelectedEps(selected) {
      this.selectedEps = selected[0];
      this.getEpsMarkers();
      this.clearMarkers();
    },
    clearMarkers() {
      this.markers.map((marker) => {
        marker.setMap(null);
      });

      this.markers = [];
    },
  },
};
</script>
