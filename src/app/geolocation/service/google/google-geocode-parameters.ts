import { URLSearchParams } from '@angular/http';

/**
 * @todo
 * Implements bounds and region : see https://developers.google.com/maps/documentation/geocoding/intro?hl=fr
 */
export class GoogleGeocodeParameters {

    constructor(public address: string, private api_key?: string, private lang?: string, private filter?: Array<string>) {
        if (!this.lang) {
            this.lang = 'en';
        }
    }

    public setKey(key: string) {
        this.api_key = key;
    }

    toJson() {
        return {
            address: this.address,
            key: this.api_key,
            lang: this.lang,
            components: this.filter
        };
    }

    /**
     * Returns a object with parameters
     * 
     * @params string key
     * @return Object
     */
    toUrlSearchParams(): URLSearchParams {
        let params: URLSearchParams = new URLSearchParams();
        params.set('address', this.address);
        params.set('key', this.api_key);
        params.set('lang', this.lang);

        if (this.filter && this.filter.length > 0) {
            params.set('components', this.filter.join('|'));
        }

        return params;
    }

    toQueryString(): string {
        let components = '';

        if (this.filter.length > 0) {
            components = '&components=' + this.filter.join('|');
        }

        return 'key=' + this.api_key + '&address=' + encodeURI(this.address) + '&lang=' + this.lang + components;
    }
}
