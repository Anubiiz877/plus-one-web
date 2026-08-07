import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "relative inline-flex h-12 items-center justify-center overflow-hidden",
        className
      )}
      style={{ aspectRatio: "1 / 1" }}
    >
      <Image
        src="/logo/logo-white.png"
        alt="PLUS ONE"
        width={180}
        height={220}
        unoptimized
        className="h-full w-full object-contain dark:hidden"
      />
      <Image
        src="/logo/logo-dark.png"
        alt=""
        aria-hidden
        width={300}
        height={300}
        unoptimized
        className="hidden h-full w-full object-contain dark:block"
      />
    </span>
  );
}