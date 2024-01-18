import { WeatherForecastApi, Configuration } from 'ws-net-quasar-sdk-fetch'
import { Pinia } from 'pinia'
import { useDiStore } from 'src/stores/di';

declare module 'pinia' {
  export interface PiniaCustomProperties {
    readonly weatherApi: WeatherForecastApi;
  }
}

function createConfiguration(pinia: Pinia) {
  return new Configuration({
    basePath: '/api',
    fetchApi: fetch,
    middleware: [{
      async pre(context) {
        console.log('context: ', { context, pinia })
        return context
      },
      async post(context) {
        return context.response
      },
      async onError(context) {
        return context.response
      }
    }]
  })
}

export function createApi(pinia: Pinia) {
  const config = createConfiguration(pinia)
  const weatherApi = new WeatherForecastApi(config)
  pinia.use(() => ({ weatherApi }))
}

export function useWeatherApi(pinia?: Pinia) {
  const di = useDiStore(pinia)
  return di.weatherApi
}
