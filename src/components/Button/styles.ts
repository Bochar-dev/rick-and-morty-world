import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ButtonElement = styled(Link)`
    display: block;
    margin: 40px auto 0 auto;
    padding: 15px 30px;
    border: 2px solid var(--color-link);
    border-radius: 8px;
    width: fit-content;
    font-weight: 700;
    font-size: 40px;
    line-height: 1em;
    color: var(--color-link);
`;
