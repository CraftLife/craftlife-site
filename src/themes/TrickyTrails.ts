import { definePreset } from '@primevue/themes'

import Aura from '@primevue/themes/aura'

const TrickyTrails = definePreset(Aura, {
  primitive: {
    copper: {
      50: '#FDF4EC',
      100: '#FCE7D6',
      200: '#F8D0B5',
      300: '#F3B391',
      400: '#EC8D66',
      500: '#E86A42',
      600: '#D95331',
      700: '#B93F26',
      800: '#942F1E',
      900: '#6F2116',
      950: '#4F150E'
    }
  },
  semantic: {
    primary: {
      50: '{copper.50}',
      100: '{copper.100}',
      200: '{copper.200}',
      300: '{copper.300}',
      400: '{copper.400}',
      500: '{copper.500}',
      600: '{copper.600}',
      700: '{copper.700}',
      800: '{copper.800}',
      900: '{copper.900}',
      950: '{copper.950}'
    }
  }
})

export default TrickyTrails
