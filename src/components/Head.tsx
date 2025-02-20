// src/components/Head.tsx

import { component$ } from '@builder.io/qwik';
import { useStyles$ } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';

export const Head = component$(() => {
  useStyles$(`
    body {
      margin: 0;
      font-family: Arial, sans-serif;
    }
  `);

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Калькулятор</title>
      </head>
      <body>
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
