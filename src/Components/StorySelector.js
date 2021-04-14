const StorySelector = ({ stories, onStorySelect }) => {
    
    const options = stories.map((story) => {
        return <option key={story.id} value={story.id}>{story.title}</option>
    })

    const handleStorySelect = (e) => {
        onStorySelect(parseInt(e.target.value))
    }

    return (
        <>
            <select onChange={handleStorySelect}>
                <option value="" disabled selected hidden>Please select a story...</option>
                {options}
            </select>
        </>
        
    )
}

export default StorySelector