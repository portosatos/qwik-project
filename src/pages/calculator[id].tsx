import { component$, useStore } from '@builder.io/qwik';
import { Navbar } from '~/components/Navbar';
import { SidebarMenu } from '~/components/SidebarMenu';
import { calculatePenalty } from '~/utils/calculators';

export default component$(({ params }) => {
  const state = useStore({ amount: 0, days: 0, rate: 0, result: 0 });

  return (
    <>
      <Navbar />
      <SidebarMenu />
      <main class="p-8">
        <h2 class="text-2xl font-bold">Калькулятор неустойки</h2>
        <input type="number" placeholder="Сумма долга" class="border p-2" onInput$={(e) => state.amount = +e.target.value} />
        <input type="number" placeholder="Дни просрочки" class="border p-2" onInput$={(e) => state.days = +e.target.value} />
        <input type="number" placeholder="Ставка (%)" class="border p-2" onInput$={(e) => state.rate = +e.target.value} />
        <button class="bg-blue-600 text-white p-2 mt-4" onClick$={() => state.result = calculatePenalty(state.amount, state.days, state.rate)}>
          Рассчитать
        </button>
        <p>Результат: {state.result}</p>
      </main>
    </>
  );
});
