import MaxWidthContainer from '@/components/MaxWidthContainer'
import ProductListingCard from '@/components/ProductListingCard'
import { productsData } from '@/lib/constants/products'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const ProductSection = () => {
  return (
    <MaxWidthContainer
      containerClassName="bg-white"
      className="py-12 md:py-16 lg:py-[120px] relative z-10 flex flex-col items-center justify-center gap-12 lg:gap-[70px]"
    >
      <div className='flex flex-col items-center justify-center text-[#161821]'>
        <h2 className='text-2xl sm:text-3xl md:text-5xl font-bold leading-tight'>Our Products</h2>
        <p className='font-normal text-sm sm:text-base md:text-lg leading-relaxed'>ᴡᴇ ᴄʀᴇᴀᴛᴇ ʜᴀɴᴅᴄʀᴀꜰᴛᴇᴅ ᴀᴄᴄᴇꜱꜱᴏʀɪᴇꜱ ᴛʜᴀᴛ ᴄᴇʟᴇʙʀᴀᴛᴇ ᴛʜᴇ ɪɴᴄʟᴜꜱɪᴠɪᴛʏ ᴏꜰ ᴏᴜʀ 𝗣𝗘𝗧𝗦 ᴀɴᴅ ᴜꜱ</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6'>
        {productsData.map((product) => (
          <ProductListingCard key={product.id} product={product} />
        ))}
      </div>
      <div className='mt-8'>
        <Link href="/products">
          <Button 
            className='bg-primary text-white hover:bg-[#be497e] rounded-full px-8 py-6 text-lg'
            size='lg'
          >
            View All Products
          </Button>
        </Link>
      </div>
    </MaxWidthContainer>
  )
}

export default ProductSection
