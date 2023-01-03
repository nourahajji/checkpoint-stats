import React, { useState } from 'react'

function Me() {

  const [name, setname] = useState("Homme");
  const [counter, setcounter] = useState(0);
 

  return (
    <div className="vivi">
      <h3>{name}</h3>
      <button onClick={()=>setname("Femme")}>Click</button>
     { name=="Homme"?<div style={{width:"100%", display: "flex", justifyContent:"space-around"}}>
      <img   width="200"height="200"src="https://www.mencorner.com/media/produits/festina/img/montre-homme-festina-f20519-2-bracelet-cuir-noir_3217355_1140x1140.jpg"/>
      
      <img  width="200"height="200"src="https://guildedesorfevres.fr/4775-thumbnail_product/montre-hugo-boss-en-acier-argente.jpg"/>
     
      <img  width="200"height="200"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN8IrN9N5K3Yu_BDHGzLsj8uVcZ8Vf6AGUueCL0wRNe75j5aX9U281lO9JvIj9zb2xBpg&usqp=CAU"/>
      <img  width="200"height="200"src="https://guildedesorfevres.fr/4749-thumbnail_product/montre-hugo-boss-en-cuir-marron.jpg"/>
      </div>:<div style={{width:"100%", display: "flex", justifyContent:"space-around"}}>
      <img   width="200"height="200"src="https://selectshop.tn/16896-medium_default/montre-mini-focus-pour-femme-gold-tunisie.jpg"/>
      
      <img  width="200"height="200"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLReFZb4cpeQ_5vYnWGxnBEZMNjh72ankpJMq_Asoo0hTM7BVIVhelhlzkURuqIQVFnwU&usqp=CAU"/>
      <img  width="200"height="200"src="https://selectshop.tn/16916-home_default/montre-mini-focus-pour-femme-silver-tunisie.jpg"/>
      <img  width="200"height="200"src="http://photos.maty.com/7160569/V1/400/montre-calvin-klein-hoome-acier-bracelet-cuir.jpeg"/>
      </div>
      }
     <div style={{width:"100%", display: "flex", justifyContent:"space-around"}}>
      <h4>FESTINA WATCH</h4>
      <h4>BOSS WATCH</h4>
      <h4>BOSS WATCH</h4>
      <h4>BOSS WATCH</h4>
</div>
<div style={{width:"100%", display: "flex", justifyContent:"space-around",marginTop:"-9px", marginLeft:"10px"}}>
<p>Monter Festina en Cuir Noir</p>
<p>Monter Festina en acier argenté </p>
<p>Monter Festina en Cuir Noir</p>
<p>Monter Festina en Cuir Marron</p>

</div>
<div style={{width:"100%", display: "flex", justifyContent:"space-around",marginTop:"-10px", marginLeft:"10px"}}>
<p>250DT</p>
<p>150DT </p>
<p>200Dt</p>
<p>250Dt</p>
        
</div>
<div>
  <h5 id="bibo">{counter}</h5>
  <button id="cloun"onClick={()=>setcounter(counter+1)}>+</button>
  <button onClick={()=>setcounter(counter-1)}>-</button>
  <h5 id="green">{counter}</h5>
  <button id="dido"onClick={()=>setcounter(counter+1)}>+</button>
  <button onClick={()=>setcounter(counter-1)}>-</button>
  <h5 id="blo">{counter}</h5>
  <button id="vert"onClick={()=>setcounter(counter+1)}>+</button>
  <button onClick={()=>setcounter(counter-1)}>-</button>
  <h5 id="lili">{counter}</h5>
  <button id="noir"onClick={()=>setcounter(counter+1)}>+</button>
  <button onClick={()=>setcounter(counter-1)}>-</button>
  </div>
 

</div>

  )
}

export default Me
