import ImageItem from "@/components/atoms/ImageItem";
export default function ImageGrid({ images }) {
  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
      {images.map((image) => (
        <ImageItem
          key={image.id}
          src={image.src}
          author={image.author}
          alt={image.alt}
          date={image.date}
        />
      ))}
    </div>
  );
}
