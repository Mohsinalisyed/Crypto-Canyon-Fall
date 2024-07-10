export interface Icon {
    id: number;
    url: string;
    isUrlSigned: boolean;
}

interface Video {
    id: number;
    url: string;
    isUrlSigned: boolean;
}

interface Apk {
    id: number;
    url: string;
    isUrlSigned: boolean;
}

export interface Screenshot {
    id: number;
    url: string;
    isUrlSigned: boolean;
}

export interface Game {
    id: number;
    name: string;
    category: string;
    description: string;
    downloads: string;
    rating: number;
    is_featured: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    video: Video[];
    apk: Apk;
    icon: Icon;
    screenshots: Screenshot[];
}

export interface User {
    id: number;
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    slogan: string;
    createdAt: string;
    updatedAt: string;
    icon: Icon;
    games: Game[];
}
export interface ArrowProps {
    currentSlide: number;
    slideCount: number;
    onClick: () => void;
}