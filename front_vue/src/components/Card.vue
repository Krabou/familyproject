<template>
  <section>
    <GmapMap
      :center="{ lat: 10, lng: 10 }"
      :zoom="7"
      map-type-id="terrain"
      style="width: 100%; height:100%"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      />
    </GmapMap>
  </section>
</template>

<script>
export  default  { 
    data  ( )  { 
      return  { 
        center : { lat : 10.0 ,  lng : 10.0 } , 
        markers : [ { 
          position : { lat : 10.0 ,  lng : 10.0 } 
        } ,  { 
          position : { lat : 11.0 ,  lng : 11.0 } 
        } ] 
      } 
    } 
  }
</script>

<style lang="scss" scoped>
</style>


