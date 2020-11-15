function getData() {
  fetch("http://createsimple.dk/ap_data/wordpress/wp-json/wp/v2/life_situation")
    .then(function(response) {
      return response.json();
    })
    .then(showPosts);
}

function showPosts(posts) {
  console.log(posts);
}
