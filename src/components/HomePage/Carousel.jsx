import styled from "styled-components";
import React, { useEffect } from "react";
import { useState } from "react";

const Carousel = () => {
    const [current, setCurrent] = useState(0);
    const picData = ["carousel-pic1", "carousel-pic2", "carousel-pic3", "carousel-pic4", "carousel-pic5", "carousel-pic6"];

    const handleLeftBtn = () => {
        if (current === 0) {
            setCurrent((prev) => prev + picData.length - 1);
        } else {
            setCurrent((prev) => prev -1);
        }
    };

    const handleRightBtn = () => {
        if (current === picData.length -1) {
            setCurrent(() => 0);
        } else {
            setCurrent((prev) => prev + 1);
        }
    };

    useEffect(() => {
        const interval = setTimeout(() => {
            handleRightBtn();
        }, 5000);
        return () => clearTimeout(interval);
    });

    return (
        <CarouselContainer>
            <SideBtn loc="left" onClick={handleLeftBtn}><BtnImg src={require("../../assets/images/HomePage/carousel-btn.png")} alt="btn" /></SideBtn>
            <ImgBox>
                <img src={require(`../../assets/images/HomePage/${picData[current]}.png`)} alt="carousel-pic"/>
            </ImgBox>
            <SideBtn loc="right" onClick={handleRightBtn}><BtnImg src={require("../../assets/images/HomePage/carousel-btn.png")} alt="btn" /></SideBtn>
        </CarouselContainer>
    );
};

export default Carousel;

const CarouselContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 52px;
`

const SideBtn = styled.div`
    display: inline-flex;
    padding: 8px;
    align-items: flex-start;
    gap: 8px;
    border-radius: 40px;
    opacity: 0.8;
    background: #E9E9E9;
    cursor: pointer;
    transform: ${props=>props.loc === "right" ? 'rotate(180deg)' : 'rotate(0)'}
`

const BtnImg = styled.img`
    width: 24px;
    height: 24px;
`

const ImgBox = styled.div`
    display: flex;
    width: 588px;
    margin: 0 11px;
    overflow: hidden;
`