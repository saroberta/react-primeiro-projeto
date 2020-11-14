import chocolates from '../Services/dados'

const Lista = () =>{
 return(
     <div>
     {chocolates.map(chocolate => 
     <div key={chocolate.id}>
             <h1>{chocolate.nome}</h1>
             <img width={120} src={chocolate.imagem} alt= "imagem do chocolate"/>
             <p>{chocolate.formato}</p>
       </div>      
    )}
     </div>
) 
}


export default Lista

