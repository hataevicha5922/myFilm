import { useParams } from 'react-router-dom';
import { useGetMovieQuery } from '../../store/search';
import DescriptionMovie from '../DescriptionMovie/DescriptionMovie';
import PosterMovie from '../PosterMovie/PosterMovie';
import { useNavigate } from 'react-router-dom';
import { ErrorBoundary } from '../ErrorBoundry/ErrorBoundry';
import './MovieDitail.scss';

const MovieDetail = () => {
  const { imbID } = useParams();
  const navigate = useNavigate();
  const handleRedir = () => {
    navigate('/');
  };
  const { data, error, isLoading } = useGetMovieQuery(imbID);

  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {data && (
        <div className="wrapper-information">
          <ErrorBoundary>
            <DescriptionMovie data={data} nav={handleRedir} />
            <PosterMovie data={data} />
          </ErrorBoundary>
        </div>
      )}
      {error && <h1>Error</h1>}
    </>
  );
};

export default MovieDetail;
