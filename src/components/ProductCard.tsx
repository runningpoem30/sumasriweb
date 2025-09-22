interface ProductCardProps {
  image: string;
  title: string;
  description: string;
}

const ProductCard = ({ image, title, description }: ProductCardProps) => {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-card hover:shadow-ocean transition-all duration-200 group h-full flex flex-col">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-lg font-medium text-card-foreground mb-3 tracking-tight">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed font-light flex-1">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;