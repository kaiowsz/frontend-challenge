export type Product = {
    name: string;
    description: string;
    image_url: string;
    category: string;
    id: string;
    price_in_cents: number | string;
    sales: number | string;
    created_at: Date;
}

export type ProductList = Array<Product>;
