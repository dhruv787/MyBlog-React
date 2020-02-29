import React from 'react';

export default function Read(props) {
    const { comment } = props;
    return (
        <div className="row">
            <div className="col-md-12">
                <h2> {comment.title}</h2>
                <div>
                    {comment.body}
                </div>
            </div>
        </div>
    )
}