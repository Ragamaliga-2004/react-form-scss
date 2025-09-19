import './css/Movie.scss';

const Movie = ({movieName, heroName}) => {

  return (
    <div className="card">
        <h3>Movie Name : {movieName} </h3> 
        <h3>Hero Name : {heroName} </h3> 

    </div>
  );
};

export default Movie;