export interface Project {
    title: string;
    business: string;
    img: string;
    about: string;
    private: boolean;
    gallery: Gallery[],
    description: string;
    features: Features[];
    tools?: Features[];
    repo?: {
        text: string,
        link: string
    }
}

export interface Gallery {
    img: string
}

export interface Features {
    text: string
}
