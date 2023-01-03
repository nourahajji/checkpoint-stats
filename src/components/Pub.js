import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

function Pub() {
    const [students, setstudents] = useState([
        {
            name:"ICE WATCH", age:"100DT",img:"https://www.montresandco.com/2801-home_default/montre-ice-watch-en-silicone-bleu.jpg"
        },
        {
            name:"ICE WATCH", age:"100DT",img:"	https://www.montresandco.com/4142-home_default/montre-ice-watch-en-silicone-bleu.jpg"},
                {name:"ICE WATCH", age:"100DT",img:"	https://www.montresandco.com/4144-home_default/montre-ice-watch-en-silicone-rouge.jpg"
            },
            {
                name:"ICE WATCH", age:"100DT",img:"	https://www.montresandco.com/4145-home_default/montre-ice-watch-en-silicone-rose.jpg"
            }
        ])
        const [show, setshow] = useState(false)

  return (
    <div className='popos'>
      <h3>Enfant</h3>
      <button className='btn' onClick={()=>setshow(!show)}>Click</button>
    { show? (<div className='loulou' > 
   {students.map((el)=> (<Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={el.img} />
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>
        {el.age}
        </Card.Text>
      </Card.Body>
    </Card>
    ))}
        </div>)
        : null }
    </div>
  )
}

export default Pub
