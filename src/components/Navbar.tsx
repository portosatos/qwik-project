import { component$ } from '@builder.io/qwik';

export const Navbar = component$(() => {
  return (
    <nav class="bg-white shadow p-4 flex justify-between">
      <h1 class="text-xl font-bold">Калькулятор</h1>
      <button class="text-lg" onClick$={() => {
        const menu = document.getElementById('sidebarMenu');
        if (menu) menu.classList.toggle('hidden');
      }}>☰</button>
    </nav>
  );
});
