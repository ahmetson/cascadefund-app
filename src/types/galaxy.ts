export interface Galaxy {
    _id?: string
    maintainer: string
    projectLink: string; // Reference to Project ID
    name: string;
    description: string;
    stars: number;
    sunshines: number;
    users: number;
    donationAmount: number;
    x: number;
    y: number;
    tags?: string[];
}

