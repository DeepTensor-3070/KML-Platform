
export default function PageHero({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[#FAFAF8] py-24 md:py-32">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-red-100/60 blur-[100px]" />

      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-10">
        <p className="text-xs font-extrabold tracking-[0.3em] text-[#D92327]">
          {label}
        </p>

        <h1 className="mt-7 max-w-4xl text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
          {title}
        </h1>

        <p className="mt-7 max-w-2xl text-base leading-8 text-neutral-500 md:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
