import productImgStub from './product-img.stub';
import hatImgStub from './hat-img';

export const shoes = [
    {
        name: 'Cool Shoe',
        id: '1234d',
        price: '59.90',
        desc: 'desc',
        brandName: 'New Balance',
        additionalProperties: {
        },
        mainPic: productImgStub,
        imgs:[]
    },
    {
        name: 'other shoe',
        id: '2222',
        price: '59.90',
        desc: 'desc',
        brandName: 'Addidas',
        additionalProperties: {
            new: true
        },
        mainPic: productImgStub,
        imgs:[]
    },
    {
        name: 'also shoe',
        id: '3333',
        price: '59.90',
        salePrice: '39.90',
        salePrecent: '20% OFF',
        desc: 'desc',
        brandName: 'Addidas',
        additionalProperties: {
            new: true,
            cool: true
        },
        mainPic: productImgStub,
        imgs:[]
    },
    {
        name: 'shoemaker',
        id: '5444',
        price: '59.90',
        salePrice: '49.90',
        salePrecent: '17% OFF',
        desc: 'desc',
        brandName: 'Addidas',
        additionalProperties: {
            cool: true
        },
        mainPic: productImgStub,
        imgs:[]
    }
]

export const hats = [
    {
        name: 'Cool hat',
        id: '12324d',
        price: '9.90',
        desc: 'desc',
        brandName: 'Cool Hats',
        additionalProperties: {
            cool: true
        },
        mainPic: hatImgStub,
        imgs:[]
    },
]