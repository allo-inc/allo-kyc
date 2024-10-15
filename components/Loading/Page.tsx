export default function LoadingPage() {
  return (
    <div className="grid gap-6 lg:gap-12 py-4 lg:py-6 w-full dark:opacity-10">
      <header className="flex flex-col lg:flex-row items-start lg:items-end justify-between w-full gap-4">
        <div className="grid gap-2 w-full">
          <div className="bg-neutral-200/50 h-8 mb-2 w-48 lg:w-64"></div>
          <div className="bg-neutral-200/50 h-6 mb-2 w-40 lg:w-56"></div>
        </div>
        <div className="bg-neutral-200/50 h-10 w-full lg:w-[200px] rounded"></div>
      </header>
      <div className="grid gap-2 border rounded-lg shadow shadow-neutral-100">
        <div className="border-b flex flex-wrap items-center justify-between gap-2 px-4 py-5">
          {[...Array(6)].map((_, key: number) => (
            <div key={key} className="bg-neutral-200/50 h-2 w-20 lg:w-32" />
          ))}
        </div>
        <div className="p-4 grid gap-2">
          {[...Array(8)].map((_, key: number) => (
            <div key={key} className="bg-neutral-200/50 h-12 mb-2 w-full" />
          ))}
        </div>
      </div>
    </div>
  );
}
