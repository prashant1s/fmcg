import { forwardRef, type SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  options: readonly string[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, className, id, name, defaultValue, ...props }, ref) => {
    const selectId = id || name;
    return (
      <div className="relative">
        <select
          ref={ref}
          id={selectId}
          name={name}
          required
          defaultValue={defaultValue ?? ""}
          className={cn(
            "peer w-full appearance-none rounded-md border bg-transparent px-4 pb-2.5 pt-6 text-base text-ink-950 outline-none transition-colors duration-300 sm:text-[0.95rem]",
            "border-ink-950/15 focus:border-ink-950",
            error && "border-error focus:border-error-600",
            className
          )}
          aria-invalid={!!error}
          aria-describedby={error ? `${selectId}-error` : undefined}
          {...props}
        >
          <option value="" disabled hidden />
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <label
          htmlFor={selectId}
          className="pointer-events-none absolute left-4 top-4 text-[0.95rem] text-ink-400 transition-all duration-200 ease-expo peer-focus:top-2.5 peer-focus:text-xs peer-focus:text-ink-500 peer-valid:top-2.5 peer-valid:text-xs"
        >
          {label}
        </label>
        <ChevronDown
          aria-hidden
          className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-ink-400"
        />
        {error && (
          <p id={`${selectId}-error`} className="mt-1.5 text-sm text-error-600" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";
