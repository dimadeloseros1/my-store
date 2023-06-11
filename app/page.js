import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Products from "./components/Products";

const fetchingData = async () => {
  const res = await (await fetch("https://fakestoreapi.com/products/")).json();
  return res;
};

export default async function Home() {
  const products = await fetchingData();
  const session = await getServerSession(authOptions);
  return (
        <main className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 relative">
          {products.map((product) => (
            <div className="p-4  mx-5">
              <Products product={product} />
            </div>
          ))}
        </main>
  );
}
