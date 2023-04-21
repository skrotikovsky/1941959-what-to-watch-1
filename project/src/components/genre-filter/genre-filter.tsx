import {useEffect, useState} from 'react';
import {Genre} from '../../consts';
import {useAppDispatch} from '../../hooks';
import {filmsProcess} from '../../store/films-process/films-process';

export default function GenreFilter(): JSX.Element {
  const [activeGenre, setActiveGenre] = useState(Genre.ALL_GENRES);
  const dispatch = useAppDispatch();
  useEffect(()=>{
    dispatch(filmsProcess.actions.setGenre(activeGenre));
    dispatch(filmsProcess.actions.resetFilmCounter());
  },[activeGenre]);
  return (
    <ul className="catalog__genres-list">
      <li onClick={()=>setActiveGenre(Genre.ALL_GENRES)} className=
        {`catalog__genres-item ${activeGenre === Genre.ALL_GENRES ? 'catalog__genres-item--active' : ''} `}
      >
        <a href="#" className="catalog__genres-link">
        All genres
        </a>
      </li>
      <li onClick={()=>setActiveGenre(Genre.COMEDY)} className=
        {`catalog__genres-item ${activeGenre === Genre.COMEDY ? 'catalog__genres-item--active' : ''} `}
      >
        <a href="#" className="catalog__genres-link">
        Comedies
        </a>
      </li>
      <li onClick={()=>setActiveGenre(Genre.CRIME)} className=
        {`catalog__genres-item ${activeGenre === Genre.CRIME ? 'catalog__genres-item--active' : ''} `}
      >
        <a href="#" className="catalog__genres-link">
        Crime
        </a>
      </li>
      <li onClick={()=>setActiveGenre(Genre.DOCUMENTARY)} className=
        {`catalog__genres-item ${activeGenre === Genre.DOCUMENTARY ? 'catalog__genres-item--active' : ''} `}
      >
        <a href="#" className="catalog__genres-link">
        Documentary
        </a>
      </li>
      <li onClick={()=>setActiveGenre(Genre.DRAMA)} className=
        {`catalog__genres-item ${activeGenre === Genre.DRAMA ? 'catalog__genres-item--active' : ''} `}
      >
        <a href="#" className="catalog__genres-link">
        Dramas
        </a>
      </li>
      <li onClick={()=>setActiveGenre(Genre.HORROR)} className=
        {`catalog__genres-item ${activeGenre === Genre.HORROR ? 'catalog__genres-item--active' : ''} `}
      >
        <a href="#" className="catalog__genres-link">
        Horror
        </a>
      </li>
      <li onClick={()=>setActiveGenre(Genre.KIDS_AND_FAMILY)} className=
        {`catalog__genres-item ${activeGenre === Genre.KIDS_AND_FAMILY ? 'catalog__genres-item--active' : ''} `}
      >
        <a href="#" className="catalog__genres-link">
        Kids &amp; Family
        </a>
      </li>
      <li onClick={()=>setActiveGenre(Genre.ROMANCE)} className=
        {`catalog__genres-item ${activeGenre === Genre.ROMANCE ? 'catalog__genres-item--active' : ''} `}
      >
        <a href="#" className="catalog__genres-link">
        Romance
        </a>
      </li>
      <li onClick={()=>setActiveGenre(Genre.SCI_FI)} className=
        {`catalog__genres-item ${activeGenre === Genre.SCI_FI ? 'catalog__genres-item--active' : ''} `}
      >
        <a href="#" className="catalog__genres-link">
        Sci-Fi
        </a>
      </li>
      <li onClick={()=>setActiveGenre(Genre.THRILLER)} className=
        {`catalog__genres-item ${activeGenre === Genre.THRILLER ? 'catalog__genres-item--active' : ''} `}
      >
        <a href="#" className="catalog__genres-link">
        Thrillers
        </a>
      </li>
    </ul>);
}
