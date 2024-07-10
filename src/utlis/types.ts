interface Screenshot {
    id: number;
    attributes: {
        url: string;
        isUrlSigned: boolean;
    };
}

interface Video {
    id: number;
    attributes: {
        url: string;
        isUrlSigned: boolean;
    };
}

interface Icon {
    data: {
        id: number;
        attributes: {
            url: string;
            isUrlSigned: boolean;
        };
    };
}

interface Apk {
    data: {
        id: number;
        attributes: {
            url: string;
            isUrlSigned: boolean;
        };
    };
}

interface User {
    data: {
        id: number;
        attributes: {
            email: string;
            slogan: string;
            username: string;
            icon: Icon;
        };
    };
}

export interface Game {
    id: number;
    attributes: {
        name: string;
        category: string;
        description: string;
        downloads: string;
        rating: number;
        is_featured: boolean;
        createdAt: string; 
        updatedAt: string;
        publishedAt: string;
        screenshots: {
            data: Screenshot[];
        };
        video: {
            data: Video[];
        };
        icon: Icon;
        apk: Apk;
        users_permissions_user: User;
    };
}

export interface GameArray {
    data: Game[]
}
