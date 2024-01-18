<template>
  <q-page class="row items-center justify-evenly">
    <q-table title="Forecast" :rows="forecast" :loading="loading">
      <template v-slot:body-cell-date="props">
        <q-td :props="props">
          <div>
            {{ props.value.toLocaleString() }}
          </div>
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>

<script setup lang="ts">
import { useAsyncState } from '@vueuse/core';
import { useWeatherApi } from 'src/composables/api'

const weatherApi = useWeatherApi()
const { state: forecast, isLoading: loading } = useAsyncState(() => {
  return weatherApi.getWeatherForecast()
}, [])
</script>
