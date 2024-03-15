import { Container } from '@radix-ui/themes'
import './Hero.css'
const Hero = () => {
  return (
    <>
       <div className=" hero  w-full  bg-white    bg-no-repeat  ">

           <Container>
                <div className=" w-full  max-w-[435px]  ">
                    <h1 className=" hero-content__title mb-[28px] text-gray-950  text-[80px] font-black leading-[85px]">Siz izlagan mazzali ta’mlar</h1>
                    <p className="hero-content__desc mb-16 text-gray-800 text-lg font-normal leading-8 ">When an unknown printer took a galley of type
                        scrambled it to make a type specimen </p>
                    </div>
                    <div className=" hero-product  flex items-center">
                        <div className="hero-product__info  w-full  max-w-[255px] h-[200px]  bg-[url('../../../public/assets/hero-img/pitsa.png')]  bg-cover mr-[41px] ">
                            <button className="hero-product__info-btn mt-5 mx-[31px] py-[8px] px-[23px]    text-white text-[16px] leading-8  rounded-[19px]  ">🔥 Yangi</button>
                            <p className="hero-product__info-desc pl-11 pt-12 pr-11 text-[#E76A06] text-[34px] font-bold leading-8 ">PIT <br /> -SA</p>
                        </div>
                        <div className="hero-product__info   w-full  max-w-[255px] h-[200px]  bg-cover  bg-[url('../../../public/assets/hero-img/kombo.png')]">
                            <button className="hero-product__info-btn    mt-5 mx-[31px]  py-[8px] px-[23px]  text-white rounded-[19px]  ">🚀 Ko'p sotilgan</button>
                            <p className=" hero-product__info-title    pl-11 pt-12 pr-11 text-[#E76A06] text-[34px]  font-bold leading-8  ">KOM <br /> -BO</p>
                        </div>
                    </div>
                </Container>
            </div>
    </>
    
  )
}

export default Hero
