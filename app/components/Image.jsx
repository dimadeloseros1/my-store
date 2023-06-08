"use client"
import Image from 'next/image';
import { useState } from 'react';

const cargador = ({src, width}) => {
        return `${src}?w=${width}`
}

const ProductImage = ({product, fill}) => {
    const [loading, setLoading] = useState(true)
    return (
        <div>{fill ? (
            <Image
                 loader={cargador} 
                 src={product.image} 
                 alt={product.title}
                 width={150} 
                 height={200}
                 className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
                    loading
                        ? "scale-110 blur-2xl grayscale"
                        : "scale-100 blur-0 grayscale-0"
                 }`}
                 onLoadingComplete={() => setLoading(false)}
                 />
        ) : (
            <Image
                src={product.image}
                alt={product.title}
                width={400}
                height={1000}
                className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
                    loading
                    ? "scale-110 blur-2xl grayscale"
                    : "scale-100 blur-0 grayscale-0"
                }`}
                onLoadingComplete={() => setLoading(false)}
        />
        )}
                
        </div>
    )
}

export default ProductImage;
