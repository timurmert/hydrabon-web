import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps {
  title?: string;
  description?: string;
  image?: string;
  href?: string;
  children?: React.ReactNode;
  className?: string;
  variant?: 'default' | 'featured' | 'minimal';
}

const cardVariants = {
  default: 'card',
  featured: 'professional-card',
  minimal: 'bg-dark-800/50 border border-dark-700 rounded-lg p-4 transition-all duration-300 hover:border-primary-500',
};

export default function Card({
  title,
  description,
  image,
  href,
  children,
  className,
  variant = 'default',
}: CardProps) {
  const cardContent = (
    <motion.div
      className={cn(cardVariants[variant], className)}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      {image && (
        <Image
          src={image}
          alt={title || ''}
          width={400}
          height={192}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
      )}
      {title && (
        <h3 className="text-xl font-display font-semibold text-white mb-2">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-dark-300 mb-4">
          {description}
        </p>
      )}
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
} 