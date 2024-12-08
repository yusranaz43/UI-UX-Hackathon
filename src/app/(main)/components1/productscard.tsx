import Image from "next/image";
import Link from "next/link";

export default function ProductCard() {
  // Mock data for products
  const products = [
    { id: 1, image: "/images/product1.png", title: "Graphic Design", department: "English Department", price: "$16.48", discountedPrice: "$6.48" },
    { id: 2, image: "/images/product4.png", title: "Graphic Design", department: "English Department", price: "$16.48", discountedPrice: "$6.48" },
    { id: 3, image: "/images/product3.png", title: "Graphic Design", department: "English Department", price: "$16.48", discountedPrice: "$6.48" },
    { id: 4, image: "/images/product2.png", title: "Graphic Design", department: "English Department", price: "$16.48", discountedPrice: "$6.48" },
    { id: 5, image: "/images/product5.png", title: "Graphic Design", department: "English Department", price: "$16.48", discountedPrice: "$6.48" },
    { id: 6, image: "/images/product6.png", title: "Graphic Design", department: "English Department", price: "$16.48", discountedPrice: "$6.48" },
    { id: 7, image: "/images/product7.png", title: "Graphic Design", department: "English Department", price: "$16.48", discountedPrice: "$6.48" },
    { id: 8, image: "/images/product8.png", title: "Graphic Design", department: "English Department", price: "$16.48", discountedPrice: "$6.48" },
  ];

  return (
    <section className="my-20">
      <div className="pt-8">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="pb-2.5 text-gray-600">Featured Products</h2>
          <h3 className="font-bold pb-2.5 text-gray-900 text-2xl">BESTSELLER PRODUCTS</h3>
          <p className="text-sm text-gray-600">Problems trying to resolve the conflict between</p>
        </div>

        {/* Product Grid */}
        <div className="px-32 py-16 grid grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="text-center flex flex-col items-center">
              <Image src={product.image} alt={product.title} width={183} height={238} />
              <div className="pt-5">
                <h5 className="font-bold pb-2">{product.title}</h5>
                <Link href="/" className="font-bold text-gray-500">
                  {product.department}
                </Link>
                <h5 className="text-gray-400 font-semibold pt-2">
                  {product.price}{" "}
                  <span className="text-green-700 font-semibold">{product.discountedPrice}</span>
                </h5>
              </div>

              {/* Color Options */}
              <div className="flex gap-2 pt-4">
                <div className="w-[16px] h-[16px] rounded-full bg-cSky"></div>
                <div className="w-[16px] h-[16px] rounded-full bg-cGreen"></div>
                <div className="w-[16px] h-[16px] rounded-full bg-cOrange"></div>
                <div className="w-[16px] h-[16px] rounded-full bg-cBlue"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
