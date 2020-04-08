import { Product } from './product';

export interface Store {
    name: string;
    id: string;
    products: Product[];
    favicon: string;
    logo: string;
    textLogo?: string; 
}
