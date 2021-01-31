import React, { useState, useEffect } from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';

// const fetchImages = fetch('https://picsum.photos/v2/list?page=2&limit=6')
//   .then((data) => {
//     return data.json();
//   })
//   .then((responseJson) => {
//     const imagesCollection = [];
//     responseJson.forEach((element) => {
//       console.log(element);
//       imagesCollection.push({ id: element.id, original: element.download_url });
//     });
//     console.log(imagesCollection);
//     return imagesCollection;
//   });

// https://picsum.photos/  - The Lorem Ipsum for images
// another library - https://codesandbox.io/s/8k2kvlnly0?file=/src/index.js - example
const images = [
  {
    id: '1',
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    id: '2',
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    id: '3',
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

const Gallery = () => {
  // const [images, setImages] = useState([]);

  // useEffect(() => {
  //   fetchImages.then((images) => {
  //     setImages(images);
  //   });
  // });

  return (
    <ImageGallery items={images}>
      {/* {images.map((image) => {
        return (
          <div>
            <img src={image.original} />
            <p className='legend'>Legend {image.id}</p>
          </div>
        );
      })} */}
    </ImageGallery>
  );
};

export { Gallery };
