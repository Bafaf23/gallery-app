import Image from "next/image";
export default function ImageItem({ src, alt, author, date }) {
  return (
    <div className="w-full h-64 relative overflow-hidden rounded-md group">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover  transition-transform duration-300 group-hover:scale-110"
      />
      <div className="bg-black/40 backdrop-blur-sm bottom-0 left-0 right-0 absolute p-2">
        <h3 className="text-xl text-slate-200">{alt}</h3>
        <p className="text-slate-400 text-xs">{author}</p>
        <p className="text-xs text-slate-400">{date}</p>
      </div>
    </div>
  );
}
