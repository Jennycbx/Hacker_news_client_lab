import StorySelector from '../Components/StorySelector';
import StoryDetail from '../Components/StoryDetail';
import {useState, useEffect} from 'react';

const StoryContainer = () => {

    const [stories, setStories] = useState([])

    return (
        <>
			<h1>Hacker News Story Finder</h1>
            <StorySelector />
            <StoryDetail />
        </>
    );
}

export default StoryContainer;