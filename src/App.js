import './App.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

import skullGif from './assets/CyberSKull.gif'


function App() {
    
    const ContenedorPrimario = styled.div`
        background: #242526;
        width: 100%;
        height: 100%;
    `
    const ContenedorSecundario = styled.div`
        width: 100%;
        height: 100%;
    `
    const BotonesLanding = styled.button`
        width: 49%;
        height: 100%;
        padding: 5px;
        margin-top: 50px;
        margin-left: 10px
        margin-right: 12px;  
    
    `

    return (
    
    <div className="App">
     <head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous"></link>
     </head>   
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
     <body>

        <Container fluid style= {{ backgroundColor: '#242526',
                                   height: '1000px',
                                   paddingTop: '0px',
                                   }}>

        <Row id='DisplayTop' style={{ height: '100px',
                                   paddingLeft: '0%',
                                   paddingRight: '5%',
                                   paddingTop: '3%',
                                   marginRight: '0px',
                                   backgroundColor: '#242526'}} >
           
           <Col xs={1}>
           </Col>
           <Col xs={5}>
            <ContenedorSecundario>
                <img id='landing-image' src={skullGif} alt="loading..."
                 />            
            </ContenedorSecundario>
           </Col>

           <Col xs={6}>
           <ContenedorPrimario id="Contenedor-texto-main">
               <div className='Landing-text'>
                <p style = {{ fontFamily:  "Courier",
                                 fontSize: '45px',
                                 textAlign: 'justify',
                                 padding: '3px',
                                 color: '#E4E6EB',
                                 backgroundColor: '#242526'

                   }}> PROXIMITY
                    </p>
                <p style = {{ fontFamily:  'Courier',
                                 fontSize: '21px',
                                 textAlign: 'justify',
                                 padding: '3px',
                                 color: '#E4E6EB',
                                 backgroundColor: '#242526',
                                 paddingRight: '5%'

                   }}>
                    
                        Este sera el texto descriptivo que acompañe al
                        nombre den gran de PROXIMITY la idea es que sea 
                        un rollo minimalis retro, en blanco y negro y con llineas muy rectas
                        con posiblidad de meterle neon, royo 80s con 8bit.
                    </p>  
               </div>
               <div id='Landing-buttons'>
                   <BotonesLanding className='boton-landing'>
                    MINT
                   </BotonesLanding>
                   <BotonesLanding className='boton-landing'>
                   STORE
                   </BotonesLanding>
               </div>       
            </ContenedorPrimario>
           </Col>
           <Col xs={1}>
           </Col>
        </Row>
                
        </Container>
      </body>
    </div>
  );
}

export default App;
