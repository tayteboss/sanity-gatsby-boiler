import styled from 'styled-components';

const H2 = styled.h2`
    color: ${props => props.theme.colours.lightGray};
    font-family: ${props => props.theme.fonts.studioPro};
    font-size: ${props => props.theme.size.h2};
    margin: 0 0 28px 0;
`;

export default H2;
