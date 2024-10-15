export default function LoadingKanban() {
  return (
    <div className="grid lg:grid-cols-3 gap-4 py-6">
      <div className="card grid gap-4 shadow dark:bg-white dark:bg-opacity-5 dark:border-none">
        {[...Array(6)].map((i: any, key: number) => (
          <div key={key} className="bg-neutral-200/50 h-16 rounded w-full" />
        ))}
      </div>
      <div className="card grid gap-4 shadow dark:bg-white dark:bg-opacity-5 dark:border-none">
        {[...Array(6)].map((i: any, key: number) => (
          <div key={key} className="bg-neutral-200/50 h-16 rounded w-full" />
        ))}
      </div>
      <div className="card grid gap-4 shadow dark:bg-white dark:bg-opacity-5 dark:border-none">
        {[...Array(6)].map((i: any, key: number) => (
          <div key={key} className="bg-neutral-200/50 h-16 rounded w-full" />
        ))}
      </div>
    </div>
  );
}
