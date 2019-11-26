import React, { Component } from 'react'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'
import Title from '../Title/Title'

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: 'free cocktails',
                info: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, iure.'
            },
            {
                icon: <FaHiking />,
                title: 'Endless Hiking',
                info: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, iure.'
            },
            {
                icon: <FaShuttleVan />,
                title: 'Free shuttle',
                info: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, iure.'
            },
            {
                icon: <FaBeer />,
                title: 'Strongest beer',
                info: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, iure.'
            }
        ]
    }
    render() {
        const servisesList = this.state.services.map((item, id) => {
            return <article key = {id} className = "service">
        <span>{item.icon}</span>
        <h6>{item.title}</h6>
        <p>{item.info}</p>
            </article>
        })
        return (
            <section className = "services">
                 <Title title = "services" />
                 <div className="services-center">
                    {servisesList}
                 </div>
            </section>
               

        )
    }
}
