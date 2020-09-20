<template>
  <q-page class="flex flex-center">
    <div class="full-width row wrap justify-center items-center content-center">
      <q-list class="full-width">
        <q-item v-for="item in datos" :key="item.id">
          <q-item-section>
            <q-item-label>{{ item.usuario.name }}</q-item-label>
            <q-item-label caption>{{ item.mensaje }}</q-item-label>
          </q-item-section>
          <q-item-section side top>
            <q-item-label caption>
              {{ date.formatDate(item.createdAt, 'DD/MM/YYYY HH:mm:ss') }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
    <div class="full-width row wrap justify-center items-center content-center">
      <q-form @submit="grabaMensaje" class="q-gutter-md">
        <q-input
          name="mensaje"
          v-model="mensaje"
          color="primary"
          label="Escribe tu mensaje"
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

import { date } from 'quasar'

import { createMensajes } from './../graphql/mutations'

import { listMensajess } from './../graphql/queries'

import { onCreateMensajes, onCreateUsuarios } from './../graphql/subscriptions'

export default {
  name: 'Page1',
  data() {
    return {
      usuario: '',
      datos: [],
      date: date,
      mensaje: '',
      subscription: null,
      subscription2: null,
    }
  },
  created() {
    this.$date = date
  },
  mounted() {
    this.usuario = this.$q.localStorage.getItem('usuario')
    this.ListarMensajes()
    this.suscribe()
    this.suscribe2()
  },
  methods: {
    async ListarMensajes() {
      const dataMensajes = await API.graphql(graphqlOperation(listMensajess))
      console.log(
        'TCL: ListarMensajes -> dataMensajes',
        dataMensajes.data.listMensajess.items,
      )
      this.datos = dataMensajes.data.listMensajess.items
    },

    async suscribe() {
      this.subscription = API.graphql(
        graphqlOperation(onCreateMensajes),
      ).subscribe({
        next: (todoData) => {
          console.log(
            'TCL: suscribe -> todoData',
            todoData.value.data.onCreateMensajes,
          )
          this.datos.push(todoData.value.data.onCreateMensajes)
        },
      })
    },

    async suscribe2() {
      this.subscription2 = API.graphql(
        graphqlOperation(onCreateUsuarios),
      ).subscribe({
        next: (todoData) => {
          console.log(
            'TCL: suscribe -> todoData',
            todoData.value.data.onCreateUsuarios,
          )
          this.autoClose(todoData.value.data.onCreateUsuarios.name)
        },
      })
    },

    async grabaMensaje() {
      const todo = { idUsuario: this.usuario.id, mensaje: this.mensaje }
      console.log('TCL: grabaMensaje -> todo', todo)
      const dataUser = await API.graphql(
        graphqlOperation(createMensajes, { input: todo }),
      )
      console.log(dataUser)
    },

    autoClose(arg) {
      this.$q.notify({
        message: `Acaba de Entrar ${arg}`,
        color: 'purple',
      })
      // const dialog = this.$q
      //   .dialog({
      //     title: 'Entro un nuevo Usuario',
      //     message: `Demos la bienvenida a ${arg} .`,
      //   })
      //   .onOk(() => {
      //     // console.log('OK')
      //   })
      //   .onCancel(() => {
      //     // console.log('Cancel')
      //   })
      //   .onDismiss(() => {
      //     // console.log('I am triggered on both OK and Cancel')
      //   })
    },
  },
}
</script>
