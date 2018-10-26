import React, { Component } from 'react';
class App extends Component{
    state ={log:true,color:'blue',colorshow:'green'}
    
    
    
    changeState=() => {
        this.setState((state) =>({
            log:!state.log
        })
        )}
        changeState2=() => {
            if(this.state.color=='blue')
            {
                this.setState((state) => ({
                    color:state.color='green',
                    colorshow:state.colorshow='grey'
                }))
            }
            if(this.state.color=='green')
            {
                this.setState((state) => ({
                    color:state.color='grey',
                    colorshow:state.colorshow='blue'

                }))
            }
            if(this.state.color=='grey')
            {
                this.setState((state) => ({
                    color:state.color='blue',
                    colorshow:state.colorshow='green'

                }))
            }
            
        }

    render(){
        console.log(this.state.color)
        return <div>
            <button className='buttonContainer' onClick={this.changeState}>A</button>
            
            <p className='text'>{this.state.colorshow}</p>
            <button className='buttonContainer left' onClick={this.changeState2}>B</button>
            {this.state.log?<p className={'container'+" "+ this.state.color} >sajdkhaksjdhkjashdkjashkdjsahkdhkasjkdhkjashdkjsahdjhkasdkasdsad
        askdjkalsjdklasjdlkjaskldjklasjdlkasjkldjlsadjklasjkdklsad
        dkasjdklasjdlksajdlkajslkdjklsajdlkasjdklsadakdsjhsakjdhkjashdks
        asdkasdkjaskljdlkasjdklasjkldjklsajdklasjdklsad
        asdlkajslkdjaskldjklsajdklsajdlkasdj
    </p>:null}
            
        </div>
    }
        
} 

export default App;
