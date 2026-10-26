import Image from "../components/Image";

const ProductCard = ({ imageSrc, imageAlt, title, description, linkText }) => {
  return (
    <div className="w-full max-w-90.5 h-88 rounded-2xl bg-sText p-8 shadow-sm border border-gray-100 transition-all hover:shadow-md">
    
      <div className="flex h-16.5 w-16.5 items-center justify-center rounded-2xl bg-sText">
        <Image imageSrc={imageSrc} imageAlt={title} className="h-10 w-10 object-contain" />
      </div>

      {/* Title */}
      <h3 className="mt-6 font-inter text-text22 font-bold text-blackText">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-3 font-roboto text-text16 leading-relaxed text-lightBlackText">
        {description}
      </p>

      {/* See More Link / Action */}
      <div className="mt-6">
        <a
          href="#"
          className="inline-flex items-center gap-1 font-inter text-text16 font-semibold text-blueText hover:underline"
        >
          {linkText}
          <span className="text-lg">›</span>
        </a>
      </div>
    </div>
  );
};

export default ProductCard;