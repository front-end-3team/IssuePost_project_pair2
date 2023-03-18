import styled from 'styled-components';
import { flexCenter, fontStyle } from 'styles/common';
import '../../styles/font.css';

function Header() {
    return (
        <>
            <HeaderTop>
                <HeaderTopBox>
                    <Img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
                    <LetterBox>
                        <GitLetter>
                            angular/angular-cli
                            <span> Issues</span>
                        </GitLetter>
                    </LetterBox>
                </HeaderTopBox>
            </HeaderTop>
        </>
    );
}

export default Header;

const HeaderTop = styled.div`
    @media (min-width: 768px) {
        align-items: center;
        height: 60%;
        width: 100%;
    }
`;

const HeaderTopBox = styled.div`
    display: flex;
    align-items: center;
`;

const Img = styled.img`
    height: 34px;
    width: 34px;
    margin: 10px;

    @media (min-width: 768px) {
        height: 54px;
        width: 54px;
        margin: 15px;
    }
`;

const LetterBox = styled.div`
    @media screen and (min-width: 768px) {
        ${flexCenter}
    }
`;

const GitLetter = styled.p`
    font-size: 15px;
    font-style: italic;
    ${fontStyle}

    @media screen and (min-width: 768px) {
        font-size: 25px;
        font-style: italic;
        ${fontStyle}
    }
`;
