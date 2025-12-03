import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ProductCard as ProductCardType } from '@/interface/product-card.interface';
import { hexToPastel } from '@/lib/utils';

interface ProductListingCardProps {
  product: ProductCardType;
}

const ProductListingCard = ({ product }: ProductListingCardProps) => {
  // Generate pastel color from buttonColor if pastelColor is not provided
  const pastelColor = product.pastelColor || hexToPastel(product.buttonColor);
  
  return (
    <div 
      className='p-4 lg:p-6 rounded-[20px] w-full text-center flex flex-col items-center gap-4 lg:gap-6 shadow-sm hover:shadow-md transition-shadow duration-300'
      style={{ backgroundColor: pastelColor }}
    >
      <div 
        className='h-[120px] w-[120px] lg:h-[150px] lg:w-[150px] mx-auto 
        flex items-center justify-center
        overflow-hidden rounded-full'
        style={{ backgroundColor: product.backgroundColor }}
      >
        <Image 
          src={product.image} 
          alt={product.title} 
          width={150} 
          height={150} 
          className='w-full h-full object-contain' 
        />
      </div>
      <div className='flex flex-col items-center justify-center gap-2 lg:gap-3 w-full'>
        <h4 className='lg:text-2xl text-xl font-bold text-[#161821]'>{product.title}</h4>
        <p className='lg:text-base text-sm font-normal text-[#161821]/80'>{product.description}</p>
        <div className='flex flex-col sm:flex-row gap-3 w-full mt-2'>
          <Link href={product.buyLink || 'https://www.daraz.com.np'} target='_blank' rel='noopener noreferrer' className='flex-1'>
            <Button 
              className='w-full rounded-full text-white hover:opacity-80' 
              size='lg'
              style={{ 
                backgroundColor: product.buttonColor,
              }}
            >
              Buy
            </Button>
          </Link>
          <Link href={`/products/${product.slug}`} className='flex-1'>
            <Button 
              variant='outline'
              className='w-full rounded-full border-2 hover:bg-white/50' 
              size='lg'
              style={{ 
                borderColor: product.buttonColor,
                color: product.buttonColor,
              }}
            >
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductListingCard;

