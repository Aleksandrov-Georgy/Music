import {useRef, useState } from "react";
import * as S from "../style";

export default function Bar() {
    const [play, setPlay] = useState(false);
    const ref = useRef();
    const progress = useRef();
  
  const audioHW = {
    author: 'Bobby_Marleni',
    track: 'Dropin',
  }

    function PlayPause() {
        setPlay(!play);

        if(play) {
        ref.current.pause();
        } else {
        ref.current.play();  
        }

        const progressInterval = setInterval(() => {
            const timeTrack = (ref.current.duration / 60);
            const timeFact = (ref.current.currentTime / 60);  
            const timeProgress = ((timeFact / timeTrack) * 100).toFixed(0);

            progress.current.value = timeProgress;

            if(timeProgress >= 100) {
            clearInterval(progressInterval)
            }
        }, 1000);
}


    return (
    <S.Bar>
        <S.BarContent>
            <S.BarProgress ref={progress} max = '100' value='0'/>
            <S.BarPlayerBlock>
                <S.BarPlayer>
                    <S.PlayerControls>  
                        <S.PlayerButtonAll>
                            <S.PlayerButtonPrev alt="prev">
                                <use href="img/icon/sprite.svg#icon-prev"/>
                            </S.PlayerButtonPrev>
                        </S.PlayerButtonAll>
                        <S.PlayerButtonAll>

                            <S.TestAudio ref={ref} src="Bobby_Marleni_-_Dropin.mp3"/>

                            <S.PlayerButtonPlay type="button" alt="play" onClick={() => {PlayPause()}}>
                            {!play ? (
                                    <use href="img/icon/sprite.svg#icon-play"/>
                                ) : (
                                    <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="5" height="19" fill="#D9D9D9"/>
                                        <rect x="10" width="5" height="19" fill="#D9D9D9"/>
                                    </svg>
                            )}
                                
                            </S.PlayerButtonPlay>
                        </S.PlayerButtonAll>
                        <S.PlayerButtonAll>
                            <S.PlayerButtonNext alt="next">
                                <use href="img/icon/sprite.svg#icon-next"/>
                            </S.PlayerButtonNext>
                        </S.PlayerButtonAll>
                        <S.PlayerButtonAll>
                            <S.PlayerButtonRepeat alt="repeat">
                                <use href="img/icon/sprite.svg#icon-repeat"/>
                            </S.PlayerButtonRepeat>
                        </S.PlayerButtonAll>
                        <S.PlayerButtonAll>
                            <S.PlayerButtonShuffle alt="shuffle">
                                <use href="img/icon/sprite.svg#icon-shuffle"/>
                            </S.PlayerButtonShuffle>
                        </S.PlayerButtonAll>
                    </S.PlayerControls>
                    
                    <S.PlayerTrackPlay>
                        <S.PlayerTrackContain>
                            <S.TrackPlayImage>
                    

                                <S.TrackPlaySvg alt="music">
                                    <use href="img/icon/note.svg#icon-note"/>
                                </S.TrackPlaySvg>
                            </S.TrackPlayImage>
                            <S.TrackAuthorBar>
                                <S.TrackAuthorLinkBar href="http://">{audioHW.track}</S.TrackAuthorLinkBar>
                            </S.TrackAuthorBar>
                            <S.TrackAlbumBar>
                                <S.TrackAlbumLinkBar href="http://">{audioHW.author}</S.TrackAlbumLinkBar>
                            </S.TrackAlbumBar>
                        </S.PlayerTrackContain>

                        <S.TrackPlayLikeDislike>
                            <S.TrackPlayLikeDislikeBox>
                                <S.TrackPlayLikeSVG alt="like">
                                    <use href="img/icon/sprite.svg#icon-like"/>
                                </S.TrackPlayLikeSVG>
                            </S.TrackPlayLikeDislikeBox>
                            <S.TrackPlayLikeDislikeBox>
                                <S.TrackPlayDislikeSVG alt="dislike">
                                    <use href="img/icon/sprite.svg#icon-dislike"/>
                                </S.TrackPlayDislikeSVG>
                            </S.TrackPlayLikeDislikeBox>
                        </S.TrackPlayLikeDislike>

                    </S.PlayerTrackPlay>
                </S.BarPlayer>
                <S.VolumeBlock>
                    <S.VolumeContent>
                            <S.VolumeImage>
                                <S.VolumeSvg alt="volume">
                                    <use href="img/icon/sprite.svg#icon-volume"/>
                                </S.VolumeSvg>
                            </S.VolumeImage>
                            <S.VolumeProgress>
                                <S.VolumeProgressLine type="range" name="range"/>
                            </S.VolumeProgress>
                    </S.VolumeContent>
                </S.VolumeBlock>
            </S.BarPlayerBlock>
        </S.BarContent>
    </S.Bar>
  )
}
