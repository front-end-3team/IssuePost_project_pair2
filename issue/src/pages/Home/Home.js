import { useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { flexCenter, fontStyle, textAlignCenter } from 'styles/common';
import '../../styles/font.css';

function Home() {
    const [loading, setLoading] = useState(false);

    const onClickList = () => {
        setLoading((prev) => !prev);
    };

    const navigate = useNavigate();

    const onClickLists = () => {
        navigate('/list');
    };

    return (
        <>
            <H.Main>
                <H.Git>
                    <H.Img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
                    <H.Word>
                        <p>
                            Git respository
                            <br />
                            <span>angular/angular-cli Issues</span>
                        </p>
                    </H.Word>
                </H.Git>
                <H.Loading>
                    <p>{loading ? 'Loading···' : ''}</p>
                </H.Loading>
            </H.Main>

            <H.ListBtn onClick={onClickList}>Open Issue List</H.ListBtn>
        </>
    );
}

export default Home;

const Main = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 300px;

    @media (min-width: 768px) {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 300px;
    }
`;

const Git = styled.div`
    ${flexCenter}
    width: 400px;
    height: auto;

    @media (min-width: 768px) {
        ${flexCenter}
        width: 600px;
        height: auto;
    }
`;

const Loading = styled.div`
    ${textAlignCenter}
    ${fontStyle}
    font-size: 25px;

    @media (min-width: 768px) {
        ${textAlignCenter}
        ${fontStyle}
        font-size: 30px;
    }
`;

const Img = styled.img`
    width: 100px;
    height: 100px;
    margin-right: 25px;

    @media (min-width: 768px) {
        width: 140px;
        height: 140px;
        margin-right: 25px;
    }
`;

const Word = styled.div`
    font-size: 25px;
    ${fontStyle}

    & span {
        font-style: italic;
    }

    @media (min-width: 768px) {
        font-size: 35px;
        ${fontStyle}

        & span {
            font-style: italic;
        }
    }
`;

const ListBtn = styled.button`
    transform: translate(168%, 1200%);
    width: 160px;
    height: 50px;
    ${fontStyle}
    width: 170px;
    height: 45px;
    font-size: 20px;
    border-radius: 8px;
    background-color: white;

    @media (min-width: 768px) {
        transform: translate(370%, 1200%);
        width: 160px;
        height: 50px;
        ${fontStyle}
        width: 180px;
        height: 50px;
        font-size: 25px;
        border-radius: 8px;
        background-color: white;
    }
`;

const H = {
    Main,
    Git,
    Img,
    Word,
    Loading,
    ListBtn,
};
