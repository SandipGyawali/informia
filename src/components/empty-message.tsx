import Image from "next/image";

function EmptyMessage({ label }: { label: string }) {
  return (
    <div className="h-full px-20 flex flex-col items-center">
      <div className="relative h-96 w-96">
        <Image alt="Empty" fill src="/empty.svg" />
      </div>
      <p className="text-muted-foreground text-sm text-center">{label}</p>
    </div>
  );
}

export default EmptyMessage;
