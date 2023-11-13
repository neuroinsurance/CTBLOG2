document.addEventListener('DOMContentLoaded', () => {
    const blogPosts = [
        {
            title: "The best bedtime story, every night",
            date: "2023-01-01",
            content: "Welcome to Turner Tales, where bedtime stories come alive with a touch of magic and a dash of your child’s imagination! Let’s get started on creating a whimsical adventure for tonight Enter the Hero’s Name: Choose a fun and quirky name for your character. It could be anything from Glitterbug to Captain Noodle. Pick an Animal Companion: Select from our wide range of animals to accompany your hero on their journey. Some popular choices are: A wise-cracking turtle named Turbo Tim. A gentle elephant who loves to dance, called Boogie Bubbles. A ninja cat with lightning-fast reflexes, known as Shadow Whiskers. Choose a Personality Trait: Give your character depth with a fun personality trait. Here are some you can choose from: Giggly and jolly – they find everything amusing! Mischievously clever – always has a trick up their sleeve. Brave and bold – no challenge is too big! Create the Story: Click the “Create Story” button and watch as the AI spins a tale featuring the name, animal, and trait you’ve chosen. Read and Enjoy! In moments, you’ll have a delightful story to read to your child, filled with laughter, lessons, and endearing moments. Remember, with Turner Tales, every night is a new adventure!"
        },
        {
            title: "",
            content: ""
        }
        // Add more blog posts here
    ];

    const blogPostsContainer = document.getElementById('blog-posts');

    blogPosts.forEach(post => {
        const article = document.createElement('article');
        article.innerHTML = `
            <h2>${post.title}</h2>
            <p>Posted on <time datetime="${post.date}">${post.date}</time></p>
            <p>${post.content}</p>
        `;
        blogPostsContainer.appendChild(article);
    });
});
document.addEventListener('DOMContentLoaded', (event) => {
    //get button element
    const button = document.getElementById('myButton');

    //add a click event listener to the button
    button.addEventListener('click', function() {
        alert('Our developers are working hard to get this feature working. Stay tuned!');
    });
 });
 document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission action

    // Fetch values from form
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    // Do something with the form data
    console.log('Name:', name, 'Email:', email);
});
