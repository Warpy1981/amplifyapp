import React from 'react';



class SearchBar extends React.Component {
    state = {locationTerm: ''};

    onTextChange = event => {
        this.setState({locationTerm: event.target.value});
    }

    onFormSub = event => {
        //do not want to automatically rerender the page
        event.preventDefault();
        this.props.onSearchSubmit(this.state.locationTerm);
    }

    render() {
        return (
            <div className={'ui segment search-bar'}>
                <form onSubmit={this.onFormSub} className={'ui form'}>
                    <div className={'field'}>
                        <label>Search For a Realtor in:</label>
                        <input type="text" value={this.state.locationTerm} onChange={this.onTextChange}/>
                    </div>
                </form>

            </div>
        );
    }
}

export default SearchBar;