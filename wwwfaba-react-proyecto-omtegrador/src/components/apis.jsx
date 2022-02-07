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
    this.apiCall("api/products", this.mostrarApi)


  }

  mostrarApi= (data)=>{
    
    this.setState(
      {
        api:data.products
      })
      
  }
   componentDidUpdate(){ console.log("Me actualice!"); }

  
   render(){

    let prod;

    if (this.state.api.length === 0){
      prod=["Cargando.."]
    }else{

      prod=<p>{this.state.api[1].modelo}</p>
    }

    return (

        <body>
        
        </body>
    );
  }
}
export default Apis ;