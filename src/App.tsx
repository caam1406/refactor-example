import { useEffect, useState } from 'react';
import { Button } from './components/Button';
import { api } from './services/api';
import './styles/global.scss';
import './styles/sidebar.scss';
import './styles/content.scss';
import { IGenreResponseProps } from './interfaces/genreResponseProps.I';
import { IMovieProps } from './interfaces/movieProps.I';
import { HeaderView } from './view/headerView';
import { Content } from './components/Content';
import { SideBar }  from './components/SideBar';


export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [genres, setGenres] = useState<IGenreResponseProps[]>([]);
  const [movies, setMovies] = useState<IMovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<IGenreResponseProps>({} as IGenreResponseProps);

  useEffect(() => {
    api.get<IGenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    api.get<IMovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });

    api.get<IGenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar genres={genres} handleClickButton={handleClickButton} selectedGenreId={selectedGenreId}/>
      <div className="container">
        <HeaderView {...selectedGenre}/>
        <Content movies={movies} />
      </div>
    </div>
  )
}