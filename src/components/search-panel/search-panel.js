import React from 'react'
import './search-panel.css'

export class SearchPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
        this.onUpdateSearch = this.onUpdateSearch.bind(this)
    }

    onUpdateSearch(e) {
        const term = e.target.value
        this.setState({term})
        this.props.onUpdateSearch(term)
    }

    render() {
        return (
            <input
                onChange={this.onUpdateSearch}
                className='form-control search-input'
                placeholder='поиск по записям'
                type='text'
            />
        )
    }
}