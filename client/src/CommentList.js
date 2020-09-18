import React  from 'react'
//import axios from 'axios';

export default ({comments}) => {
   

    
 /* 
    // Once we start using query service, we dont need a network call
    // from CommentList
 
    const [comments, setComments] = useState([]);
    
    const fetchData = async () => {
        const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`)
        setComments(res.data);
    }

    useEffect(()=>{
        fetchData();
    }, [])

*/

    const renderedComments = comments.map(comment=>{
        
        let content;
        if (comment.status === 'approved'){
            content = comment.content
        }

        if (comment.status === 'pending'){
            content = "This comment is waiting moderation"
        }

        if (comment.status === 'rejected'){
            content = "This comment is rejected"
        }
 
        return <li key={comment.id}>{content}</li>
    })


    return (
        <ul>
            {renderedComments}
        </ul>
    )
}