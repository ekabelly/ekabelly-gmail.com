import { environment } from '../../environments/environment';
import locales from '../locale/locales.js';

type Constructor<T> = new(...args: any[]) => T;

function getLocale(){
    // ? add support for more langs
    // if (environment.production &&
    //     navigator && 
    //     navigator.languages && 
    //     navigator.languages.includes('he') && 
    //     locales['he']) {
    // return 'he';
    // }
    return locales['en'];
}

export default function i18n<T extends Constructor<{}>>(Base: T = (class {} as any)) {
    return class extends Base {
      $t(key){
            const locale = getLocale();
            const keysArr = key.split('.');
            let current = '';
            for (const keyItr of keysArr) {
                current = current[keyItr] || locale[keyItr];
                if(!current){
                    console.warn(`couldn't find word in path ${key}`)
                    return key;
                }
            }
            return current;
        };
    }
}
