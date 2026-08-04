import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/logo/logo.png"
      alt="PLUS ONE"
      width={300}
      height={120}
      unoptimized
      className={cn("h-12 w-auto object-contain", className)}
    />
  );
}