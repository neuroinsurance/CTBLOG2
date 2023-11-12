document.addEventListener('DOMContentLoaded', () => {
    const blogPosts = [
        {
            title: "Blog Post 1",
            date: "2023-01-01",
            content: "This is the first blog post content."
        },
        {
            title: "Blog Post 2",
            date: "2023-01-02",
            content: "This is the second blog post content."
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
