import MaxWidthContainer from '@/components/MaxWidthContainer'
import ProductCard from '@/components/ProductCard'
import { productsData } from '@/lib/constants/products'

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
        {productsData.map((product, index) => {
          // First row (index 0-2): pink, Second row (index 3-5): green
          const row = Math.floor(index / 3);
          const backgroundColor = row === 0 ? 'bg-[#EFAAC4]/20' : 'bg-[#93B89D]/20';
          return (
            <ProductCard key={product.id} backgroundColor={backgroundColor} product={product} />
          );
        })}
      </div>
    </MaxWidthContainer>
  )
}

export default ProductSection
