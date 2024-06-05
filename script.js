document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('postForm').addEventListener('submit', function(e) {
        e.preventDefault();
        var postContent = document.getElementById('postContent').value;
        if (postContent.trim() === '') return;

        var postDiv = document.createElement('div');
        postDiv.className = 'card mb-3';

        var cardBodyDiv = document.createElement('div');
        cardBodyDiv.className = 'card-body';

        var flexDiv = document.createElement('div');
        flexDiv.className = 'd-flex align-items-center';

        var postText = document.createElement('p');
        postText.className = 'card-text';
        postText.textContent = postContent;

        flexDiv.appendChild(postText);
        cardBodyDiv.appendChild(flexDiv);

        var deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-sm btn-outline-danger delete-post';
        deleteButton.innerHTML = '<i class="bi bi-x"></i>';

        var likeButton = document.createElement('button');
        likeButton.className = 'btn btn-sm btn-outline-primary like-button';
        likeButton.innerHTML = '<i class="bi bi-heart"></i>';

        cardBodyDiv.appendChild(deleteButton);
        cardBodyDiv.appendChild(likeButton);

        postDiv.appendChild(cardBodyDiv);
        document.getElementById('postContainer').prepend(postDiv);

        document.getElementById('postContent').value = '';
    });

    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('like-button')) {
            event.target.classList.toggle('btn-primary');
            event.target.classList.toggle('btn-outline-primary');
        }
        if (event.target.classList.contains('delete-post')) {
            event.target.closest('.card').remove();
        }
    });
});
