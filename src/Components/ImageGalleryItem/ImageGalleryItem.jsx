import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem() {
  return (
    <li className={s.ImageGalleryItem}>
      <img src="" alt="" className={s.ImageGalleryItemImage} />
    </li>
  );
}
