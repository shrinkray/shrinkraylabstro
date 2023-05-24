export interface Post {
  id: string;
  slug: string;

  publishDate: Date;
  title: string;
  description?: string;

  image?: string;

  canonical?: string | URL;
  permalink?: string;

  draft?: boolean;

  excerpt?: string;
  category?: string;
  tags?: Array<string>;
  author?: string;

  Content: unknown;
  content?: string;

  readingTime?: number;
}

export interface MetaSEO {
  title?: string;
  description?: string;
  image?: string;

  canonical?: string | URL;
  noindex?: boolean;
  nofollow?: boolean;

  ogTitle?: string;
  ogType?: string;
}

export interface SVGAttributes {
  alt?: string;
  title?: string;
  role?: string;
  id?: string;
  ariaHidden?: boolean;
  ariaLabel?: string;
  viewBox?: string;
  width?: string;
  height?: string;
}

export interface ImageMetadata {
  width?: number;
  height?: number;
  src?: string;
  alt?: string;
}