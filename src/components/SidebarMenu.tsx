// src/components/SidebarMenu.tsx

import { component$ } from '@builder.io/qwik';

export const SidebarMenu = component$(() => {
  return (
    <aside id="sidebarMenu" class="fixed top-0 left-0 w-64 bg-gray-200 h-full shadow-lg hidden">
      <ul class="p-4">
        <li class="mb-2"><a href="/" class="block">Главная</a></li>
        <li class="mb-2"><a href="/calculator/penalty" class="block">Калькулятор неустойки</a></li>
        <li class="mb-2"><a href="/calculator/ndfl" class="block">Калькулятор НДФЛ</a></li>
      </ul>
    </aside>
  );
});
