"use client"
import Image from 'next/image';

const cargador = ({src, width}) => {
        return `${src}?w=${width}`
}

const ProductImage = ({product}) => {
    return (
        <div>
                <Image loader={cargador} src={product.image} alt="Product" width={150} height={150}/>
        </div>
    )
}

export default ProductImage;
