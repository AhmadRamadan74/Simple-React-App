import { useState } from 'react';
import img1 from "../../assets/Images/poert1.png";
import img2 from "../../assets/Images/port2.png";
import img3 from "../../assets/Images/port3.png";

export default function Portfolio() {

  const [imgs, setImgs] = useState([
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img1 },
    { img: img2 },
    { img: img3 },
  ]);

  const [selectedImg, setSelectedImg] = useState("");
  const [openLyer, setOpenLyer] = useState(false);

  const handleLayer = (imgSrc: string) => {
    setSelectedImg(imgSrc);
    setOpenLyer(true);
  };

  const handleShowImg = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setOpenLyer(false);
    }
  };

  return (
    <>
      <section className="pt-24">

        {/* Title */}
        <div className="section-header pt-16 flex flex-col items-center text-center">
          <h1 className="uppercase text-[40px] font-bold text-black mb-3">
            PORTFOLIO COMPONENT
          </h1>

          <div className="flex justify-center items-center gap-5">
            <div className="bg-black w-[100px] h-[5px]"></div>
            <i className="fa fa-star"></i>
            <div className="bg-black w-[100px] h-[5px]"></div>
          </div>
        </div>

        {/* Images */}
        <div className="protofolio-images flex flex-wrap container mx-auto">
          {imgs.map((image, index) => (
            <div key={index} className="item w-1/3 p-8">
              <div
                onClick={() => handleLayer(image.img)}
                className="inner-items relative rounded-2xl overflow-hidden group cursor-pointer"
              >
                <img src={image.img} alt="" />

                <div className="layer absolute bg-[#1ABC9C] inset-0 opacity-0 flex justify-center items-center text-white group-hover:opacity-100 transition-all duration-500">
                  <i className="fa-solid fa-plus text-8xl"></i>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Preview Layer */}
        <div
          onClick={handleShowImg}
          className={`fixed inset-0 bg-gray-300/20 backdrop-blur-sm justify-center items-center ${
            openLyer ? "flex" : "hidden"
          }`}
        >
          <img src={selectedImg} className="w-[40%] rounded-xl shadow-lg" alt="" />
        </div>
      </section>
    </>
  );
}
