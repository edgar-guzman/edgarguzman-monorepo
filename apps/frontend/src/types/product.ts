export type Product = {
    id: string;
    title: string;
    slug: string;
    price: string;
    isFeatured: boolean;
    category: {
        id: string;
        title: string;
        slug: string;
    };
    images: string[];
    size: {
        id: string;
        title: string;
        slug: string;
    }[];
    color: {
        id: string;
        title: string;
        slug: string;
    }[];
    createdAt: string;
    updatedAt: string;
};
