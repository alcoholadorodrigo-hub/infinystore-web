
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

export interface ProductColor {
  name: string;
  hex: string;
  inStock?: boolean;
}

export interface ProductSpecs {
  screen: string;
  processor: string;
  camera: string;
  battery: string;
  os: string;
  storage: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription?: string;
  price: number;
  originalPrice?: number;
  isOffer?: boolean;
  category: 'Nuevos' | 'Seminuevos' | 'Accesorios';
  imageUrl: string;
  gallery?: string[];
  videoUrl?: string;
  features: string[];
  specs?: ProductSpecs; // Added detailed specs
  colors: ProductColor[];
  rating: number;
  reviews: number;
}

export interface JournalArticle {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  content: React.ReactNode;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS'
}

export type ViewState = 
  | { type: 'home' }
  | { type: 'product', product: Product }
  | { type: 'journal', article: JournalArticle }
  | { type: 'checkout' }
  | { type: 'compare' };
