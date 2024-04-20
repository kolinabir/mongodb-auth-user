type TBody = {
  para: string;
  textSize?: 'small' | 'medium' | 'large';
};

export type TNews = {
  title: string;
  headline: string;
  description: string;
  author: string;
  image: string[];
  isPublished: boolean;
  tags: string[];
  body: TBody[];
  categories: string[];
  updatedAt?: Date;
};
