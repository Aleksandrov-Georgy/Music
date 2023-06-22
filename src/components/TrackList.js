import PlayList from "./PlayList";
import * as S from '../style';

export default function TrackList() {   
      return (
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
                    <S.TrackBoxTitleLink href="http://">1<S.TrackBoxTitleSpan/></S.TrackBoxTitleLink>
                </S.TrackBoxTitleText>
            </S.TrackBoxTitle>
            <S.TrackAuthor>
                <S.TrackAuthorLink href="http://">2</S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
                <S.TrackAlbumLink href="http://">3</S.TrackAlbumLink>
            </S.TrackAlbum>
            <S.TrackTimeContent>
                <S.TrackTimeContentSvg alt="time">
                    {/* <use xlink:href="img/icon/sprite.svg#icon-like"></use> */}
                </S.TrackTimeContentSvg>
                <S.TrackTimeContent>4</S.TrackTimeContent>
            </S.TrackTimeContent>
        </S.TrackBox>
    </S.PlayListItem>
        

        </S.TrackListContent>
        <PlayList/>
    </S.TrackList>
)
}


