import React from 'react';
import $ from 'zepto';
import CommentList from './List.react';
import User from 'user';

let user = new User();

class Comment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            list: [],
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
                        let cache = result.data;

                        for (let i = 0; i < cache.curPageList.length; i++) {
                            let element = cache.curPageList[i];

                            if (cache.content[element].refID !== 0) {
                                cache.content[element].replyContent = cache.content[cache.content[element].refID].content;
                                cache.content[element].replyName = cache.content[cache.content[element].refID].uname;
                                cache.content[element].replyTime = cache.content[cache.content[element].refID].created_at;
                            } else {
                                cache.content[element].replyContent = '';
                                cache.content[element].replyName = '';
                                cache.content[element].replyTime = '';
                            }
                        }

                        this.setState({total: cache.total, list: cache.curPageList, comments: cache.content})
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
                <CommentList total={this.state.total} list={this.state.list} comments={this.state.comments}/>
            </div>
        );
    }
};

export default Comment;
