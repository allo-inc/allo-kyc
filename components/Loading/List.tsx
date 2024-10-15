export default function LoadingList() {
  return (
    <div className="grid gap-8 card dark:bg-white dark:bg-opacity-5 border-none">
      <header className="flex items-end justify-between w-full">
        <div className="grid gap-2 w-full">
          <div className="bg-neutral-200/50 dark:bg-white dark:bg-opacity-5 h-8 mb-2 w-64"></div>
          <div className="bg-neutral-200/50 dark:bg-white dark:bg-opacity-5 h-6 mb-2 w-56"></div>
        </div>
        <div className="bg-neutral-200/50 dark:bg-white dark:bg-opacity-5 h-10 mb-2 w-[200px] rounded"></div>
      </header>
      <div className="grid lg:grid-cols-3 gap-4 border p-4 rounded border-none">
        {[...Array(5)].map((i: any, key: number) => (
          <div
            key={key}
            className="bg-neutral-200/50 dark:bg-white dark:bg-opacity-5 h-16 rounded-lg"
          />
        ))}
      </div>
    </div>
  );
}
