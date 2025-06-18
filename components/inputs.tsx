import { cn } from "@/lib/utils";

const styling: string = "w-full bg-black border-2 p-2 rounded-md outline-none placeholder:text-white";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isValid?: boolean,
  errorText?: string,
}

export const Input: React.FC<InputProps> = ({ isValid=true, className, errorText, ...props}) => {
  return(
    <input
      className={cn(styling, !isValid && "border-red-500 placeholder:text-red-500 text-red-500", className)}
      {...props}
    />
  );
}

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  isValid?: boolean,
}

export const TextArea: React.FC<TextAreaProps> = ({ isValid=true, className, ...props}) => {
  return(
    <textarea
      className={cn(styling, !isValid && "border-red-500 placeholder:text-red-500 text-red-500", className)}
      {...props}
    />
  );
}
