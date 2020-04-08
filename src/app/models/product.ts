export interface Product {
    name: string;
    id: string;
    price: string;
    salePrice?: string;
    salePrecent?: string;
    desc: Object;
    brandName: string;
    additionalProperties: Object;
    mainPic: string;
    imgs: string[];
}
