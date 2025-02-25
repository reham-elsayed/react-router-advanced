import { useState, useEffect } from 'react';

const useImageOptimizer = ({ movies }) => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    if (!movies || movies.length === 0) return;

    const links = []; // Store created links for cleanup

    movies.forEach((movie) => {
      if (movie?.poster_path) {
        const fullImageUrl = `https://image.tmdb.org/t/p/original${movie.poster_path}`;

        // Add the URL to the state
        setImageUrls((prevUrls) => [...prevUrls, fullImageUrl]);

        // Create and append a preload link dynamically
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = fullImageUrl;
        link.type = 'image/jpg';
        document.head.appendChild(link);
        links.push(link); // Store reference for cleanup
      }
    });

    // Cleanup: Remove added links when component unmounts or movies change
    return () => {
      links.forEach((link) => document.head.removeChild(link));
    };
  }, [movies]);

  return imageUrls;
};

export default useImageOptimizer;
