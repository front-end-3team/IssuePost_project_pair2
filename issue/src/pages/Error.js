import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { fontStyle, textAlignCenter } from 'styles/common';

const { default: Header } = require('components/Header/Header');

function Error() {
    const navigate = useNavigate();

    const goHome = () => {
        navigate('/');
    };

    return (
        <>
            <Header />
            <ErrorPage>
                <span>404</span>
                <p>Page Not Found</p>
            </ErrorPage>
            <GoBackHome>
                <button onClick={goHome}>Go Back Home</button>
            </GoBackHome>
        </>
    );
}

export default Error;

const ErrorPage = styled.div`
    margin: 0 auto;
    ${textAlignCenter}
    ${fontStyle}

    & span {
        font-size: 70px;
    }

    & p {
        margin: 0 auto;
        font-size: 40px;
    }

    @media (min-width: 768px) {
        margin: 0 auto;
        ${textAlignCenter}
        ${fontStyle}

        & span {
            font-size: 90px;
        }

        & p {
            margin: 0 auto;
            font-size: 3.5rem;
        }
    }
`;

const GoBackHome = styled.div`
    ${textAlignCenter}

    & button {
        ${fontStyle}
        border: none;
        background-color: transparent;
        font-size: 20px;
    }

    @media (min-width: 768px) {
        ${textAlignCenter}

        & button {
            ${fontStyle}
            border: none;
            background-color: transparent;
            font-size: 25px;
        }
    }
`;
