const StoryDetail = ({ story }) => {
    if (!story) return null;

    return (
        <div>
            <h3>{story.title}</h3>
            <p>By: {story.by}</p>
            <a href={story.url}>Link to article</a>
        </div>
        
    )
}

export default StoryDetail;