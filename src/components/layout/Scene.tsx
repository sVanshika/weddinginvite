import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import type { SceneId } from "@/types/scene";

interface SceneProps extends HTMLAttributes<HTMLElement> {
  id: SceneId;
  fullHeight?: boolean;
}

export const Scene = forwardRef<HTMLElement, SceneProps>(function Scene(
  { id, fullHeight = true, className, children, ...rest },
  ref
) {
  return (
    <section
      ref={ref}
      data-scene={id}
      id={`scene-${id}`}
      className={cn(
        "relative w-full overflow-hidden",
        fullHeight && "min-h-screen",
        className
      )}
      {...rest}
    >
      {children}
    </section>
  );
});
