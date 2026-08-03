import type { ReactNode, SelectHTMLAttributes } from 'react';

type CustomSelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  children: ReactNode;
};

export function CustomSelect({ children, ...props }: CustomSelectProps) {
  return (
    <select className="select-field" {...props}>
      {children}
    </select>
  );
}
