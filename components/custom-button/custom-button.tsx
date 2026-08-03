import Link from 'next/link';
import type { ComponentType, ReactNode } from 'react';
import type { LucideProps } from 'lucide-react';

type CustomButtonProps = {
  href: string;
  children: ReactNode;
  icon?: ComponentType<LucideProps>;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
};

export function CustomButton({
  href,
  children,
  icon: Icon,
  variant = 'primary',
  className = '',
}: CustomButtonProps) {
  const classes = ['button', `button--${variant}`, className].filter(Boolean).join(' ');
  const content = (
    <>
      {Icon ? <Icon size={18} strokeWidth={2.3} aria-hidden="true" /> : null}
      <span>{children}</span>
    </>
  );

  if (href.startsWith('#') || href.startsWith('/')) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} className={classes}>
      {content}
    </a>
  );
}
