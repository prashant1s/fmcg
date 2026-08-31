import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, id, name, rows = 5, ...props }, ref) => {
    const textareaId = id || name;
    return (
      <div className="relative">
        <textarea
          ref={ref}
          id={textareaId}
          name={name}
          rows={rows}
          placeholder=" "
          className={cn(
            "peer w-full resize-none rounded-md border bg-transparent px-4 pb-3 pt-6 text-base text-ink-950 outline-none transition-colors duration-300 sm:text-[0.95rem]",
            "border-ink-950/15 focus:border-ink-950",
            error && "border-error focus:border-error-600",
            className
          )}
          aria-invalid={!!error}
          aria-describedby={error ? `${textareaId}-error` : undefined}
          {...props}
        />
        <label
          htmlFor={textareaId}
          className="pointer-events-none absolute left-4 top-4 text-[0.95rem] text-ink-400 transition-all duration-200 ease-expo peer-focus:top-2.5 peer-focus:text-xs peer-focus:text-ink-500 peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:text-xs"
        >
          {label}
        </label>
        {error && (
          <p id={`${textareaId}-error`} className="mt-1.5 text-sm text-error-600" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
