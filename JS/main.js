document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('ratingForm');
    var commentsDiv = document.getElementById('comments');

    form.onsubmit = function(event) {
        event.preventDefault(); // Prevent form from submitting the traditional way

        var name = document.getElementById('name').value;
        var comment = document.getElementById('comment').value;
        var rating = document.querySelector('input[name="rating"]:checked').value;
        var commentEntry = document.createElement('div');

        commentEntry.innerHTML = '<strong>' + name + '</strong> - ' + rating + ' stars' + '<p>' + comment + '</p>';
        commentsDiv.appendChild(commentEntry);

        // Reset the form
        form.reset();
    };
});
