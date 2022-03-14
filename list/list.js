const List = (props) => {
    const { articles } = props;

    let list = [];
    // construction de la list
    articles && articles.forEach((article) => { 
        list.push(<Card data={article} />);
    })

    if (!articles) { return <div>Récupération des donnés !</div>
    return (
        <div className="space-y-1">
            {list}
        </div>
    )
}

const Card = (props) => {
    const { data } = props;
    
    let date = new Date(data.publishedAt).toLocaleString();

    if (data.featured) {
        return (
            <div className="flex bg-main" style={{ minHeight: 150 }}>
            <div className="w-1/4"><div className="h-full" style={{ background: `url(${data.imageUrl}) no-repeat center center`, backgroundSize:'cover'}} />
            </div>
            <div className="flex-1 ml-1"><div><a target="_blank" href={data.url} rel="noreferrer">{data.title}</a></div>
                <div className="mt-1">{data.summary}</div>
                <div className="mt-1">Published by {data.newsSite} at {date}</div>
            </div>
        </div>
        )
    }

    return (
        <div className="flex" style={{ minHeight: 150 }}>
            <div className="w-1/4"><div className="h-full" style={{ background: `url(${data.imageUrl}) no-repeat center center`, backgroundSize:'cover'}} />
            </div>
            <div className="flex-1 ml-1"><div><a target="_blank" href={data.url} rel="noreferrer">{data.title}</a></div>
                <div className="mt-1">{data.summary}</div>
                <div className="mt-1">Published by {data.newsSite} at {date}</div>
            </div>
        </div>
    )
}

export default List;