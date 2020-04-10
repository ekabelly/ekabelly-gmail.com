export interface Product {
    name: string;
    id: string;
    price: string;
    salePrice?: string;
    salePrecent?: string;
    salePrecentNum?: number;
    desc: Object;
    brandName: string;
    additionalProperties?: any;
    mainPic: string;
    imgs: string[];
}
