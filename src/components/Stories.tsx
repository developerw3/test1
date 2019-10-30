import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { IStoryDetail } from '../models/StoriesDetails';
import IStories from '../models/Stories';
import runSaga from '../store/saga/injectSaga';
import { IRootState } from '../reducers/RootReducer';
import { getStoriesIds, deleteStoriesIds, deleteStoriesDetails } from '../sagas/StoriesSaga';

export interface IProps {
    stories: IStories;
}

export interface IState {}

class Stories extends React.Component<IProps, IState> {

    public componentDidMount() {

        /**
         * 1) For the performance we can call the API once to keep 
         * StoriesIds and Top 10 StoriesDetails inside Redux Store,
         * the StoriesIds and Top 10 StoriesDetails will be updated if we reload the page.
         * 2) We can also call the API whenever we come back to the Stories Route 
         * if the data is frequently updated on the server-side.
         * It depends of the frequency to update the data on the server-side (database).
         * So, we have two choices.
         */
        if (!this.props.stories.storiesIds) {
            runSaga(getStoriesIds);
        }
    }

    public componentWillUnmount() {

        runSaga(deleteStoriesIds);

        runSaga(deleteStoriesDetails);
    }

    public spinner(): JSX.Element {
        return (
            <div className='d-flex justify-content-center'>
                <div className='spinner-border' role='status'>
                <span className='sr-only'>Loading...</span>
                </div>
            </div>
        );
    }

    public getStoryDetail(story: IStoryDetail, index: number): JSX.Element {
        return (
            <li key={index} className='list-group-item text-left mb-0'>
                <Link to={{ pathname: `/story/${story.id}/comments` }}>
                    <div>Story #{index + 1}</div>
                    <div>ID: {story.id}</div>
                    <div>Author : {story.by}</div>
                    <div>Title : {story.title}</div>
                    <div>Comments : {story.kids ? story.kids.length : 0}</div>
                    <div>Date : {this.convertDate(story.time)}</div>
                </Link>
                <div>Link : <a href={story.url} target='_blank' rel='noopener noreferrer'>go to the link</a></div>
            </li>
        );
    }

    public noStories(): JSX.Element {
        return (
            <ul key={0} className='list-group'>
                <li className='list-group-item text-left'>
                    <h3 className='mr-4' >
                        There is no stories available
                    </h3>
                </li>
            </ul>
        );
    }

    public convertDate(date: number) {
       
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        
        var dateComment = new Date(date * 1000);
        
        return (months[dateComment.getMonth()] + '-' + dateComment.getDate()  + '-' + dateComment.getFullYear());
                
    }

    public render() {

        const { stories } = this.props;

        return (
            (!stories.storiesDetails) ? this.spinner() : (stories.storiesDetails.length === 0) ? this.noStories() :
            <ul className='list-group'>  
                {stories.storiesDetails.map((storyDetail: IStoryDetail, index: number) => {
                    return this.getStoryDetail(storyDetail, index);
                })}
            </ul>
        );
    }
}

const mapStateToProps = (state: IRootState) => {
    return {
        stories: state.stories,
    };
};

export default connect(
    mapStateToProps,
    null,
)(Stories);
