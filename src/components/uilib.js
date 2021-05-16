import styled from 'styled-components';

export const canvas = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #141414;
    width: 100%;
    height: 100vh;
`
export const button = styled.button`
    width: 49%;
    height: 100%;
    padding: 5px;
    margin-top: 50px;
    margin-left: 10px
    margin-right: 12px;
 
    border: 2px solid;
    box-shadow: 5px 7px;  
    font-size: 21px;
`
export const modalbackground = styled.div`
    width: 100%;
    height: 100%;
    background: #141414;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const modalwrapper = styled.div`
    width: 800px;
    height: 500px;
    box-shadow: 0 5px 15px #fff;
    background: #242526;;
    color: #000;
    position: fixed;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    z-index: 10;
`
export const modalcontent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #B0B3B8;
`

export const ContenedorPrimario = styled.div`
    background: #242526;
    width: 100%;
    height: 100%;
`
export const ContenedorSecundario = styled.div`
    width: 100%;
    height: 100%;
`

