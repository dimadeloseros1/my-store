import ProductImage from "@/app/components/Image";
import Link from "next/link";

const fetchinData = async (id) => {
  return await (await fetch(`https://fakestoreapi.com/products/${id}`, { cache: 'no-store' })).json();
};

const ProductPage = async ({ params }) => {
  const { id } = params;
  const productId = await fetchinData(id);
  
  return (
    <div>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 mt-48 pb-10">
                <ProductImage product={productId} />
                <div className="divide-y">
                    <div className="space-y-2 pb-8">
                        <h1 className="text-2xl md:text-4xl font-bold">{productId.title}</h1>
                        <h2 className="text-gray-500 font-bold text-xl md:text-3xl">${productId.price}</h2>
                    </div>
                    <div className="pt-8">
                        <p className="text-xs md:text-sm">{productId.description}</p>
                    </div>
                </div>
            </div>
    </div>
  );
};

export default ProductPage;
