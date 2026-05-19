export interface Tool {
  id: string;
  name: string;
  description: string;
  url: string;
  categoryId: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}
