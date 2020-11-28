import React from 'react'
import './post-add-form.css'

export class PostAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.onValueChange = this.onValueChange.bind(this);
        this.state = {
            text: ''
        };
        this.onSubmit = this.onSubmit.bind(this);
    };

    onValueChange(e) {
        this.setState({
            text: e.target.value
        })
    };

    onSubmit(e) {
        if (this.state.text === '') {
            e.preventDefault();
            return null
        }
        e.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState({text: ''})
    };

    render() {
        return (
            <form className='bottom-panel d-flex' onSubmit={this.onSubmit}>
                <input
                    value={this.state.text}
                    onChange={this.onValueChange}
                    className='form-control new-post-label'
                    placeholder='О чем вы думаете сейчас?'
                    type='text'/>
                <button
                    type='submit'
                    className='btn btn-outline-secondary'>Добавить
                </button>
            </form>
        )
    }
}