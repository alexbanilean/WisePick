import type { PropsWithChildren } from "react";

export const PageLayout = (props: PropsWithChildren) => {
  return (
    <main className="flex h-screen w-screen justify-center overflow-hidden">
      <div className="flex h-full w-full flex-col">{props.children}</div>
    </main>
  );
};
