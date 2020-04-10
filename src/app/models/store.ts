import { Product } from './product';
import categories from './categories';

export interface Store {
    name: string;
    id: string;
    mainCategories?: categories;
    categories: categories
    favicon: string;
    logo: string;
    textLogo?: string;
    sortBy?: {
        value: string,
        label: string
    }[]
}
