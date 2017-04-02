import React from 'react';
import $ from 'zepto';

class Search extends React.Component {

    constructor(props) {
        super(props);

        this.handleKeywordChange = this.handleKeywordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);

        this.state = {
            searchPlaceholderValue: null,
            keywords: '',
            focus: false
        }
    }

    handleKeywordChange(event) {
        var currentInputValue = event.target.value;

        this.setState({keywords: currentInputValue});
    }

    handleSubmit() {
        var searchKeywords;

        searchKeywords = this.state.keywords
            ? this.state.keywords
            : this.state.searchPlaceholderValue;

        document.location.href = 'http://search.diandong.com/zonghe/?words=' + searchKeywords;
    }

    handleFocus() {
        this.setState({focus: true});
    }

    handleBlur() {
        this.setState({focus: false});
    }

    componentWillMount() {
        this.getSearchPlaceholderRequest = $.ajax({
            url: 'http://car.diandong.com/api/getSectionData?sectionid=296',
            data: {},
            dataType: 'jsonp',
            type: 'POST',
            success: function(result) {
                var searchPlaceholderValue = result.data[0].title || '';

                this.setState({searchPlaceholderValue: searchPlaceholderValue});
            }.bind(this)
        });
    }

    componentWillUnmount() {
        this.getSearchPlaceholderRequest.abort();
    }

    render() {
        return (
            <div className="search-wrapper" id="search-wrapper">
                <div className={this.state.focus
                    ? "search-bar focus"
                    : "search-bar"}>
                    <input className="search-input" type="text" value={this.state.keywords} onFocus={this.handleFocus} onBlur={this.handleBlur} onChange={this.handleKeywordChange} placeholder={this.state.searchPlaceholderValue}/>
                    <a className="search-submit-btn" href="javascript:;" onClick={this.handleSubmit}>
                        <i className="icon">&#xe60a;</i>
                    </a>
                </div>
            </div>
        );
    }
};

export default Search;
