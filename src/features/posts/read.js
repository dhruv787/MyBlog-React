import React from 'react';
import ReadComment from '../comments/read';

export default function Read(props) {
    const { post, comments } = props;
    return (
        <div className="row">
            <div className="col-md-12">
                <h2> {post.title}</h2>
                <div>
                    {post.body}
                </div>
                <div>
                    {comments.map((c) => {
                        return (
                            <ReadComment comment={c} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}