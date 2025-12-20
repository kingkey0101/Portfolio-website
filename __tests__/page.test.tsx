import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';

// Mock next/image for tests
vi.mock('next/image', () => ({
  default: (props: any) => {
    const { src, alt, ...rest } = props;
    // Render a basic img element; drop non-img props like `fill`
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img src={src} alt={alt} {...rest} />;
  },
}));

// Mock framer-motion to render children without animation overhead
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...rest }: any) => <div {...rest}>{children}</div>,
  },
}));

import Home from '../app/page';

describe('Home page', () => {
  it('renders hero content and nav anchors', () => {
    render(<Home />);

    expect(screen.getAllByText(/Frontend Engineer/i)[0]).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /^Projects$/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Skills/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Contact/i })).toBeInTheDocument();
  });

  it('renders featured projects section', () => {
    render(<Home />);
    expect(screen.getByText(/Featured work/i)).toBeInTheDocument();
  });
});
