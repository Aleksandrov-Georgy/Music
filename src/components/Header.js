/* eslint-disable prefer-const */
// import React from 'react'
import { useState } from "react";
import { IoTimeOutline } from "react-icons/io5";
import HeaderSkeleton from "./Skeleton-loader/HeaderSkeleton";

export default function Header() {

  let [filter, setFilter] = useState(false);

  let [filterYears, setFilterYears] = useState(false)

  let [filtersGerne, setFiltersGerne] = useState(false)

  const buttonClick = (buttonName) => {
    if(buttonName === 'filter') {
      setFilter(!filter);
      setFilterYears(false);
      setFiltersGerne(false);
    } else if(buttonName === 'filterYears') {
      setFilterYears(!filterYears);
      setFilter(false);
      setFiltersGerne(false);
    } else if(buttonName === 'filtersGerne') {
      setFiltersGerne(!filtersGerne);
      setFilter(false);
      setFilterYears(false);
    }
  };

  return (
    <div className="header__center">
        <h2 className="centerblock__h2">Треки</h2>
        <div className="centerblock__filter filter">
            <div className="filter__title">Искать по:</div>
            <button type="button" className="filter__button button-author _btn-text" onClick={() => buttonClick('filter')}>исполнителю</button> 
                {filter && (
                <div className="nav__burger">
                    <div className="filter__menu">
                        <a href="https://">Исполнитель 1</a>
                        <a href="https://">Исполнитель 2</a>
                        <a href="https://">Исполнитель 3</a>
                        <a href="https://">Исполнитель 4</a>
                        <a href="https://">Исполнитель 5</a>
                        <a href="https://">Исполнитель 6</a>
                        <a href="https://">Исполнитель 7</a>
                        <a href="https://">Исполнитель 8</a>
                        <a href="https://">Исполнитель 9</a>
                        <a href="https://">Исполнитель 10</a>
                        <a href="https://">Исполнитель 11</a>
                    </div>
                </div> 
                )}

            <button type="button" className="filter__button button-year _btn-text" onClick={() => buttonClick('filterYears')}>году выпуска</button>
                    {filterYears && (
                        <div className="nav__burger">
                            <div className="filter-years__menu">
                                <a href="https://">Год выпуска 1</a>
                                <a href="https://">Год выпуска 2</a>
                                <a href="https://">Год выпуска 3</a>
                                <a href="https://">Год выпуска 4</a>
                                <a href="https://">Год выпуска 5</a>
                                <a href="https://">Год выпуска 6</a>
                                <a href="https://">Год выпуска 7</a>
                                <a href="https://">Год выпуска 8</a>
                                <a href="https://">Год выпуска 9</a>
                                <a href="https://">Год выпуска 10</a>
                                <a href="https://">Год выпуска 11</a>
                            </div>
                        </div> 
                    )}

            <button type="button" className="filter__button button-genre _btn-text" onClick={() => buttonClick('filtersGerne')}>жанру</button>
                        {filtersGerne && (
                            <div className="nav__burger">
                                <div className="filter-gerne__menu">
                                    <a href="https://">Жанр 1</a>
                                    <a href="https://">Жанр 2</a>
                                    <a href="https://">Жанр 3</a>
                                    <a href="https://">Жанр 4</a>
                                    <a href="https://">Жанр 5</a>
                                    <a href="https://">Жанр 6</a>
                                    <a href="https://">Жанр 7</a>
                                    <a href="https://">Жанр 8</a>
                                    <a href="https://">Жанр 9</a>
                                    <a href="https://">Жанр 10</a>
                                    <a href="https://">Жанр 11</a>
                                </div>
                            </div>
                        )}
        </div>
        <div className="centerblock__content">
        <div className="content__title playlist-title">
            <div className="playlist-title__col col01">Трек</div>
            <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
            <div className="playlist-title__col col03">АЛЬБОМ</div>
            <div className="playlist-title__col col04">
                <svg className="playlist-title__svg" alt="time">
                    <IoTimeOutline/>
                </svg>
            </div>
            
          </div>
          
          
        </div>
        <HeaderSkeleton/>
        
        
    </div>
  )
}
