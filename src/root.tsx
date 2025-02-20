// src/root.tsx

import { component$ } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import { Head } from '~/components/Head';

export default component$(() => {
  return (
    <QwikCityProvider>
      <Head />
      <body>
        <RouterOutlet />   {/* Здесь должен быть только один вызов */}
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
