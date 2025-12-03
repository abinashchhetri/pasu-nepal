import MaxWidthContainer from '@/components/MaxWidthContainer';
import ProductListingCard from '@/components/ProductListingCard';
import { productsData } from '@/lib/constants/products';

const ProductsPage = () => {
  return (
    <MaxWidthContainer
      containerClassName="bg-white min-h-screen"
      className="py-8 md:py-12 lg:py-16"
    >
      <div className='flex flex-col items-center justify-center text-[#161821] mb-8 md:mb-12'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4'>
          Our Products
        </h1>
        <p className='font-normal text-sm sm:text-base md:text-lg text-center max-w-2xl'>
          Discover our handcrafted accessories that celebrate the inclusivity of our PETS and us
        </p>
      </div>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
        {productsData.map((product) => (
          <ProductListingCard key={product.id} product={product} />
        ))}
      </div>
    </MaxWidthContainer>
  );
};

export default ProductsPage;

