import React, { Component } from 'react'
import Info_one from './Info_one'
import Info_two from './Info_two'
import Info_three from './Info_three'

export default class DropdownComp extends Component {
    constructor(props){
        super(props);
        this.state={
            info_a:true,
            info_b:false,
            info_c:false,
        }
    }
    changeinfo=()=>{
        var option_val = document.getElementById("sel").value
        console.log(option_val)
        if(option_val=="Mumbai"){
            this.setState({info_a:true})
            this.setState({info_b:false})
            this.setState({info_c:false})
        }
        if(option_val=="Bengaluru"){
            this.setState({info_a:false})
            this.setState({info_b:true})
            this.setState({info_c:false})
        }
        if(option_val=="Delhi"){
            this.setState({info_a:false})
            this.setState({info_b:false})
            this.setState({info_c:true})
        }
    }
    render() {
        const{info_a, info_b, info_c} = this.state;
        return (
            <div className="container mt-5">
                <div className="row mb-5">
                    <div className="col text-left">
                        <select id="sel" onChange={this.changeinfo} class="form-control-lg">
                            <option>Mumbai</option>
                            <option>Bengaluru</option>
                            <option>Delhi</option>
                        </select>
                    </div>
                </div>
                {info_a==1?<Info_one></Info_one>:null}
                {info_b==1?<Info_two></Info_two>:null}
                {info_c==1?<Info_three></Info_three>:null}
                
            </div>
        )
    }
}
