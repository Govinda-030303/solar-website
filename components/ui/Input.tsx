import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export function Input({
  label,
  error,
  className,
  id,
  ...props
}: InputProps) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-semibold text-slate-700">
        {label}
      </label>
      <input
        id={id}
        className={cn(
          "w-full rounded-xl border border-slate-300 bg-white px-4 py-3",
          "text-slate-900 placeholder:text-slate-400 font-normal",
          "transition-all duration-200 shadow-sm",
          "focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
          className
        )}
        {...props}
      />
      {error && <p className="text-sm font-medium text-red-600">{error}</p>}
    </div>
  );
}

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export function Textarea({
  label,
  error,
  className,
  id,
  ...props
}: TextareaProps) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-semibold text-slate-700">
        {label}
      </label>
      <textarea
        id={id}
        className={cn(
          "w-full rounded-xl border border-slate-300 bg-white px-4 py-3",
          "text-slate-900 placeholder:text-slate-400 font-normal",
          "transition-all duration-200 resize-none shadow-sm",
          "focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
          className
        )}
        {...props}
      />
      {error && <p className="text-sm font-medium text-red-600">{error}</p>}
    </div>
  );
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  options: readonly string[];
}

export function Select({
  label,
  error,
  className,
  id,
  options,
  ...props
}: SelectProps) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-semibold text-slate-700">
        {label}
      </label>
      <select
        id={id}
        className={cn(
          "w-full rounded-xl border border-slate-300 bg-white px-4 py-3",
          "text-slate-900 font-normal",
          "transition-all duration-200 shadow-sm",
          "focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
          className
        )}
        {...props}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <p className="text-sm font-medium text-red-600">{error}</p>}
    </div>
  );
}
