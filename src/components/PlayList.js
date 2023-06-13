import { Link } from 'react-router-dom';
import * as S from '../style';

export default function PlayList() {
  return (
    <S.SidebarBlock>
        <S.SidebarList>
        <Link to='/playlist/1'>
            <S.SidebarItem>
                <S.SidebarImage src="img/playlist01.png" alt="day's playlist"/>
            </S.SidebarItem>
        </Link>
        <Link to='/playlist/2'>
            <S.SidebarItem>
                <S.SidebarImage src="img/playlist02.png" alt="day's playlist"/>
            </S.SidebarItem>
        </Link>

        <Link to='/playlist/3'>
            <S.SidebarItem>
                <S.SidebarImage src="img/playlist03.png" alt="day's playlist"/>
            </S.SidebarItem>
        </Link>

        </S.SidebarList>
    </S.SidebarBlock>
  )
}
