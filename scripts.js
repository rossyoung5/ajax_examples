$(function(){
    //Get reference to the list element
    var getUsersButton = $('#get-users'),
        getPostsButton = $('#get-posts'),
        getPost10Button = $('#post-10'),
        getUser2Button = $('#user-2'),
        replacePost12Button = $('#post-12'),
        list = $('ul');

    getUsersButton.click(function() {
        list.empty();
        $.get('http://jsonplaceholder.typicode.com/users', function(users){
            //Iterate over the response, adding elements to DOM
            users.forEach(function(user){
                var li = $('<li></li>');
                li.text(user.name);
                list.append(li);
            })
        })
    })

    getPostsButton.click(function() {
        list.empty();
        $.get('http://jsonplaceholder.typicode.com/posts', function(posts){
            //Iterate over the response, adding elements to DOM
            posts.forEach(function(post){
                var li = $('<li></li>');
                li.text(post.title);
                list.append(li);
            })
        })
    })

    getPost10Button.click(function() {
        list.empty();
        $.get('http://jsonplaceholder.typicode.com/posts/10', function(post){
        var li = $('<li></li>');
            li.html(post.title + '<br/>' + post.body);
            list.append(li);
        })
    })

    getUser2Button.click(function() {
        list.empty();
        $.get('http://jsonplaceholder.typicode.com/posts', function(posts){
            //Iterate over the response, adding elements to DOM
            posts.forEach(function(post){
                if (post.userId === 2) {
                    var li = $('<li></li>');
                    li.text(post.title);
                    list.append(li);
                }
            })
        })
    })

    replacePost12Button.click(function() { 
        list.empty();
        $.ajax({
            method: 'PUT',
            url: 'http://jsonplaceholder.typicode.com/posts/12',
            data: {
                userId: 1,
                title: "New Post",
                body: "New post added"
            },
            complete: function(response){
                console.log(response.responseJSON);
                var li = $('<li></li>');
                li.text(JSON.stringify(response.responseJSON));
                list.append(li);
            }
        })
    })

})
  