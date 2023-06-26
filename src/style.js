import styled, {css} from 'styled-components';
import { HiBars3 } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { IoExitOutline } from "react-icons/io5";




export const Color = css`  
    color:  #FFFFFF;
`;

export const Background = css`
    background: #181818;
`;

export const BackgroundSidebar = css`
    background: #1C1C1C;
`;




export const Registration = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const RegistrationContent = styled.div`
    width: 366px;
    height: 439px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    border-radius: 12px;

`;

export const RegistrationInput = styled.input`
    width: 278.5px;
    height: 30px;
    left: 40.5px;
    top: 138px;
    padding-left: 0;
    border: none;
    border-bottom: 1px solid #D0CECE;
    margin-top: 40px;

    ::placeholder{
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        color: #E1E1E1; 
    }
`;

export const Button = styled.button`
        width: 278px;
        height: 52px;
        left: 41px;
        top: 268px;
        border-radius: 6px;
        margin-top: 40px;

        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
`

export const RegistrationButtonEntry = styled(Button)`
        background: #580EA2;
        color: #FFFFFF;
        transition: all .2s ease;

        :hover {
            background: #3F007D;
        }
        :active{
            background: #271A58;
        }
`

export const RegistrationButton = styled(Button)`
        background: #FFFFFF;
        color: #000000;
        border: 1px solid #D0CECE;
        transition: all .2s ease;

        :hover {
            background: #F4F5F6;
        }
        :active{
            background: #D9D9D9;
        }
`;

export const RegistrationButtonSign = styled(Button)`
        background: #FFFFFF;
        color: #000000;
        border: 1px solid #D0CECE;
        transition: all .2s ease;

        :hover {
            background: #F4F5F6;
        }
        :active{
            background: #D9D9D9;
        }
`;



export const RegistrationLogo = styled.img`
    margin-top: 43px;
    width: 140px;
`;

export const Wrapper = styled.div`
    width: 100%;
    min-height: 100%;
    overflow: hidden;
    ${Background}
    ${Color}
`;



export const Container = styled.div`
    max-width: 1920px;
    height: 100vh;
    margin: 0 auto;
    position: relative;
    ${'' /* ${Color};
    ${Background} */}
`;

export const Main = styled.main`
 max-width: 1920px;
    height: 100vh;
    margin: 0 auto;
    position: relative;
    ${'' /* ${Color}; */}
    ${'' /* ${Background} */}
    -webkit-box-flex: 1;
        -ms-flex: 1 1 auto;
            flex: 1 1 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
`;

export const Nav = styled.div`
    padding-top: 36px;
    padding-left: 36px;
    width: 244px;
    height: 100vh;
    ${BackgroundSidebar}


`;

export const LogoImage = styled.img`
    width: 113.33px;
    height: 17px;
    color: #181818;
    margin-right: 150px;
    position: fixed;
`;

export const BurgerLineIcon = styled(HiBars3)`
    
scale: 2;
${Color};
margin-left: 5px;
cursor: pointer;
margin-top: 66px;
position: fixed;

transition: all 300ms ease;
:hover {
    scale: 2.5
}
`;

export const NavBurger = styled.div`
    width: 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;

    cursor: pointer;


`;

export const MenuList = styled.ul`
    padding: 18px 0 10px 0;
    margin-top: 100px;
`;

export const MenuItem = styled.li`
    padding: 5px 0;
    margin-bottom: 16px;
`;

export const Theme = styled.div`
width: 100px;
height: 100px;
`;


  
export const MenuLink = styled.a`
    ${Color};
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    transition: all .3s ease;
    :hover{
        text-decoration: underline;
    }
`;

export const MainCenterblock = styled.div`
    width: auto;
      -webkit-box-flex: 3;
      -ms-flex-positive: 3;
    flex-grow: 3;
    padding: 20px 40px 20px 111px;
`;

export const SearchHeaderNav = styled.div`
    display: flex;
    align-items: center;
`;

export const SearchNavSearch = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid #4E4E4E;
    width: 1293px;
`;

export const SearchNavIcon = styled(CiSearch)`
    width: 14px;
    height: 14px;
    ${Color};
    marginRight: 10px;
`;

export const ExitButton = styled.div`
    width: 50px;
    height: 50px;
    border: 1px solid;
    border-color: ${Color};
    ${'' /* ${Color}; */}
    border-radius: 50%;
    margin-left: 128px;
    margin-top: 17px;
    text-align: center;
    padding-top: 16px;
    padding-left: 6px;
`;

export const ExitIcon = styled(IoExitOutline)`
    scale: 1.5
