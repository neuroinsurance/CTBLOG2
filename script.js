document.addEventListener('DOMContentLoaded', () => {
    const blogPosts = [
        {
            title: "A Friends Perspective",
            date: "2023-01-01",
            content: "After speaking to my best friend on the phone today, I learned the importance of finding a way to stay healthy that works for you. Understanding everyone is different is very important."
        },
        {
            title: "Blog Post 2",
            date: "2023-01-02",
            content: "This is the second blog post content."
        },
        {
            title: "Blog Post 3",
            date: "2023-01-02",
            content: "Test 1234"
        },
        {
            title: "Blog Post 4",
            date: "2023-01-02",
            content: "Test 1234567"
        },
        {
            title: "Blog Post 5",
            date: "2023-01-02",
            content: "Test 1234"
        },
        {
            title: "Blog Post 6",
            date: "2023-01-02",
            content: "Test 1234"
        },
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
