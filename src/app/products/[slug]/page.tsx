import MaxWidthContainer from '@/components/MaxWidthContainer';
import { Button } from '@/components/ui/button';
import { productsData } from '@/lib/constants/products';
import { hexToPastel } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface ProductDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const ProductDetailPage = async ({ params }: ProductDetailPageProps) => {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);

  console.log(product);
  if (!product) {
    return <div>Product not found</div>;
  }

  // Generate pastel color from buttonColor if pastelColor is not provided
  const pastelColor = product.pastelColor || hexToPastel(product.buttonColor);

  return (
    <MaxWidthContainer
      containerClassName="bg-white min-h-screen"
      className="py-8 md:py-12 lg:py-16"
    >
      <div className='flex flex-col lg:flex-row gap-8 lg:gap-12 items-start'>
        {/* Product Image */}
        <div className='w-full lg:w-1/2 flex justify-center lg:justify-start'>
          <div className='relative w-full max-w-[500px]'>
            <div 
              className='w-full aspect-square rounded-2xl
              flex items-center justify-center
              overflow-hidden'
              style={{ backgroundColor: pastelColor }}
            >
              <div 
                className='h-[250px] w-[250px] md:h-[300px] md:w-[300px] lg:h-[350px] lg:w-[350px]
                flex items-center justify-center
                overflow-hidden rounded-full'
                style={{ backgroundColor: product.backgroundColor }}
              >
                <Image 
                  src={product.image} 
                  alt={product.title} 
                  width={400} 
                  height={400} 
                  className='w-full h-full object-contain' 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className='w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8'>
          <div>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-[#161821] mb-4'>
              {product.title}
            </h1>
            <p className='text-base md:text-lg text-[#161821]/80 leading-relaxed mb-6'>
              {product.description}
            </p>
          </div>

          {/* Product Information */}
          <div className='flex flex-col gap-4 border-t border-b border-gray-200 py-6'>
            {/* Description */}
            {product.detailedDescription && (
              <div>
                <h3 className='text-lg font-semibold text-[#161821] mb-2'>Description</h3>
                <p className='text-base text-[#161821]/80 leading-relaxed'>
                  {product.detailedDescription}
                </p>
              </div>
            )}

            {/* Material */}
            {product.material && (
              <div>
                <h3 className='text-lg font-semibold text-[#161821] mb-2'>Material</h3>
                <p className='text-base text-[#161821]/80'>
                  {product.material}
                </p>
              </div>
            )}

            {/* Sizes */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <h3 className='text-lg font-semibold text-[#161821] mb-2'>Available Sizes</h3>
                <div className='flex flex-wrap gap-2'>
                  {product.sizes.map((size, index) => (
                    <span
                      key={index}
                      className='px-4 py-2 rounded-full border-2 text-sm font-medium'
                      style={{
                        borderColor: product.buttonColor,
                        color: product.buttonColor,
                        backgroundColor: `${product.buttonColor}10`,
                      }}
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Buy Button */}
          <div className='mt-4'>
            <Link 
              href={product.buyLink || 'https://www.daraz.com.np'} 
              target='_blank' 
              rel='noopener noreferrer'
              className='block'
            >
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
          </div>

          {/* Back to Products */}
          <div>
            <Link href='/products'>
              <Button 
                variant='ghost'
                className='w-full text-[#161821] hover:text-primary'
              >
                ← Back to Products
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </MaxWidthContainer>
  );
};

export default ProductDetailPage;

