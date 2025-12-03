import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ProductCard as ProductCardType } from '@/interface/product-card.interface';

interface ProductCardProps {
  product: ProductCardType;
  backgroundColor: string;
}

const ProductCard = ({ product, backgroundColor }: ProductCardProps) => {
  const baseColorMatch = backgroundColor.match(/\[#([A-F0-9]+)\]/);
  const baseColor = baseColorMatch ? `#${baseColorMatch[1]}` : '#EFAAC4';

  return (
    <div className={`p-4 lg:p-6 rounded-[20px] w-full text-center md:max-w-[300px] items-center flex-col gap-4 lg:gap-6 flex ${backgroundColor}`} >
      <div 
        className='h-[100px] lg:mb-6 mb-4 w-[100px] mx-auto 
        flex items-center justify-center lg:h-[150px] lg:w-[150px]
        overflow-hidden rounded-full'
        style={{ backgroundColor: baseColor }}
      >
        <Image 
          src={product.image} 
          alt={product.title} 
          width={100} 
          height={100} 
          className='w-full h-full object-contain' 
        />
      </div>
      <div className='flex flex-col items-center justify-center gap-2 lg:gap-3'>
        <h4 className='lg:text-2xl text-xl font-bold'>{product.title}</h4>
        <p className='lg:text-base text-sm font-normal'>{product.description}</p>
        <Link href={`/products/${product.slug}`}>
          <Button 
            className='rounded-full text-white hover:opacity-80' 
            size='lg'
            style={{ 
              backgroundColor: baseColor,
            }}
          >
            Learn More
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;

