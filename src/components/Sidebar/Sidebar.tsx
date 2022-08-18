import { Link } from 'react-router-dom';
import * as S from './Sidebar.styles';


type Props = {
    title: string;
    description: string;
    icon: string;
    path: string;
    active: boolean;
}

export const SidebarItem = ({ title, description, icon, path, active }: Props) => {
    return (
        <S.Container>
            <Link to={path}>
                <S.Info>
                    <S.Title>{title}</S.Title>
                    <S.Description>{description}</S.Description>
                </S.Info>       
                
                <S.Point active={active}></S.Point>
            </Link>
        </S.Container>
    );
}