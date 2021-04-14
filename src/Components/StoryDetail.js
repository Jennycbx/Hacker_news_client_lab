const StoryDetail = ({ story }) => {
    if (!story) return null;

    return (
        <div>
            <br/>
            <br/>
            <a id="article-link" href={story.url}>{story.title}</a>
            <p>By: {story.by}</p>
        </div>
        
    )
}

export default StoryDetail;