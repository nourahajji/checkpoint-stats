import React, { useState } from 'react'

function Nou() {
    const [person, setperson] = useState({
        name:"Email"
    })
  return (
    <div className='gry' id="mali">
        <h3>
Identifiez-vous ou créez votre compte
</h3>
      <h5 id="fa">{person.name}</h5>
      <input id="hello" type="text"onchange={(e)=>setperson ({...person, name:e.target.value})} />
      <button id="submit" data-link-action="sign-in" data-url="https://www.montresandco.com/module/sy_authentication/verifyemail?token=03a78239db&amp;id_shop=5" data-create-account="https://www.montresandco.com/connexion?create_account=1" type="submit">
Connexion / Inscription
</button>
    </div>
  )
}

export default Nou
