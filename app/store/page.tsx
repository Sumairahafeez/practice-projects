'use client';
import Card from "@/component/blogcard";
export default function StorePage() {
    const products = [
        { id: 1, title: "Product 1", description: "This is a great product.", price: 19.99 },
        { id: 2, title: "Product 2", description: "This product is even better.", price: 29.99 },
        { id: 3, title: "Product 3", description: "You will love this product.", price: 39.99 },
    ];
    return (
        <div>
            <h1>Welcome to the Mini Store</h1>
            <p>Here you can find a variety of products to purchase.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map(product => (
                    <Card key={product.id} title={product.title} description={product.description} price={product.price} />
                ))}
            </div>
        </div>
    );
}