`;

export const SearchInputText = styled.input`

      -webkit-box-flex: 100;
        -ms-flex-positive: 100;
            flex-grow: 100;
    background-color: transparent;
    border: none;
    padding: 13px 10px 14px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    ${'' /* ${Color}; */}
  
  
  ::-webkit-input-placeholder {
    background-color: transparent;
    ${'' /* ${Color}; */}
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  
  :-ms-input-placeholder {
    background-color: transparent;
    ${'' /* ${Color}; */}
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  
  ::-ms-input-placeholder {
    background-color: transparent;
    ${'' /* ${Color}; */}
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  
  ::placeholder {
    background-color: transparent;
    ${'' /* ${Color}; */}
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`;

export const HeaderCenter = styled.div``;

export const HeaderCenterblockText = styled.h2`
    font-family: 'StratosSkyeng';
    font-style: normal;
    font-weight: 400;
    font-size: 60px;
    line-height: 64px;
    letter-spacing: -0.013em;
    font-feature-settings: 'pnum' on, 'lnum' on;
    ${'' /* ${Color}; */}
    margin: 50px 0 50px 0;
`;

export const HeaderFilterBlock = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    margin-bottom: 51px;
`;

export const HeaderFilterTitle = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-right: 15px;
    ${Color};
`;

export const FilterButton = styled.button`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border: 1px solid #FFFFFF;
    border-radius: 60px;
    padding: 6px 20px;
    color: inherit;
    ${'' /* ${Color}; */}
    background-color: transparent;
  
    :not(:last-child) {
        margin-right: 10px;
    }
    :hover {
        border-color: #D9B6FF;
        color: #D9B6FF;
        cursor: pointer;
    }

`;

export const HeaderNavBurger = styled.div`
    width: 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
    cursor: pointer;
`;

export const HeaderFilterMenu = styled.div`
    ::-webkit-scrollbar {
        width: 4px;
        background-color: #4B4949;
        border-radius: 10px;
    }
  
  ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #FFFFFF;
  }
  
  
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    position: absolute;
    height: 305px;
    left: 440px;
    top: 315px;
    padding-right: 15px;
    background: rgb(49, 49, 49);
    border-radius: 12px;
    overflow-y: scroll;
    border: 34px solid transparent;
`;

export const FilterText = styled.a`
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    ${'' /* ${Color}; */}
    flex: none;
    order: 1;
    flex-grow: 0;
`;

export const FilterYears = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    position: absolute;
    height: 305px;
    left: 590px;
    top: 315px;

    padding-right: 15px;
    background: rgb(49, 49, 49);
    border-radius: 12px;
    overflow-y: scroll;
    border: 34px solid transparent;

    ::-webkit-scrollbar {
        width: 4px;
        background-color: #4B4949;
        border-radius: 10px
    }
  
  ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #FFFFFF;
  }
`;
export const FilterGerne = styled.div`
    width: 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;

    cursor: pointer;
`;

export const FilterGerneMenu = styled.div`
    ::-webkit-scrollbar {
        width: 4px;
        background-color: #4B4949;
        border-radius: 10px

    }
  
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #FFFFFF;
    }
  
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #4B4949;
    height: 65px;

    }

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    position: absolute;
    height: 305px;
    left: 740px;
    top: 315px;
    padding-right: 15px;

    background: #313131;
    border-radius: 12px;
    overflow-y: scroll;
    border: 34px solid transparent;
`;

export const CenterBlockContent = styled.div`
    width: 1100px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
`;

export const CenterContentTitle = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
    margin-bottom: 24px;
`;

export const MixinCol1 = css`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 2px;
    color: #696969;
    text-transform: uppercase;
`;

export const PlaylistCol1 = styled.div`
    ${MixinCol1};
    width: 447px;
`;

export const PlaylistCol2 = styled.div`
    ${MixinCol1};
    width: 321px;
`;

export const PlaylistCol3 = styled.div`
    ${MixinCol1};
    width: 245px;
`;

export const PlaylistCol4 = styled.div`
    ${MixinCol1};
    width: 60px;
    text-align: end;
`;

export const WatchIcon = styled.div`
    width: 12px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
    margin-left: 40px;
`;

export const TrackList= styled.div`
    display: flex;
`;

export const TrackWrap = styled.div``;

export const TrackListContent = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
        overflow-y: auto;
`;
export const PlayListItem = styled.div`
    width: 100%;
    display: block;
    margin-bottom: 12px;
`;
export const TrackBox= styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
`;
export const TrackBoxTitle = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    width: 447px;
`;
export const TrackBoxImage = styled.div`
    width: 51px;
    height: 51px;
    padding: 16px;
    background: #313131;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    margin-right: 17px;
`;

export const TrackBoxSvg= styled.svg`
    width: 18px;
    height: 17px;
    fill: transparent;
    stroke: #4E4E4E;
`;
export const TrackBoxTitleText= styled.div``;

export const TrackBoxTitleLink = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    ${Color};
`;


export const TrackBoxTitleSpan = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    ${Color};
`;
export const TrackAuthor = styled.div`
    width: 321px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start;
`;
export const TrackAuthorLink = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    ${'' /* ${Color}; */}
    text-align: left;
`;

export const TrackAlbum= styled.div`
    width: 280px;
`;

export const TrackTimeContentSvg = styled.div `
    width: 100%;
    height: 100%;   
`;

export const TrackAlbumLink = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    ${'' /* ${Color}; */}
`;
export const TrackTime = styled.div``;


export const TrackTimeSvg= styled.svg`
    width: 14px;
    height: 12px;
    margin-right: 17px;
    fill: transparent;
    stroke: #696969;    
`;
export const TrackTimeContent = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: right;
    ${'' /* ${Color}; */}
`;

export const SidebarBlock = styled.div`
    height: 100%;
    padding: 75px 0 0 179px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-pack: start;
        -ms-flex-pack: start;
    justify-content: flex-start;
`;

export const SidebarList = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    gap: 30px;
`;

export const SidebarItem = styled.div`
    width: 250px;
    height: 150px;
  
    :not(:last-child) {
        margin-bottom: 30px;
    }
`;

export const SidebarLink = styled.a`
    width: 100%;
    height: 100%;
`;

export const SidebarImage = styled.img`
    width: 100%;
    height: auto;
`;

export const Bar = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(28, 28, 28, 0.5);
`;

export const BarContent = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
`;

export const BarProgress = styled.progress`
    width: 100%;
    height: 5px;
    background: #2E2E2E;
`;

export const BarPlayerBlock = styled.div`
    height: 73px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
`;

export const BarPlayer= styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start;
`;

export const PlayerControls = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    padding: 0 27px 0 31px;
`;

export const PlayerButtonAll = styled.div`
    padding: 5px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;

    :hover svg {
        fill: transparent;
        stroke: #ACACAC;
        cursor: pointer;
    }
    :active {
        fill: #696969;
        stroke: #FFFFFF;
        cursor: pointer;
    }
`

export const PlayerButtonPrev = styled.svg`
    width: 15px;
    height: 14px;
`

export const PlayerButtonPlay = styled.svg`
   
    width: 22px;
    height: 20px;
    fill: #D9D9D9;
`;

export const PlayerButtonNext = styled.svg`
    width: 15px;
    height: 14px;
    fill: inherit;
    stroke: #D9D9D9;
`;

export const PlayerButtonRepeat = styled.svg`
    width: 18px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
`;

export const PlayerButtonShuffle = styled.svg`
    width: 19px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`;

export const PlayerTrackPlay = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
`;

export const PlayerTrackContain = styled.div`
    width: auto;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: auto 1fr;
    grid-template-columns: auto 1fr;
    grid-template-areas: "image author" "image album";
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    align-content: center;
`;

export const TrackPlayImage = styled.div`
    width: 51px;
    height: 51px;
    background-color: #313131;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    margin-right: 12px;
    -ms-grid-row: 1;
    -ms-grid-row-span: 2;
    -ms-grid-column: 1;
    grid-area: image;
`;

export const TrackPlaySvg = styled.svg`
    width: 18px;
    height: 17px;
    fill: transparent;
    stroke: #4E4E4E;
`

export const TrackAuthorBar = styled.div`
    -ms-grid-row: 1;
    -ms-grid-column: 2;
    grid-area: author;
    min-width: 49px;
`;

export const TrackAuthorLinkBar = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    ${Color};
    white-space: nowrap;
`
export const TrackAlbumBar = styled.div`
    -ms-grid-row: 2;
    -ms-grid-column: 2;
    grid-area: album;
    min-width: 49px;
`
export const TrackAlbumLinkBar = styled.a`
    font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  ${'' /* ${Color}; */}
`

export const TrackPlayLikeDislike = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-left: 26%;
`;

export const TrackPlayLikeDislikeBox = styled.div`
    padding: 5px;

    :hover svg {
        fill: transparent;
        stroke: #ACACAC;
        cursor: pointer;
    }
    :active {
        fill: #696969;
        stroke: #FFFFFF;
        cursor: pointer;
    }
`;

export const TrackPlayLikeSVG = styled.svg`
    width: 14px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
`;


export const TrackPlayDislikeSVG = styled.svg`
    width: 14px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
    margin-left: 28px;
`;

export const VolumeBlock = styled.div`
    width: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 92px 0 0;
`;

export const VolumeContent = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: end;
`;

export const VolumeImage = styled.div`
    width: 13px;
    height: 18px;
    margin-right: 17px;
`;

export const VolumeSvg = styled.svg`
    width: 13px;
    height: 18px;
    fill: transparent;
`

export const VolumeProgress = styled.div`
    width: 109px;
    cursor: pointer;
`;

export const VolumeProgressLine = styled.input`
    cursor: pointer;
    width: 109px;
`;

export const TestAudio = styled.audio`
    
`;