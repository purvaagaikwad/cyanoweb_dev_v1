import styled from "styled-components";
import px2vw from "../../utils/px2vw"

const BrandLogoContainer = styled.div`
    display: flex;
    align-items: center;


`;

const LogoTitle = styled.h2`
    margin:0;
    font-size: ${({ size }) => size ? size + "px" :"3rem" };
    color: #fff;
    font-weight:  normal; 




`;

export function BrandLogo(props) {
    const { size } = props;

    return <BrandLogoContainer>
             <LogoTitle size={size}> CyanoWEB</LogoTitle>
           </BrandLogoContainer>

}