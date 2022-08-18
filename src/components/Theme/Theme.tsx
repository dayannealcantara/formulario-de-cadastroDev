import { ReactNode } from 'react';
import * as S from './Theme.styles';
import {Header}  from '../Header/Header';
import { SidebarItem } from '../Sidebar/Sidebar';
import { useForm } from '../../context/FormContext';

type Props = {
    children: ReactNode;  
}

export const Theme = ({ children }: Props) => {
    const { state } = useForm();

    return (
        <S.Container>
            < S.Area>
                <Header />
                <S.Steps>
                    <S.Sidebar>                        
                        <SidebarItem
                            title="Pessoal"
                            description="Se identifique"
                            icon="profile"
                            path="/"
                            active={state.currentStep === 1}
                        />

                        <SidebarItem
                            title="Profissional"
                            description="Seu nível"
                            icon="book"
                            path="/step2"
                            active={state.currentStep === 2}
                        />

                        <SidebarItem
                            title="Contatos"
                            description="Como te achar"
                            icon="mail"
                            path="/step3"
                            active={state.currentStep === 3}
                        />
                        
                    </S.Sidebar>
                    <S.Page>
                        {children}
                    </S.Page>
                </S.Steps>
            </S.Area>
        </S.Container>
    );
}