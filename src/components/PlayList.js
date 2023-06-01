import * as S from '../style';

export default function PlayList() {
  return (
    <S.SidebarBlock>
        <S.SidebarList>
            <S.SidebarItem>
                <S.SidebarLink href="https://">
                    <S.SidebarImage src="img/playlist01.png" alt="day's playlist"/>
                </S.SidebarLink>
            </S.SidebarItem>
            <S.SidebarItem>
                <S.SidebarLink href="https://">
                    <S.SidebarImage src="img/playlist02.png" alt="day's playlist"/>
                </S.SidebarLink>
            </S.SidebarItem>
            <S.SidebarItem>
                <S.SidebarLink href="https://">
                    <S.SidebarImage src="img/playlist03.png" alt="day's playlist"/>
                </S.SidebarLink>
            </S.SidebarItem>
        </S.SidebarList>
    </S.SidebarBlock>
  )
}
