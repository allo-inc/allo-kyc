'use client';
export default function LoadingForm() {
  return (
    <div className="grid gap-8 animate-pulse w-[800px] mx-auto">
      <header className="grid gap-2">
        <div className="bg-neutral-500/10 h-8 mb-2 w-[200px]"></div>
        <div className="bg-neutral-500/10 h-8 mb-2 w-[120px]"></div>
      </header>
      <div className="grid gap-4">
        <div className="bg-neutral-500/10 h-[600px] w-full rounded mx-auto"></div>
      </div>
    </div>
  );
}
