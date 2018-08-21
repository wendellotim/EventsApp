import {createElement, Component} from 'react'
 
export class Hike extends Component { 
     render() {
     return  createElement('div', {},
                createElement('div', {className: 'backcountry-days'},
                    createElement('span', {}, '20 hiking day')));
                 }
                }