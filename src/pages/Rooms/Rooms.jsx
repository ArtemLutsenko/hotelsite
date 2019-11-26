import React from 'react'
import Hero from '../../components/Hero/Hero'
import {Link} from 'react-router-dom'
import Banner from '../../components/Banner/Banner'


const Rooms = () => {
    return (
        <div>
            <Hero hero = "roomsHero" >
                <Banner title = "our rooms">
                    <Link to = "/" className = "btn-primary"> return home</Link>
                </Banner>
            </Hero>
        </div>
    )
}

export default Rooms