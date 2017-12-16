<template>
  <div :ref="id" :action="url" class="dropzone" :id="id">
    <input type="file" name="file">
  </div>
</template>

<script>
import Dropzone from 'dropzone';
import 'dropzone/dist/dropzone.css';
Dropzone.autoDiscover = false;
export default {
  data() {
    return {
      dropzone: '',
      initOnce: true
    }
  },
  mounted() {
    const element = document.getElementById(this.id);
  }
}
</script>
