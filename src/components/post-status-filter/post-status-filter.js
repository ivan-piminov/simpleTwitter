import React from 'react'


export class PostStatusFilter extends React.Component {
    constructor(props) {
        super(props);
        this.buttons =[
            {name:'all', label:'Все'},
            {name:'like', label:'Понравилось'}
        ]
    }
    render() {
        const buttons = this.buttons.map(({name,label}) =>{
            const {filter,onFilterSelect } = this.props
            const active = filter === name;
            const newClass = active ? 'btn-info' : 'btn-outline-secondary'
            return <button key={name} className={`btn ${newClass}`} onClick={()=>onFilterSelect(name)}>{label}</button>
        })
        return (
            <div className='btn-group'>
                {buttons}
            </div>
        )
    }
}