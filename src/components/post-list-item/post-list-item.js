import React from 'react'
import './post-list-item.css'

export class PostListItem extends React.Component {
    render() {
        let {label, onDelete, onToggleImportant, onToggleLike, important, like} = this.props;

        let classnames = 'app-list-item d-flex justify-content-between';
        if (important) {
            classnames += ' important';
        }
        if (like) {
            classnames += ' like';
        }

        return (
            <li className={classnames}>
                <span className="app-list-item-label" onClick={onToggleLike}> {label}</span>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type='button' className='btn-star btn-sm' onClick={onToggleImportant}>
                        <i className='fa fa-star'></i>
                    </button>
                    <button type='button' className='btn-trash btn-sm' onClick={onDelete}>
                        <i className='fa fa-trash-o'></i>
                    </button>
                    <i className='fa fa-heart'>
                    </i>
                </div>
            </li>
        )
    }}
