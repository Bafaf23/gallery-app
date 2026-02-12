import ImageGrid from "../molecules/ImageGird";
import image1 from "@/asset/imagen1.jpg";
import image2 from "@/asset/imagen2.jpg";

export default function Gallery() {
  const images = [
    {
      id: 1,
      alt: "Hola",
      src: image1,
      author: "by",
      date: "23/09/2023",
    },

    {
      id: 2,
      alt: "Hola2",
      src: image2,
      author: "by",
      date: "23/09/2024",
    },
  ];
  return <ImageGrid images={images} />;
}
