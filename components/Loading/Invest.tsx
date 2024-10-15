export default function LoadingPage() {
  return (
    <div className="grid items-start lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2 card grid gap-6 dark:bg-white dark:bg-opacity-5 dark:border-none">
        <div className="flex gap-4">
          <div className="bg-neutral-200/50 dark:bg-white dark:bg-opacity-5 dark:border-none w-16 h-16" />
          <header className="grid gap-2">
            <div className="bg-neutral-200/50 dark:bg-white dark:bg-opacity-5 dark:border-none h-6 w-64" />
            <div className="bg-neutral-200/50 dark:bg-white dark:bg-opacity-5 dark:border-none h-6 w-48" />
          </header>
        </div>
        <div className="card grid gap-4 ark:bg-white dark:bg-opacity-5 dark:border-none">
          <div className="bg-neutral-200/50 dark:bg-white dark:bg-opacity-5 dark:border-none h-8 w-32" />
          <div className="bg-neutral-200/50 dark:bg-white dark:bg-opacity-5 dark:border-none h-16 w-full" />
        </div>

        <div className="card grid gap-4 ark:bg-white dark:bg-opacity-5 dark:border-none">
          <div className="bg-neutral-200/50 dark:bg-white dark:bg-opacity-5 dark:border-none h-8 w-32" />
          <div className="bg-neutral-200/50 dark:bg-white dark:bg-opacity-5 dark:border-none h-16 w-full" />
          <div className="bg-neutral-200/50 dark:bg-white dark:bg-opacity-5 dark:border-none h-[250px] w-full" />
        </div>
      </div>
      <div className="lg:col-span-1 card grid gap-4 ark:bg-white dark:bg-opacity-5 dark:border-none">
        <div className="bg-neutral-200/50 dark:bg-white dark:bg-opacity-5 dark:border-none h-6 w-64" />
        <div className="bg-neutral-200/50 dark:bg-white dark:bg-opacity-5 dark:border-none h-6 w-48" />
        <div className="grid gap-8">
          <p className="text-3xl text-neutral-200/50 font-bold pt-4">
            $1,000,000
          </p>
          <div className="bg-neutral-200/50 dark:bg-white dark:bg-opacity-5 dark:border-none h-8 w-full"></div>
        </div>
        <div className="card grid gap-4 ark:bg-white dark:bg-opacity-5 dark:border-none">
          <div className="bg-neutral-200/50 dark:bg-white dark:bg-opacity-5 dark:border-none h-8 w-64"></div>
          <div className="bg-neutral-200/50 dark:bg-white dark:bg-opacity-5 dark:border-none h-8 w-full"></div>
          <div className="bg-neutral-200/50 dark:bg-white dark:bg-opacity-5 dark:border-none h-8 w-full"></div>
          <div className="bg-neutral-200/50 dark:bg-white dark:bg-opacity-5 dark:border-none h-8 w-full"></div>
        </div>
      </div>
    </div>
  );
}
