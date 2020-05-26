export interface Project {
    title: string;
    business: string;
    img: string;
    about: string;
    private: boolean;
    gallery: Gallery[],
    description: string;
    features: Features[]
}

export interface Gallery {
    img: string
}

export interface Features {
    text: string
}
