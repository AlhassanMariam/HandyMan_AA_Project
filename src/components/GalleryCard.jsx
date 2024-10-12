

const GalleryCard = ({gallery}) => {
  return (
    <div className="relative max-w-xs border border-solid border-gray-200 rounded-2xl transition-all duration-500">
      <div className="block overflow-hidden rounded-2xl">
        <img src={gallery.image} alt="Card image" />
      </div>
    </div>
  );
};

export default GalleryCard;
