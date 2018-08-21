import { Component, createElement } from 'react'

export default class Events extends Component {
    render() {
        return createElement('div', { className: 'sky-day-count' },
            createElement('div', { className: 'total-days' },
                createElement('span', {}, '5 days')
            ),
            createElement('div', {},
                createElement('div', { className: 'powder-days' },
                    createElement('span', {}, '2 days')
                )
            )
        );
    }
}