import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function StepCard(props) {
    return (
        <Card style={{ width: '30rem', height: '500px',
                       paddingTop: '20px', paddingBottom: '20px'
                    }}>
        <Card.Body>
            <Card.Title>
                <h1>STEP  {props.number} : {props.title}
                </h1>
            </Card.Title>
            <Card.Text>
                {props.text}
            </Card.Text>
            <Button variant="primary" 
                    style = {{ minHeight: '40px',
                               minWidth: '100px'

                    }
            } >{props.title}</Button>
        </Card.Body>
        </Card>  
    )
}

export default StepCard;
