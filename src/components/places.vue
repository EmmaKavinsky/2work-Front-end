<template>
    <places
        v-model="form.country.label"
        :placeholder= "$t('Location_where')"
        @change="val => { form.country.data = val }"
        :options="options"
    >
    </places>
</template>

<script>
import Places from 'vue-places';

export default {
  methods: {
  },
  data() {
    return {
      options: {
        appId: "pl0LYUQQQIMV",
        apiKey: "d5c388ca0166f87b386a163270b7f335"
      },
      form: {
        country: {
          label: null,
          data: {},
        },
      },
    }
  },
  components: {
    Places
  }
}
</script>
