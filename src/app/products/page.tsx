interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  created_at: string;
  updated_at: string;
}

async function getProducts(): Promise<Product[]> {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/products`;
  console.log(`Fetching data from: ${url}`);

  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">商品一覧</h1>
      <pre className="bg-gray-100 p-4 rounded-lg">
        {JSON.stringify(products, null, 2)}
      </pre>
    </main>
  );
}
