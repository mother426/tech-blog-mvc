const addComment = async (event) => {
    event.preventDefault();
    const commentContent = document.querySelector('#comment').value.trim();
    const postID = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    
    if(commentContent) {
        const response = await fetch ('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment_content: commentContent, post_id: postID }),
            headers: {
                "Content-type": "application/json",
            }
        })
        if (response.ok) {
            document.replace('/profile');
        } else {
            alert("Failed to post comment");
        }
    }
};

document.querySelector('.comment-form').addEventListener('submit', addComment);