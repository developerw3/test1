import React from 'react';
import { connect } from 'react-redux';
import { IRootState } from '../reducers/RootReducer';
import runSaga from '../store/saga/injectSaga';
import { fetchTopTwentyComments, deleteComments } from '../sagas/StoriesSaga';
import IComments, { IComment } from '../models/Comments';
import { Markup } from 'interweave';

interface IProps {
    comments: IComments;
    match: { 
        params: {
            id: number,
        }
    }
}

interface IState{}

class Comments extends React.Component<IProps, IState> {

    public componentDidMount() {
    
        runSaga(fetchTopTwentyComments, this.props.match.params.id);
    }
    
    public componentWillUnmount() {

        runSaga(deleteComments);
    }

    public spinner() {
        return (
            <div className='d-flex justify-content-center'>
                <div className='spinner-border' role='status'>
                <span className='sr-only'>Loading...</span>
                </div>
            </div>
        );
    }

    public noComments() {
        return (
            <ul key={0} className='list-group'>
                <li className='list-group-item text-left'>
                    <h3 className='mr-4' >
                        There is no comments for this story
                    </h3>
                </li>
            </ul>
        );
    }

    public render() {

        const { comments } = this.props;

        return ( 
            !comments ? this.spinner() : (comments.length === 0) ? this.noComments() :
            comments.map((comment: IComment, index: number) => {
                return(
                    <div key={index} className='mt-3 text-left'>
                        <ul className='list-group'>
                            <li className='list-group-item'>
                                <div className='mr-4 mb-2' >
                                    <svg id="i-msg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor">
                                        <path d="M2 4 L30 4 30 22 16 22 8 29 8 22 2 22 Z" />
                                    </svg>
                                    <span className='ml-3'>Comment #{index + 1} (id: {comment.id})</span>
                                </div>
                                
                                <div className='mr-4 mb-2' >
                                    <svg id="i-user" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor">
                                        <path d="M22 11 C22 16 19 20 16 20 13 20 10 16 10 11 10 6 12 3 16 3 20 3 22 6 22 11 Z M4 30 L28 30 C28 21 22 20 16 20 10 20 4 21 4 30 Z" />
                                    </svg>
                                    <span className='ml-3'>Author: {comment.by}</span>
                                </div>

                                <div className='mr-4 mb-2' >
                                    <svg id="i-compose" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor">
                                        <path d="M27 15 L27 30 2 30 2 5 17 5 M30 6 L26 2 9 19 7 25 13 23 Z M22 6 L26 10 Z M9 19 L13 23 Z" />
                                    </svg>
                                    <span className='ml-3'>Comment: <div className='ml-5 overflow-auto'><Markup content={comment.text} /></div></span>
                                </div>
                                
                            </li>
                        </ul>
                    </div>
                );
            })
        );
    }
}

const mapStateToProps = (state: IRootState) => {
    return {
        comments: state.comments,
    };
};

export default connect(
    mapStateToProps,
    null,
)(Comments);
