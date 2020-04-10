import logo from './logo';
import textLogo from './text-logo';
import favicon from './favicon';
import * as categories from './products-list.stub';

export default {
        name: 'vans',
        id: '1234',
        categories,
        logo,
        textLogo,
        favicon,
        sortBy: [
                        { value: 'price', label: 'price' }, 
                        { value: 'salePrice', label: 'sale'}, 
                        { value: 'new', label: 'new'}, 
                        { value: 'cool', label: 'popular'}
                ]
}