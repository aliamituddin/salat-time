<template lang="pug">
.current-time
  span.clock
    | {{hour}}
    span.clock__ticker &nbsp;:&nbsp;
    | {{minute}}
</template>

<script>
  import { format } from 'date-fns';

  const INTERVAL = 1000;

  export default {
    data() {
      return {
        dateObj: new Date(),
      };
    },
    computed: {
      hour() {
        return format(this.dateObj, 'HH');
      },
      minute() {
        return format(this.dateObj, 'mm');
      }
    },
    methods: {
      updateTime() {
        this.dateObj = new Date();
      }
    },
    created() {
      setInterval(this.updateTime.bind(this), INTERVAL);
    }
  }
</script>
