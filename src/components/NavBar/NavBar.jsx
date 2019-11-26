import React, {Component} from 'react'
import {FaAlignRight} from 'react-icons/fa'
import Logo from '../../images/logo.svg'
import {Link} from 'react-router-dom'

export default class NavBar extends Component {
    state = {
        isOpen: false
    }

    handleToggle = () =>{
        const prevState = this.state.isOpen;
        this.setState({isOpen: !prevState})           
    }
    render() {
        return (
            <div className = "navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to ="/" ><img src={Logo} alt="Beach resort"/></Link>
                        <button type = "button" className = "nav-btn" onClick = {this.handleToggle}>
                            <FaAlignRight className = 'nav-icon' />
                        </button>
                    </div>
                    <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                        <li>
                            <Link to ="/" >Home</Link>
                            <Link to ="/rooms" >Rooms</Link>
                        </li>
                    </ul>
                </div>
                
            </div>
        )
    }
}

