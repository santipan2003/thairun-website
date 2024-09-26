export type Product = {
  id: number;
  product_name: string;
  product_description: string;
  features: string[];
  product_header: string;
  image: string;
  path: string;
};

export type OtherProduct = {
  id: number;
  product_name: string;
  product_description: string;
  product_header: string;
  image: string;
  path: string;
};

export type Update = {
  id: number;
  image: string;
  path: string;
};

export type Partner = {
  id: number;
  image: string;
  category: string;
};

export type Marathon = {
  name: string;
  description: string;
  backgroundImage: string;
};
