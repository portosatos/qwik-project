import { component$ } from '@builder.io/qwik';
import { Navbar } from '~/components/Navbar';
import { SidebarMenu } from '~/components/SidebarMenu';

export default component$(() => {
  return (
    <>
      <Navbar />
      <SidebarMenu />
      <main class="p-8">
        <h2 class="text-2xl font-bold">Выберите калькулятор:</h2>
        <ul class="mt-4">
          <li><a href="/calculator/penalty" class="text-blue-600">Калькулятор неустойки</a></li>
          <li><a href="/calculator/ndfl" class="text-blue-600">Калькулятор НДФЛ</a></li>
        </ul>
      </main>
    </>
  );
});
