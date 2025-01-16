export interface User {
    username: string;
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    nationality: string;
    phoneNumber: string;
    countryCode: string;
    birthDate: Date | null;
    isloggedIn?: boolean;
    token?: string;
    image_url?: string;
    id?: string;
}

export interface Profile {
    token: string,
    username: string,
    id: string,
    name: string,
    email: string,
    phone_number: string,
    nationality: string,
    image_url: null | string,
    date_of_birth: Date,
    created_at: Date,
    updated_at: Date,
    user: number,
}

export interface AmenitiesType {
    [key: string]: string[];
}

export interface PropertyType {
    owner: string;
    title: string;
    type: string;
    location: string;
    coordinates: string;
    description: string;
    price_per_night: string;
    is_whole_unit_bookable: boolean;
    is_breakfast_included: boolean;
    is_cancelation_flexible: boolean;
    is_instant_booking: boolean;
    amenities: string[];
    image_urls: string[];
}