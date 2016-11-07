export class Coordinates {
    public longitud: number;
    public latitud: number;
}

export interface GeolocationServiceInterface {

    searchFromString(Address: string);
    // searchFromCoordinates(coordinates: Coordinates);
}