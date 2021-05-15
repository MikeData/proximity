

function stepsContainer (props) {
    return (
        <Container fluid style= {{ backgroundColor: '#242526',
                                   height: '1000px',
                                   paddingTop: '30px'}}>
        <Row>
            <nav style= {{ height: '100px', 
                        alignContent: 'center'}}>
            <h1 style={{ fontSize:'50px', color: '#E4E6EB'}}>PROXIMITY</h1> 
            </nav>
        </Row>
        <Row style={{  height: '100px',
                          paddingTop: '20px', paddingLeft: '25px'}}>
            
            <Col>
                <StepCard title={'UPLOAD'} number={1} ></StepCard>   
            </Col>
            <Col >
                <StepCard title={'NAME'} number={2} ></StepCard> 
            </Col>
            <Col >
                <StepCard title={'MINT'} number={3} ></StepCard>     
            </Col>
        </Row>
        </Container>
    );
}

export default stepsContainer;