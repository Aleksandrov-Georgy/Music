import styled, {css} from 'styled-components';
import { HiBars3 } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";


export const Wrapper = styled.div`
    width: 100%;
    min-height: 100%;
    overflow: hidden;
    background-color: #383838;
`;

export const Container = styled.div`
    max-width: 1920px;
    height: 100vh;
    margin: 0 auto;
    position: relative;
    background-color: #181818;
`;

export const Main = styled.main`
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
    background-color: #1c1c1c;
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
color: #FFFFFF;
margin-left: 5px;
cursor: pointer;
margin-top: 66px;
position: fixed;
transition: all 200ms ease;
:hover {
    scale: 2.3;
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

export const MenuLink = styled.a`
    color: #FFFFFF;
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
    color: white;
    marginRight: 10px;
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
    color: #FFFFFF;
  
  
  ::-webkit-input-placeholder {
    background-color: transparent;
    color: #FFFFFF;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  
  :-ms-input-placeholder {
    background-color: transparent;
    color: #FFFFFF;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  
  ::-ms-input-placeholder {
    background-color: transparent;
    color: #FFFFFF;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  
  ::placeholder {
    background-color: transparent;
    color: #FFFFFF;
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
    color: #FFFFFF;
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
    color: #FFFFFF;
`;

export const FilterButton = styled.button`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border: 1px solid #FFFFFF;
    border-radius: 60px;
    padding: 6px 20px;
    color: #ffffff;
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
    }
  
  ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #FFFFFF;
  }
  
  
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 34px;
    gap: 10px;

    position: absolute;
    height: 305px;
    left: 440px;
    top: 315px;
    padding: 20px;

    background: #313131;
    border-radius: 12px;
    overflow-y: scroll;  
`;

export const FilterText = styled.a`
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #FFFFFF;
    flex: none;
    order: 1;
    flex-grow: 0;
`;

export const FilterYears = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 34px;
    gap: 10px;

    position: absolute;
    height: 305px;
    left: 590px;
    top: 315px;
    padding: 20px;

    background: #313131;
    border-radius: 12px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 4px;
        background-color: #4B4949;
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
    padding: 34px;
    gap: 10px;

    position: absolute;
    height: 305px;
    left: 740px;
    top: 315px;
    padding: 20px;

    background: #313131;
    border-radius: 12px;
    overflow-y: scroll;
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
    color: #FFFFFF;
`;


export const TrackBoxTitleSpan = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #4E4E4E;
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
    color: #FFFFFF;
    text-align: left;
`;

export const TrackAlbum= styled.div`
    width: 245px;
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
    color: #696969;
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
    color: #696969;
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
