<template>
  <q-page class="flex flex-center">
    <div class="full-width row wrap justify-center items-center content-center">
      <q-form @submit="grabaUsuario" class="q-gutter-md">
        <q-input
          name="name"
          v-model="name"
          color="primary"
          label="Nombre de Usuario"
          clearable
        />
        <div>
          <q-btn label="Entrar" type="submit" color="primary" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import awsconfig from './../aws-exports'
Amplify.configure(awsconfig)

import { createUsuarios } from './../graphql/mutations'

export default {
  name: 'PageIndex',
  data() {
    return {
      name: '',
    }
  },
  methods: {
    async grabaUsuario() {
      const todo = { name: this.name }
      const dataUser = await API.graphql(
        graphqlOperation(createUsuarios, { input: todo }),
      )
      console.log(dataUser)
      this.$q.localStorage.set('usuario', dataUser.data.createUsuarios)
      this.$router.push('/page1')
    },
  },
}
</script>
