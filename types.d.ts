// Type declarations for packages without built-in types

declare module 'framer-motion' {
  import * as React from 'react';
  
  export interface MotionProps {
    initial?: any;
    animate?: any;
    exit?: any;
    whileHover?: any;
    whileInView?: any;
    viewport?: any;
    transition?: any;
    className?: string;
    children?: React.ReactNode;
    onClick?: (e: React.MouseEvent) => void;
    [key: string]: any;
  }

  export const motion: {
    div: React.FC<MotionProps>;
    span: React.FC<MotionProps>;
    a: React.FC<MotionProps>;
    button: React.FC<MotionProps>;
    nav: React.FC<MotionProps>;
    section: React.FC<MotionProps>;
    h1: React.FC<MotionProps>;
    h2: React.FC<MotionProps>;
    h3: React.FC<MotionProps>;
    p: React.FC<MotionProps>;
    img: React.FC<MotionProps>;
    [key: string]: React.FC<MotionProps>;
  };

  export const AnimatePresence: React.FC<{
    children?: React.ReactNode;
    initial?: boolean;
    mode?: 'sync' | 'async' | 'popLayout';
    onExitComplete?: () => void;
  }>;
}

declare module '@google/genai' {
  export class GoogleGenAI {
    constructor(options: { apiKey: string });
    models: {
      generateContent(options: {
        model: string;
        contents: string;
        config?: { tools?: Array<{ googleSearch?: {} }> };
      }): Promise<{ text?: string }>;
    };
  }
}
