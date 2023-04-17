import {useEffect, useState} from 'react';
import {Genres} from '../../consts';
import {useAppDispatch} from '../../hooks';
import {changeGenre} from '../../store/action';

export default function GenreFilter(): JSX.Element {
  const [activeGenre, setActiveGenre] = useState(Genres.ALL_GENRES);
  const dispatch = useAppDispatch();
  useEffect(()=>{
    dispatch(changeGenre(activeGenre));
  },[activeGenre]);
  return (
    <ul className="catalog__genres-list">
      <li onClick={()=>setActiveGenre(Genres.ALL_GENRES)} className=
        {`catalog__genres-item ${activeGenre === Genres.ALL_GENRES ? 'catalog__genres-item--active' : ''} `}
      >
        <a href="#" className="catalog__genres-link">
        All genres
        </a>
      </li>
      <li onClick={()=>setActiveGenre(Genres.COMEDY)} className=
        {`catalog__genres-item ${activeGenre === Genres.COMEDY ? 'catalog__genres-item--active' : ''} `}
      >
        <a href="#" className="catalog__genres-link">
        Comedies
        </a>
      </li>
      <li onClick={()=>setActiveGenre(Genres.CRIME)} className=
        {`catalog__genres-item ${activeGenre === Genres.CRIME ? 'catalog__genres-item--active' : ''} `}
      >
        <a href="#" className="catalog__genres-link">
        Crime
        </a>
      </li>
      <li onClick={()=>setActiveGenre(Genres.DOCUMENTARY)} className=
        {`catalog__genres-item ${activeGenre === Genres.DOCUMENTARY ? 'catalog__genres-item--active' : ''} `}
      >
        <a href="#" className="catalog__genres-link">
        Documentary
        </a>
      </li>
      <li onClick={()=>setActiveGenre(Genres.DRAMA)} className=
        {`catalog__genres-item ${activeGenre === Genres.DRAMA ? 'catalog__genres-item--active' : ''} `}
      >
        <a href="#" className="catalog__genres-link">
        Dramas
        </a>
      </li>
      <li onClick={()=>setActiveGenre(Genres.HORROR)} className=
        {`catalog__genres-item ${activeGenre === Genres.HORROR ? 'catalog__genres-item--active' : ''} `}
      >
        <a href="#" className="catalog__genres-link">
        Horror
        </a>
      </li>
      <li onClick={()=>setActiveGenre(Genres.KIDS_AND_FAMILY)} className=
        {`catalog__genres-item ${activeGenre === Genres.KIDS_AND_FAMILY ? 'catalog__genres-item--active' : ''} `}
      >
        <a href="#" className="catalog__genres-link">
        Kids &amp; Family
        </a>
      </li>
      <li onClick={()=>setActiveGenre(Genres.ROMANCE)} className=
        {`catalog__genres-item ${activeGenre === Genres.ROMANCE ? 'catalog__genres-item--active' : ''} `}
      >
        <a href="#" className="catalog__genres-link">
        Romance
        </a>
      </li>
      <li onClick={()=>setActiveGenre(Genres.SCI_FI)} className=
        {`catalog__genres-item ${activeGenre === Genres.SCI_FI ? 'catalog__genres-item--active' : ''} `}
      >
        <a href="#" className="catalog__genres-link">
        Sci-Fi
        </a>
      </li>
      <li onClick={()=>setActiveGenre(Genres.THRILLER)} className=
        {`catalog__genres-item ${activeGenre === Genres.THRILLER ? 'catalog__genres-item--active' : ''} `}
      >
        <a href="#" className="catalog__genres-link">
        Thrillers
        </a>
      </li>
    </ul>);
}
