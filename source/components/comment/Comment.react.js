import React from 'react';
import $ from 'zepto';
import CommentList from './CommentList.react';
import User from 'user';

let user = new User();

class Comment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            comments: {}
        }
    }

    componentDidMount() {
        let data = {
            page: '1',
            pageNum: '5',
            uuid: this.props.uuid
        }

        if (user.id) {
            data.uid = user.id
        }

        this.getCommentsRequest = $.ajax({
            url: 'http://comment.diandong.com/comment/list',
            data: data,
            dataType: 'jsonp',
            type: 'GET',
            success: function(result) {
                if (!result.state.err) {
                    if (result.data.total > 0) {
                        this.setState({total: result.data.total, comments: result.data.content})
                    }
                }
            }.bind(this)
        });
    }

    componentWillUnmount() {
        this.getCommentsRequest.abort();
    }

    render() {
        return (
            <div className="comment-holder">
                <CommentList total={this.state.total} comments={this.state.comments}/>
            </div>
        );
    }
};

export default Comment;
