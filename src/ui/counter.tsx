
import { Plus, Minus, RotateCcw } from "lucide-react";
import { decrement, increment, reset, selectValue } from "../redux/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";

export default function Counter() {
  const  value  = useAppSelector(selectValue);
  const dispatch = useAppDispatch();

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <section className="w-full max-w-sm rounded-3xl border border-white/10 bg-slate-900 p-8 shadow-2xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-400">YOUR COUNTER</p>
            <h1 className="mt-1 text-2xl font-bold text-white">Counter App</h1>
          </div>

          <button
            onClick={() => dispatch(reset())}
            aria-label="Reset counter"
            title="Reset counter"
            className="rounded-xl border border-white/10 bg-white/5 p-3 text-slate-400 transition hover:bg-white/10 hover:text-white active:scale-95"
          >
            <RotateCcw size={20} />
          </button>
        </div>

        {/* Display */}
        <div
          aria-live="polite"
          className="flex min-h-52 flex-col items-center justify-center rounded-2xl border border-indigo-400/20 bg-indigo-500/10"
        >
          <span className="text-sm font-medium uppercase tracking-[0.25em] text-indigo-300">
            Current Count
          </span>

          <span className="mt-3 text-7xl font-bold tabular-nums tracking-tight text-white">
            {value}
          </span>

          <span className="mt-2 text-sm text-slate-400">
            {value === 0
              ? "Ready to start"
              : value > 0
                ? "Keep going!"
                : "Below zero"}
          </span>
        </div>

        {/* Controls */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <button
            disabled={value === 0}
            onClick={() => dispatch(decrement())}
            className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-slate-800 py-4 font-semibold text-white transition hover:bg-slate-700 active:scale-95 disabled:cursor-not-allowed disabled:border-white/5 disabled:bg-slate-900 disabled:text-slate-500 disabled:opacity-50 disabled:active:scale-100 disabled:hover:bg-slate-900"
          >
            <Minus size={20} />
            Decrease
          </button>

          <button
            onClick={() => dispatch(increment())}
            className="flex items-center justify-center gap-2 rounded-2xl bg-indigo-500 py-4 font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-400 active:scale-95"
          >
            <Plus size={20} />
            Increase
          </button>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-slate-500">
          Simple. Focused. Just count.
        </p>
      </section>
    </main>
  );
}
