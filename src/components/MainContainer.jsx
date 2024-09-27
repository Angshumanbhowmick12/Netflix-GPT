import  { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!movies || movies.length === 0) return;

    // Set up a timer to change movie every 60 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 60000); // 60 seconds interval

    // Cleanup function to clear the interval on component unmount
    return () => clearInterval(interval);
  }, [movies]); // Depend on movies to restart interval if movies change

  if (!movies || movies.length === 0) return null;

  const mainMovie = movies[currentIndex];
  const { original_title, overview, id } = mainMovie;

  return (
    <div className="">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
