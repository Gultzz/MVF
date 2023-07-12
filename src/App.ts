import styled, {css} from "styled-components"
import {colors} from "./utils/colors";

export const Center = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BackgroundContainer = styled.div`
  position: absolute;
  width: 100%;
  max-width: 100%;
  overflow:hidden ;
  top: 0;
  left: 0;
  filter: blur(40px);
  z-index: -1;
  height: 100vh;
  max-height: 900px;
  min-height: 700px;
  
`;

export const Limit = styled.main`
  padding: 2% 16px;
  width: 100%;
  min-height: 100%;
  max-width: 615px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.gray};
`;

export const SectionWillBe = styled.section`
  display: grid;
  margin-top: 46px;
  align-self: center;
  gap: 16px;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr ;
  width: 100%;
  max-width: 600px;
  @media screen and (max-width: 650px){
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr ;
    
  }
`;

export const SectionMainAsks = styled.section`
  border-radius: 8px;
  overflow-y: hidden;
  display: grid;
  margin-top: 46px;
  align-self: center;
  width: 100%;
  max-width: 600px;
`;

export const SectionDiscount = styled.section`
  position: relative;
  overflow-y: hidden;
  margin-top: 26px;
  align-self: center;
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const DiscoutTextStart = styled.p`
  font-weight: 700;
  color: #fff;
  font-size: 24px;
  text-align: right;
  font-family: 'Noto Sans', sans-serif;
  @media screen and (max-width: 550px) {
    font-size: calc(24px * 0.8);
  }
  @media screen and (max-width: 430px) {
    font-size: calc(24px * 0.6);
  }
`;

export const DiscoutUser = styled.p`
  color: #fff;
  font-size: 32px;
  text-align: left;
  font-family: 'Bebas Neue', sans-serif;
  line-height: 32px;
  margin-left: 16px;
  margin-top: 6px;
  @media screen and (max-width: 550px) {
    font-size: calc(32px * 0.8);
    line-height: calc(32px * 0.8);
    margin-left: calc(16px * 0.8);
    margin-top: calc(6px * 0.8);
  }
  @media screen and (max-width: 430px) {
    font-size: calc(32px * 0.6);
    line-height: calc(32px * 0.6);
    margin-left: calc(16px * 0.6);
    margin-top: calc(6px * 0.6);
  }
`;

export const DiscountName = styled.p`
  color: ${colors.yellow};
  font-family: 'Bebas Neue', sans-serif;
  margin-top: 20px;
  font-size: 62px;
margin-left: 8px;
  @media screen and (max-width: 550px) {
    font-size: calc(62px * 0.8);
    margin-left: calc(8px * 0.8);
    margin-top: calc(20px * 0.8);
  }
  @media screen and (max-width: 430px) {
    font-size: calc(62px * 0.6);
    margin-left: calc(8px * 0.6);
    margin-top: calc(20px * 0.6);
  }
`;


export const ContainerColumn = styled.div`
  margin-left: 8px;
  display: flex;
  flex-direction: column;
  border-right: 2px solid #fff;
  padding-right: 16px;
  @media screen and (max-width: 550px) {
    padding-right: calc(16px * 0.8);
  }
  @media screen and (max-width: 430px) {
    padding-right: calc(16px * 0.6);
  }
`;

export const DiscoutPercentage = styled.p`
  color: ${colors.yellow};
  font-size: 52px;
  line-height: 52px;
  @media screen and (max-width: 550px) {
    font-size: calc(52px * 0.8);
    line-height: calc(52px * 0.8);
  }
  @media screen and (max-width: 430px) {
    font-size: calc(52px * 0.6);
    line-height: calc(52px * 0.6);
  }
  font-family: 'Bebas Neue', sans-serif;
`;

export const DiscountDownPercentage = styled.p`
  color: #fff;
  font-family: 'Bebas Neue', sans-serif;
    font-size: 18px;
  line-height: 10px;
  @media screen and (max-width: 550px) {
    font-size: calc(18px * 0.8);
    line-height: calc(10px * 0.8);
  }
`

export const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const AccordionHeader = styled.div`
  cursor: pointer;
  padding: 8px 16px ;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  background-color: ${colors.gray};
`;

export const AccordionTitle = styled.p`
  line-height: 150%;
  width: 100%;
  align-self: center;
  text-align: left;
  font-weight: 600;
  color: #fff;
  font-family: 'Noto Sans', sans-serif;
  font-size: 15px;
`;

export const Arrow = styled.img<any>`
  width: 18px;
  transform: rotate(${({top}) => top ? '180deg' : '0'});
  transition: 0.4s;
  align-self: center;
  justify-self: center;
`;

export const AccordionDescription = styled.p`
  line-height: 150%;
  width: 120%;
  height: 100%;
  padding: 8px 0;
  align-self: center;
  text-align: left;
  font-weight: 400;
  color: #fff;
  font-family: 'Noto Sans', sans-serif;
  font-size: 14px;
