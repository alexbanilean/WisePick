import type { PropsWithChildren } from "react";

export const PageLayout = (props: PropsWithChildren) => {
  return (
    <main className="overflow-none flex h-full w-full justify-center">
      <div className="flex h-full w-full flex-col">{props.children}</div>
    </main>
  );
};
