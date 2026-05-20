import Image from "next/image";

interface StackItemProps {
  src: string;
  name: string;
}

export default function StackItem({ src, name }: StackItemProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative w-6 h-6">
        <Image
        src={src}
        alt={name}
        fill
        className="object-contain invert"
        />
      </div>
      <span className="text-zinc-400">{name}</span>
    </div>
  );
}