import React, {Component} from "react"

class Apis extends Component {

  constructor(props){
    super(props);
    this.state={
      api:[]
    }
  }

  apiCall(url, consecuencia){
    fetch(url)
      .then(response=> response.json())
      .then(data=>consecuencia(data))
      .catch(error=> console.log(error))
  }

  componentDidMount(){
    console.log("Me monte!")
    this.apiCall("api/products", this.mostrarApi)


  }

  mostrarApi= (data)=>{
    
    this.setState(
      {
        api:data.data.products
      })
      
  }
   componentDidUpdate(){ console.log("Me actualice!"); }

  
   render(){

    let prod;
    if (this.state.api.length== 0){
      prod="Cargando.."
    }else{
      prod="hola"
    }

    return (

        <body>
          <h1>

            {console.log(prod)}

          </h1>
        </body>
    );
  }
}
export default Apis ;