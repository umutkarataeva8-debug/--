export type Language = 'ky' | 'ru';

export interface ServiceItem {
  id: string;
  category: 'brows' | 'permanent' | 'lashes_makeup';
  titleKy: string;
  titleRu: string;
  descKy: string;
  descRu: string;
  price: number;
  priceDisplay?: string;
  duration: string;
  popular?: boolean;
  tagKy?: string;
  tagRu?: string;
  imageUrl?: string;
}

export interface BeforeAfterItem {
  id: string;
  titleKy: string;
  titleRu: string;
  categoryKy: string;
  categoryRu: string;
  descriptionKy: string;
  descriptionRu: string;
  beforeImg: string;
  afterImg: string;
  tags: string[];
}

export interface ReviewItem {
  id: string;
  name: string;
  locationKy: string;
  locationRu: string;
  rating: number;
  date: string;
  commentKy: string;
  commentRu: string;
  serviceKy: string;
  serviceRu: string;
}

export interface FAQItem {
  id: string;
  questionKy: string;
  questionRu: string;
  answerKy: string;
  answerRu: string;
  category: 'permanent' | 'brows' | 'care';
}
