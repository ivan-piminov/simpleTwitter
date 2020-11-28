import React from 'react'
import {AppHeader} from "./components/app-header/app-header";
import {SearchPanel} from "./components/search-panel/search-panel";
import {PostStatusFilter} from "./components/post-status-filter/post-status-filter";
import {PostList} from "./components/post-list/post-list";
import {PostAddForm} from "./components/post-add-form/post-add-form";
import styled from 'styled-components'

const AppBlock = styled.div`
 margin: 0 auto;
 max-width: 800px;
`

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: 'Музыка это здорово!', important: true, like: false, id: 'fdfd'},
                {label: 'Спать прекрасно.', important: false, like: false, id: '32ef'},
                {label: 'Книги развивают. ', important: false, like: false, id: 'ssdhn3'},
            ],
            term: '',
            filter: 'all'
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLike = this.onToggleLike.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);

    }


    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const newArray = [...data.slice(0, index), ...data.slice(index + 1)]
            return {
                data: newArray
            }
        })
    }

    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: Math.random()
        }
        this.setState(({data}) => {
            const newArray = [...data, newItem]
            return {
                data: newArray
            }

        })
    }


    onToggleImportant(id) {
        this.setState(({data}) => {
            const index = data.findIndex((elem) => elem.id === id);

            const old = data[index];
            const newItem = {...old, important: !old.important}
            const newArray = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
            return {
                data: newArray
            }
        })
    }

    onToggleLike(id) {
        this.setState(({data}) => {
            const index = data.findIndex((elem) => elem.id === id);

            const old = data[index];
            const newItem = {...old, like: !old.like}
            const newArray = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
            return {
                data: newArray
            }
        })
    }

    onUpdateSearch(term) {
        this.setState({term})
    }

    searchPost(items, term) {
        if (term.length === 0) {
            return items
        }
        return items.filter((item) => {
            return item.label.indexOf(term) > -1
        })
    }

    filterPost(items, filter) {
        if (filter === 'like') {
            return items.filter(item => item.like)
        } else {
            return items
        }
    }
    onFilterSelect(filter){
        this.setState({filter})
    }


    render() {
        const {data, term, filter} = this.state;
        const liked = data.filter(el => el.like).length;
        const allPosts = data.length;
        const visible = this.filterPost(this.searchPost(data, term), filter);

        return (
            <AppBlock>
                <AppHeader liked={liked} allPosts={allPosts}/>
                <div className='search-panel d-flex'>
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <PostStatusFilter filter = {filter} onFilterSelect = {this.onFilterSelect}/>
                </div>
                <PostList posts={visible} onDelete={this.deleteItem} onToggleImportant={this.onToggleImportant}
                          onToggleLike={this.onToggleLike}/>
                <PostAddForm onAdd={this.addItem}/>
            </AppBlock>

        );
    }
}

export default App;
