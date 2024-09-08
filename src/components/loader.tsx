function Loader({ label }: { label: string }) {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="animate-spin rounded-full border-4 border-gray-300 border-t-primary h-8 w-8  md:h-11 md:w-11" />
        <p className="text-gray-500 dark:text-gray-400">{label}</p>
      </div>
    </div>
  );
}

export default Loader;
