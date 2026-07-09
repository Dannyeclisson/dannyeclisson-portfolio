import Image from "next/image";

interface StackItemProps {
  src?: string;
  name: string;
}

export default function StackItem({ src, name }: StackItemProps) {
  return (
    <div className="flex min-h-10 items-center gap-3 rounded border border-zinc-800 bg-zinc-900/50 px-3 py-2">
      {src ? (
        <div className="relative h-5 w-5 shrink-0">
          <Image src={src} alt={name} fill className="object-contain invert" />
        </div>
      ) : (
        <span className="h-2 w-2 shrink-0 rounded-full bg-blue-400" />
      )}
      <span className="text-sm text-zinc-300">{name}</span>
    </div>
  );
}
