
import { IoTimeOutline } from "react-icons/io5";
import Search from '../components/Search';
// eslint-disable-next-line import/no-cycle
import Sidebar from '../components/Sidebar';

import * as S from '../style';

// eslint-disable-next-line import/prefer-default-export
export function MyTracks() {
    return(
        <S.Wrapper>
          <S.Container>
            <S.HeaderCenter>
                <S.Main>
                    <Sidebar/>
                    <S.MainCenterblock>
                        <Search/>
                        <S.HeaderCenterblockText>Мои треки</S.HeaderCenterblockText>
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
                        
                            <S.TrackList>
                            <S.TrackListContent>
                            
                                <S.PlayListItem>
                                    <S.TrackBox>
                                        <S.TrackBoxTitle>
                                            <S.TrackBoxImage>
                                                <S.TrackBoxSvg alt="music">
                                                    {/* <use xlink:href="img/icon/sprite.svg#icon-note"/> */}
                                                </S.TrackBoxSvg>
                                            </S.TrackBoxImage>
                                            <S.TrackBoxTitleText>
                                                <S.TrackBoxTitleLink href="http://">Guilt<S.TrackBoxTitleSpan/></S.TrackBoxTitleLink>
                                            </S.TrackBoxTitleText>
                                        </S.TrackBoxTitle>
                                        <S.TrackAuthor>
                                            <S.TrackAuthorLink href="http://">Nero</S.TrackAuthorLink>
                                        </S.TrackAuthor>
                                        <S.TrackAlbum>
                                            <S.TrackAlbumLink href="http://">Welcome Reality</S.TrackAlbumLink>
                                        </S.TrackAlbum>
                                        <S.TrackTimeContent>
                                            <S.TrackTimeContentSvg alt="time">
                                                {/* <use xlink:href="img/icon/sprite.svg#icon-like"></use> */}
                                            </S.TrackTimeContentSvg>
                                            <S.TrackTimeContent>4:44</S.TrackTimeContent>
                                        </S.TrackTimeContent>
                                    </S.TrackBox>
                                </S.PlayListItem>

                                <S.PlayListItem>
                                    <S.TrackBox>
                                        <S.TrackBoxTitle>
                                            <S.TrackBoxImage>
                                                <S.TrackBoxSvg alt="music">
                                                    {/* <use xlink:href="img/icon/sprite.svg#icon-note"/> */}
                                                </S.TrackBoxSvg>
                                            </S.TrackBoxImage>
                                            <S.TrackBoxTitleText>
                                                <S.TrackBoxTitleLink href="http://">Guilt<S.TrackBoxTitleSpan/></S.TrackBoxTitleLink>
                                            </S.TrackBoxTitleText>
                                        </S.TrackBoxTitle>
                                        <S.TrackAuthor>
                                            <S.TrackAuthorLink href="http://">Nero</S.TrackAuthorLink>
                                        </S.TrackAuthor>
                                        <S.TrackAlbum>
                                            <S.TrackAlbumLink href="http://">Welcome Reality</S.TrackAlbumLink>
                                        </S.TrackAlbum>
                                        <S.TrackTimeContent>
                                            <S.TrackTimeContentSvg alt="time">
                                                {/* <use xlink:href="img/icon/sprite.svg#icon-like"></use> */}
                                            </S.TrackTimeContentSvg>
                                            <S.TrackTimeContent>4:44</S.TrackTimeContent>
                                        </S.TrackTimeContent>
                                    </S.TrackBox>
                                </S.PlayListItem>

                                <S.PlayListItem>
                                    <S.TrackBox>
                                        <S.TrackBoxTitle>
                                            <S.TrackBoxImage>
                                                <S.TrackBoxSvg alt="music">
                                                    {/* <use xlink:href="img/icon/sprite.svg#icon-note"/> */}
                                                </S.TrackBoxSvg>
                                            </S.TrackBoxImage>
                                            <S.TrackBoxTitleText>
                                                <S.TrackBoxTitleLink href="http://">Guilt<S.TrackBoxTitleSpan/></S.TrackBoxTitleLink>
                                            </S.TrackBoxTitleText>
                                        </S.TrackBoxTitle>
                                        <S.TrackAuthor>
                                            <S.TrackAuthorLink href="http://">Nero</S.TrackAuthorLink>
                                        </S.TrackAuthor>
                                        <S.TrackAlbum>
                                            <S.TrackAlbumLink href="http://">Welcome Reality</S.TrackAlbumLink>
                                        </S.TrackAlbum>
                                        <S.TrackTimeContent>
                                            <S.TrackTimeContentSvg alt="time">
                                                {/* <use xlink:href="img/icon/sprite.svg#icon-like"></use> */}
                                            </S.TrackTimeContentSvg>
                                            <S.TrackTimeContent>4:44</S.TrackTimeContent>
                                        </S.TrackTimeContent>
                                    </S.TrackBox>
                                </S.PlayListItem>

                                <S.PlayListItem>
                                    <S.TrackBox>
                                        <S.TrackBoxTitle>
                                            <S.TrackBoxImage>
                                                <S.TrackBoxSvg alt="music">
                                                    {/* <use xlink:href="img/icon/sprite.svg#icon-note"/> */}
                                                </S.TrackBoxSvg>
                                            </S.TrackBoxImage>
                                            <S.TrackBoxTitleText>
                                                <S.TrackBoxTitleLink href="http://">Guilt<S.TrackBoxTitleSpan/></S.TrackBoxTitleLink>
                                            </S.TrackBoxTitleText>
                                        </S.TrackBoxTitle>
                                        <S.TrackAuthor>
                                            <S.TrackAuthorLink href="http://">Nero</S.TrackAuthorLink>
                                        </S.TrackAuthor>
                                        <S.TrackAlbum>
                                            <S.TrackAlbumLink href="http://">Welcome Reality</S.TrackAlbumLink>
                                        </S.TrackAlbum>
                                        <S.TrackTimeContent>
                                            <S.TrackTimeContentSvg alt="time">
                                                {/* <use xlink:href="img/icon/sprite.svg#icon-like"></use> */}
                                            </S.TrackTimeContentSvg>
                                            <S.TrackTimeContent>4:44</S.TrackTimeContent>
                                        </S.TrackTimeContent>
                                    </S.TrackBox>
                                </S.PlayListItem>

                                <S.PlayListItem>
                                    <S.TrackBox>
                                        <S.TrackBoxTitle>
                                            <S.TrackBoxImage>
                                                <S.TrackBoxSvg alt="music">
                                                    {/* <use xlink:href="img/icon/sprite.svg#icon-note"/> */}
                                                </S.TrackBoxSvg>
                                            </S.TrackBoxImage>
                                            <S.TrackBoxTitleText>
                                                <S.TrackBoxTitleLink href="http://">Guilt<S.TrackBoxTitleSpan/></S.TrackBoxTitleLink>
                                            </S.TrackBoxTitleText>
                                        </S.TrackBoxTitle>
                                        <S.TrackAuthor>
                                            <S.TrackAuthorLink href="http://">Nero</S.TrackAuthorLink>
                                        </S.TrackAuthor>
                                        <S.TrackAlbum>
                                            <S.TrackAlbumLink href="http://">Welcome Reality</S.TrackAlbumLink>
                                        </S.TrackAlbum>
                                        <S.TrackTimeContent>
                                            <S.TrackTimeContentSvg alt="time">
                                                {/* <use xlink:href="img/icon/sprite.svg#icon-like"></use> */}
                                            </S.TrackTimeContentSvg>
                                            <S.TrackTimeContent>4:44</S.TrackTimeContent>
                                        </S.TrackTimeContent>
                                    </S.TrackBox>
                                </S.PlayListItem>

                                <S.PlayListItem>
                                    <S.TrackBox>
                                        <S.TrackBoxTitle>
                                            <S.TrackBoxImage>
                                                <S.TrackBoxSvg alt="music">
                                                    {/* <use xlink:href="img/icon/sprite.svg#icon-note"/> */}
                                                </S.TrackBoxSvg>
                                            </S.TrackBoxImage>
                                            <S.TrackBoxTitleText>
                                                <S.TrackBoxTitleLink href="http://">Guilt<S.TrackBoxTitleSpan/></S.TrackBoxTitleLink>
                                            </S.TrackBoxTitleText>
                                        </S.TrackBoxTitle>
                                        <S.TrackAuthor>
                                            <S.TrackAuthorLink href="http://">Nero</S.TrackAuthorLink>
                                        </S.TrackAuthor>
                                        <S.TrackAlbum>
                                            <S.TrackAlbumLink href="http://">Welcome Reality</S.TrackAlbumLink>
                                        </S.TrackAlbum>
                                        <S.TrackTimeContent>
                                            <S.TrackTimeContentSvg alt="time">
                                                {/* <use xlink:href="img/icon/sprite.svg#icon-like"></use> */}
                                            </S.TrackTimeContentSvg>
                                            <S.TrackTimeContent>4:44</S.TrackTimeContent>
                                        </S.TrackTimeContent>
                                    </S.TrackBox>
                                </S.PlayListItem>

                            </S.TrackListContent>
                        </S.TrackList>
                    </S.MainCenterblock>
                </S.Main>
            </S.HeaderCenter>
        </S.Container>
        </S.Wrapper>
        

    )
}

