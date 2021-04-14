import StorySelector from '../Components/StorySelector';
import StoryDetail from '../Components/StoryDetail';
import {useState, useEffect} from 'react';

const StoryContainer = () => {

    const [storyIds, setStoryIds] = useState([])
	const [stories, setStories] = useState([])
    const [selectedStoryId, setSelectedStoryId] = useState([null])
    const [selectedStory, setSelectedStory] = useState([null])

    const findStory = (searchId, collection) => {
        const foundStory = collection.find(({id}) => id === searchId)
		return foundStory
    }

	const getStoryIds = () => {
		console.log("Getting stories...")
		fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
			.then(res => res.json())
			.then(data => setStoryIds(data.slice(0, 10)))
	}

	const getStories = () => {
		const promises = storyIds
			.map(id => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(res => res.json()))
			

		Promise.all(promises)
			.then(stories => setStories(stories))
	}

	const changeSelectedStoryId = (id) => {
		setSelectedStoryId(id)
	}

	useEffect(getStoryIds, [])
	useEffect(getStories, [storyIds])

    useEffect(() => {
        setSelectedStory(findStory(selectedStoryId, stories))}, [selectedStoryId])
	
    return (
        <>
			<h1>Hacker News Story Finder</h1>
            <StorySelector
				stories={stories} 
				onStorySelect={changeSelectedStoryId}/>
            <StoryDetail story={selectedStory}/>
        </>
    );
}

export default StoryContainer;