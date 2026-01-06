import { cn } from "@/lib/utils";

export const Footer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <footer
      className={cn(
        "w-full border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-neutral-900 text-black dark:text-white px-4 py-8",
        className
      )}
    >
      {children}
    </footer>
  );
};