`;

export const AccordionBody = styled.div<any>`
  padding: 0 16px;
  max-height: ${({open}: {open: boolean}) => !open ? "0px" : '800px'};
  transition: ease-in-out 0.6s;
  overflow: hidden;
  display: flex;
  width: 100%;
  background-color: ${colors.mediumGray};
  border-bottom: ${({open}: {open: boolean}) => open ? `1px solid ${colors.black}` : 'none'};
  border-top: 1px solid ${colors.black};
`;

export const Topic = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
  border-radius: 8px;
  background-color: #fff;
  position: relative;
`;

export const BigNumber = styled.p`
  position: absolute;
  top: -10px;
  left: -15px;
  color: ${colors.yellow};
  text-shadow: 1px 1px 4px #0008;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 70px;
`;


export const Circles = styled.div<{ size: number; color: string; top?: number; left?: number; right?: number; bottom?: number; }>`
  width: ${({size}: {size: number}) => size}px;
  height: ${({size} : {size: number}) => size}px;
  background-color: ${({color} : {color: string}) => color};
  border-radius: 999999px;
  position: absolute;
  ${({top}: {top?: number}) => (top && top > 0) &&
  css`
    top: ${top}px;
  `};
  ${({bottom} : {bottom?: number}) => bottom && bottom > 0 &&
  css`
    bottom: ${bottom}px;
  `};
  
  ${({left} : {left?: number}) => left && left > 0 &&
  css`
    left: ${left}px;
  `};
  ${({right} : {right?: number}) => right && right > 0 &&
  css`
    right: ${right}px;
  `};
  @media screen and (max-width: 800px) {
    width: ${({size}: {size: number}) => size * 0.7}px;
    height: ${({size} : {size: number}) => size * 0.7}px;
  }
`;

export const Icon = styled.img`
  width: 70px;
  align-self: center;
`;


export const Yellow = styled.span`
  color: ${colors.yellow} ;
  text-decoration: underline;
`;

export const Underline = styled.span`
  text-decoration: underline;
`;

export const Title = styled.h1`
  text-align: center;
  line-height: 140%;
  align-self: center;
  margin-top: 64px;
  color: #fff;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 36px;
  max-width: 620px;
  @media screen and (max-width: 650px) {
    font-size: 26px;
  }
`;
export const TopicTitle = styled.p`
  line-height: 120%;
  width: 100%;
  align-self: center;
  text-align: left;
  margin-left: 8px;
  color: ${colors.black};
  font-family: 'Bebas Neue', sans-serif;
  font-size: 20px;
`;

export const TopicDescription = styled.p`
  line-height: 130%;
  width: 100%;
  align-self: center;
  color: ${colors.black};
  margin-left: 8px;
  font-family: 'Noto Sans', sans-serif;
  font-size: 15px;
`;

export const Subtitle = styled.h2`
  text-align: justify;
  line-height: 120%;
  align-self: center;
  margin-top: 32px;
  color: #fff;
  font-family: 'Noto Sans', sans-serif;
  font-weight: 400;
  font-size: 20px;
  max-width: 615px;
  @media screen and (max-width: 650px) {
    font-size: 16px;
  }
`;

export const ButtonContainer = styled.button`
  width: 100%;
  height: 58px;
  background: ${colors.green}aa;
  border: none;
  border-radius: 999px;
`;

export const Button = styled.button`
  width: calc(100% - 10px);
  height: 48px;
  background-color: ${colors.green};
  border: none;
  border-radius: 999px;
  position: relative;
`;

export const ButtonText = styled.p`
  position: absolute;
  white-space: nowrap;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 24px;
`;

export const SectionTitle = styled.h2`
  color: #fff;
  font-family: 'Noto Sans', sans-serif;
  font-size: 18px;
  margin-top: 64px;
`;

export const SectionSubtitle = styled.h2`
  margin-top: 20px;
  text-align: center;
  font-family: 'Noto Sans', sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: ${colors.lightGray};
`;

export const ButtonHotmart = styled.a`
  margin-top: 64px;
  background: #00000000;
  border: none;
  padding: 0;
  box-shadow: none;
  align-self: center;
  width: 100%;
  border-radius: 999px;
`

export const ExternalUrl = styled.a`
  color: ${colors.mediumGray};
  font-family: 'Noto Sans', sans-serif;
  font-weight: 500;
  font-size: 13px;
  margin-top: 6px;
  cursor: pointer;
  text-decoration: underline;
  text-align: center;
`;

export const SafeBuy = styled.img`
  width: 400px;
  margin-top: 22px;
  max-width: 100%;
  align-self: center;
`;


export const FooterTitle = styled.div`
  color: #fff;
  text-align: center;
  align-items: center;
  font-weight: 600;
  font-size: 15px;
  font-family: 'Noto Sans', sans-serif;
`;

export const FooterLimit = styled.main`
  max-width: 615px;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0 24px;
  padding: 32px 0;
  gap: 32px;
`;

export const FooterText = styled.div`
  color: #fff;
  text-align: center;
  align-items: center;
  max-width: 600px;
  font-size: 15px;
  font-weight: 400;
  font-family: 'Noto Sans', sans-serif;
`;
