/* eslint-disable prefer-const */
// import React from 'react'
import '../style.css'
import { useState } from "react";
import { IoTimeOutline } from "react-icons/io5";
import Bar from './Bar';
import HeaderSkeleton from "./Skeleton-loader/HeaderSkeleton";
import * as S from '../style'

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
    <S.HeaderCenter>
        <S.HeaderCenterblockText>Треки</S.HeaderCenterblockText>
        <S.HeaderFilterBlock>
            <S.HeaderFilterTitle>Искать по:</S.HeaderFilterTitle>
            <S.FilterButton type="button" onClick={() => buttonClick('filter')}>исполнителю</S.FilterButton> 
                {filter && (
                <S.HeaderNavBurger>
                    <S.HeaderFilterMenu>
                        <S.FilterText href="https://">Исполнитель 1</S.FilterText>
                        <S.FilterText href="https://">Исполнитель 2</S.FilterText>
                        <S.FilterText href="https://">Исполнитель 3</S.FilterText>
                        <S.FilterText href="https://">Исполнитель 4</S.FilterText>
                        <S.FilterText href="https://">Исполнитель 5</S.FilterText>
                        <S.FilterText href="https://">Исполнитель 6</S.FilterText>
                        <S.FilterText href="https://">Исполнитель 7</S.FilterText>
                        <S.FilterText href="https://">Исполнитель 8</S.FilterText>
                        <S.FilterText href="https://">Исполнитель 9</S.FilterText>
                        <S.FilterText href="https://">Исполнитель 10</S.FilterText>
                        <S.FilterText href="https://">Исполнитель 11</S.FilterText>
                    </S.HeaderFilterMenu>
                </S.HeaderNavBurger> 
                )}

            <S.FilterButton type="button" onClick={() => buttonClick('filterYears')}>году выпуска</S.FilterButton>
                    {filterYears && (
                        <S.HeaderNavBurger>
                            <S.FilterYears>
                                <S.FilterText href="https://">Год выпуска 1</S.FilterText>
                                <S.FilterText href="https://">Год выпуска 2</S.FilterText>
                                <S.FilterText href="https://">Год выпуска 3</S.FilterText>
                                <S.FilterText href="https://">Год выпуска 4</S.FilterText>
                                <S.FilterText href="https://">Год выпуска 5</S.FilterText>
                                <S.FilterText href="https://">Год выпуска 6</S.FilterText>
                                <S.FilterText href="https://">Год выпуска 7</S.FilterText>
                                <S.FilterText href="https://">Год выпуска 8</S.FilterText>
                                <S.FilterText href="https://">Год выпуска 9</S.FilterText>
                                <S.FilterText href="https://">Год выпуска 10</S.FilterText>
                                <S.FilterText href="https://">Год выпуска 11</S.FilterText>
                            </S.FilterYears>
                        </S.HeaderNavBurger> 
                    )}

            <S.FilterButton type="button" onClick={() => buttonClick('filtersGerne')}>жанру</S.FilterButton>
                        {filtersGerne && (
                            <S.FilterGerne>
                                <S.FilterGerneMenu>
                                    <S.FilterText href="https://">Жанр 1</S.FilterText>
                                    <S.FilterText href="https://">Жанр 2</S.FilterText>
                                    <S.FilterText href="https://">Жанр 3</S.FilterText>
                                    <S.FilterText href="https://">Жанр 4</S.FilterText>
                                    <S.FilterText href="https://">Жанр 5</S.FilterText>
                                    <S.FilterText href="https://">Жанр 6</S.FilterText>
                                    <S.FilterText href="https://">Жанр 7</S.FilterText>
                                    <S.FilterText href="https://">Жанр 8</S.FilterText>
                                    <S.FilterText href="https://">Жанр 9</S.FilterText>
                                    <S.FilterText href="https://">Жанр 10</S.FilterText>
                                    <S.FilterText href="https://">Жанр 11</S.FilterText>
                                </S.FilterGerneMenu>
                            </S.FilterGerne>
                        )}
        </S.HeaderFilterBlock>
        <S.CenterBlockContent >
        <S.CenterContentTitle>
            <S.PlaylistCol1>Трек</S.PlaylistCol1>
            <S.PlaylistCol2>ИСПОЛНИТЕЛЬ</S.PlaylistCol2>
            <S.PlaylistCol3>АЛЬБОМ</S.PlaylistCol3>
            <S.PlaylistCol4>
                <S.WatchIcon>
                    <IoTimeOutline/>
                </S.WatchIcon>
            </S.PlaylistCol4>
          </S.CenterContentTitle>
        </S.CenterBlockContent>
        <HeaderSkeleton/>
        <Bar/>

    </S.HeaderCenter>
  )
}