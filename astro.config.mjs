// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.konstadeportista.com',
  // La barra del dev server tapa el indicador "continúa bajando" del hero.
  devToolbar: { enabled: false },
});
