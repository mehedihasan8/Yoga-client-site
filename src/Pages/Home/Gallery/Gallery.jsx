import img1 from "../../../assets/image/gallery-1.jpg";
import img4 from "../../../assets/image/gallery-2.jpg";
import img3 from "../../../assets/image/gallery-3.jpg";
import img9 from "../../../assets/image/gallery-4.jpg";
import img5 from "../../../assets/image/gallery-5.jpg";
import img6 from "../../../assets/image/gallery-6.jpg";
import img7 from "../../../assets/image/gallery-7.jpg";
import img8 from "../../../assets/image/gallery-8.jpg";
import img2 from "../../../assets/image/image_4.jpg";
const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const Gallery = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center my-16 text-[#6144FF]">
        See the latest photos
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-0">
        {images.map((image, i) => (
          <img className="h-[300px] w-full" key={i} src={image} alt="" />
        ))}
      </div>
    </>
  );
};

export default Gallery;
