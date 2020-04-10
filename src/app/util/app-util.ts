import { Product } from '../models/product';

export const setPageAttrs = (name: string, faviconSrc: string) => {
    document.title = name;
    (document.querySelector('#favicon') as HTMLLinkElement).href = faviconSrc;
}

export const sortProductsArr = (productsArr: Product[], sortBy: string): Product[] => 
    productsArr.sort((a, b): number => {
        if((!a[sortBy] && !b[sortBy]) && (!a.additionalProperties[sortBy] && !b.additionalProperties[sortBy])){
            return 0;
        } else if ((!a[sortBy] && !!b[sortBy]) || (!a.additionalProperties[sortBy] && !!b.additionalProperties[sortBy])){
            return 1;
        } else if ((!!a[sortBy] && !b[sortBy]) || (!!a.additionalProperties[sortBy] && !b.additionalProperties[sortBy])){
            return -1;
        }
        if((a[sortBy] < b[sortBy]) || (a.additionalProperties[sortBy] < b.additionalProperties[sortBy])) return -1;
        if((a[sortBy] > b[sortBy]) || (a.additionalProperties[sortBy] > b.additionalProperties[sortBy])) return 1;
        return 0;
    })
