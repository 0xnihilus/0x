import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 930px;
  position: relative;
  z-index: 1;
  background: white;
  object-fit: cover;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

export const HeroBg = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #ffd30b;
`;
export const Space = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ImageBg = styled.img`
  max-width: 100%;
  max-height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #ffd30b;
  float: left;
`;

export const ImageBg2 = styled.img`
  max-width: 100%;
  max-height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #ffd30b;
  float: right;
`;

export const HeroDiv = styled.div`
  color: white;
  padding-top: 10px;
`;

export const HeroContent = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  background: #ffd30b;
  margin-bottom: 111px;
`;

export const HeroLogo = styled.img`
  display: flex;
  height: 75px;
  margin-left: auto;
  margin-right: auto;
  background: #de9e45;
`;

export const Grid = styled.img`
  height: 500px;
  position: relative;
  border-radius: 25px;
  margin-right: 25px;
  margin-top: auto;
  margin-bottom: auto;
`;

export const MintDiv = styled.div`
  height: 480px;
  width: 480px;
  position: relative;
  background: #282828;
  border-radius: 25px;
`;

export const MiniAbout = styled.p`
  color: white;
  background: #282828;
  position: relative;
  margin: 10px;
  padding-top: 15px;
`;

export const Plus = styled.button`
  width: 35px;
  height: 35px;
  background: #3b3b3b;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  color: black;
  position: relative;
  margin-left: 10px;
  color: #656565;
  font-size: 30px;
  vertical-align: middle;
  line-height: 30px;
  cursor: pointer;
`;

export const Minus = styled.button`
  width: 35px;
  height: 35px;
  background: #3b3b3b;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  color: black;
  position: relative;
  margin-right: 10px;
  color: #656565;
  font-size: 30px;
  vertical-align: middle;
  line-height: 30px;
  cursor: pointer;
`;

export const Input = styled.input`
  height: 34px;
  width: 310px;
  text-align: center;
  font-size: 26px;
  border: 1px solid #ddd;
  border-radius: 4px;
  display: inline-block;
  vertical-align: middle;
  background-color: black;
  color: white;
  text-align: center;
  position: relative;
  @media screen and (max-width: 767px) {
    width: 210px;
  }
`;

export const ConnectButton = styled.button`
  color: black;
  background: #282828;
  position: relative;
  margin: auto;
  height: 40px;
  width: 440px;
  background: #ffd30b;
  border-radius: 10px;
  border: none;
`;

export const MyNFT = styled.p`
  color: white;
  background: #282828;
  position: absolute;
  margin-top: 25px;
  margin-left: 18%;
`;

export const First = styled.p`
  color: white;
  background: #282828;
  position: relative;
  margin: 10px;
  padding-top: 30px;
`;

export const Then = styled.p`
  color: white;
  background: #282828;
  position: relative;
  margin: 10px;
`;

export const NewDiv = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
  padding-top: 20px;
`;

export const Spacer = styled.div`
  height: 10px;
`;

export const MintCText = styled.div`
  color: white;
  font-size: 24px;
  position: absolute;
  padding-left: 30px;
`;

export const PriceText2 = styled.div`
  color: white;
  font-size: 24px;
  position: absolute;
  padding-left: 360px;
`;

export const MintCText2 = styled.div`
  color: white;
  font-size: 24px;
  position: absolute;
  padding-left: 365px;
`;

export const PriceText = styled.div`
  color: white;
  font-size: 24px;
  position: absolute;
  padding-left: 30px;
`;

export const Price = styled.div`
  background: #3b3b3b;
  color: white;
  width: 95%;
  height: 10%;
  display: flex;
  margin: 10px;
  align-items: center;
  border-radius: 10px;
`;

export const Minted = styled.div`
  color: white;
  background: #3b3b3b;
  width: 95%;
  height: 10%;
  display: flex;
  margin-left: 10px;
  margin-top: 10px;
  border-radius: 10px;
  align-items: center;
  vertical-align: middle;
`;

export const MintInput = styled.div`
  color: white;
  background: #282828;
  margin: 0 auto;
  width: 100%;
  position: relative;
  padding-top: 10px;
  margin-top: 20px;
  align-items: center;
`;

export const Button = styled.button`
  color: black;
  background: #282828;
  position: relative;
  margin: auto;
  height: 40px;
  width: 440px;
  background: #de9e45;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    width: 310px;
  }
`;
