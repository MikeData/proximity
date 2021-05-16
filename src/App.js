import './App.css';
import React, { useRef, useEffect, useState, useCallbac } from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// ASSETS
import skullGif from './assets/CyberSKull.gif';
// COMPONENTS
import { Modal } from './components/Modal';
// UI ELEMENTS
import * as uilib from './components/uilib';



function App() {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal( () => {
            const state = {showModal};
            this.setShowModal(state);
        });            
    }

    return (
    
    <div className="App">
     <head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous"></link>
     </head>   
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
     <body>
         
         <>
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
            <uilib.ContenedorSecundario>
                <img id='landing-image' src={skullGif} alt="loading..."
                 />            
            </uilib.ContenedorSecundario>
           </Col>

           <Col xs={6}>
           <uilib.ContenedorPrimario id="Contenedor-texto-main">
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
                   <uilib.button className='boton-landing' id='mint-button'
                        onSubmit={openModal} >
                    <strong>MINT</strong>                     
                   </uilib.button>
                   <uilib.button className='boton-landing' id='store-button'>
                   STORE
                   </uilib.button>
               </div>

                      
            </uilib.ContenedorPrimario>
           </Col>
           <Col xs={1}>
           </Col>
        </Row>
        
        <div style={{ marginTop: '1000px' }}>
               
        </div>
        <Modal 
            showModal={showModal} 
            setShowModal={setShowModal} 
        />

        </Container>
        </>
        
       
        
       
    
    </body>
    </div>
  );
};

export default App;
