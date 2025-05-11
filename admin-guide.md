# Savon Forestry Website - Admin Guide

This document explains how to manage the Savon Forestry Services website, including how to add new blog posts.

## Adding New Blog Posts

To add a new blog post to the website, follow these steps:

### Step 1: Create a New Blog Post HTML File

1. Navigate to the `blog-posts` folder
2. Create a new HTML file with a descriptive name (use hyphens instead of spaces), for example: `new-forestry-technique.html`
3. Copy the structure from an existing blog post file (e.g., `tree-planting-best-practices.html`)
4. Update the following elements in the new file:
   - Page title and meta descriptions
   - Social media meta tags
   - Blog post header and title
   - Featured image
   - Content sections
   - "Related Articles" section to link to other relevant posts

Example structure of a blog post file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Blog Post Title - Savon Forestry Services</title>
    <meta name="description" content="Description of your blog post">
    
    <!-- Social Media Meta Tags -->
    <meta property="og:title" content="Your Blog Post Title - Savon Forestry Services">
    <meta property="og:description" content="Description of your blog post">
    <meta property="og:type" content="article">
    <meta property="og:url" content="https://savonforestry.com/blog-posts/your-file-name.html">
    <meta property="og:image" content="URL to featured image">
    <meta property="article:published_time" content="YYYY-MM-DD">
    
    <!-- Styles remain the same -->
    <link rel="stylesheet" href="../css/styles.css">
    <link rel="stylesheet" href="../css/responsive.css">
    <link rel="stylesheet" href="../css/blog-post.css">
</head>
<body>
    <!-- Header Section remains the same -->
    
    <!-- Blog Post Content -->
    <section class="blog-post">
        <div class="container">
            <div class="blog-post-header">
                <h1>Your Blog Post Title</h1>
                <div class="blog-post-meta">
                    <div class="blog-post-date">
                        <i class="far fa-calendar-alt"></i> Month DD, YYYY
                    </div>
                    <div class="blog-post-author">
                        <i class="far fa-user"></i> By Savon Forestry Team
                    </div>
                    <div class="blog-post-category">
                        <i class="far fa-folder"></i> Category Name
                    </div>
                </div>
            </div>
            
            <div class="blog-post-featured-image">
                <img src="IMAGE_URL" alt="Descriptive alt text">
            </div>
            
            <div class="blog-post-content">
                <!-- Your blog post content goes here -->
                <h2>First Section Heading</h2>
                <p>Your paragraph text...</p>
                
                <!-- Add more sections as needed -->
                
                <!-- Keep the share and navigation sections -->
                <div class="blog-post-share">
                    <span>Share this article:</span>
                    <a href="#" class="share-icon" title="Share on Facebook"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="share-icon" title="Share on Twitter"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="share-icon" title="Share on WhatsApp"><i class="fab fa-whatsapp"></i></a>
                    <a href="#" class="share-icon" title="Share on LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                </div>
                
                <div class="blog-post-navigation">
                    <a href="../index.html#blog" class="btn btn-secondary"><i class="fas fa-arrow-left"></i> Back to Blog</a>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScJc3JTq0SBZHOAFtX7U3XRaJ9nUlJ55eKOXCkwRe4wdyEXRg/viewform" target="_blank" class="btn btn-primary">Book a Consultation <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
            
            <!-- Related posts section - update with relevant articles -->
            <div class="related-posts">
                <h3>Related Articles</h3>
                <div class="related-posts-grid">
                    <!-- Add 2-3 related articles -->
                </div>
            </div>
        </div>
    </section>

    <!-- Footer remains the same -->
</body>
</html>
```

### Step 2: Add the Blog Card to the Index Page

1. Open the `index.html` file
2. Locate the blog section (search for `id="blog"`)
3. Find the `blog-grid` div which contains all blog cards
4. Add a new blog card at the beginning of the grid (to show the newest post first)

Example of a blog card to add:

```html
<div class="blog-card">
    <div class="blog-image">
        <img src="IMAGE_URL" alt="Descriptive alt text">
    </div>
    <div class="blog-content">
        <div class="blog-date">Month DD, YYYY</div>
        <h3>Your Blog Post Title</h3>
        <p>Brief description of your blog post (50-70 words).</p>
        <div class="blog-footer">
            <a href="blog-posts/your-file-name.html" class="btn-link">Read More <i class="fas fa-arrow-right"></i></a>
            <div class="blog-share">
                <span>Share:</span>
                <a href="#" class="share-icon" title="Share on Facebook"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="share-icon" title="Share on Twitter"><i class="fab fa-twitter"></i></a>
                <a href="#" class="share-icon" title="Share on WhatsApp"><i class="fab fa-whatsapp"></i></a>
            </div>
        </div>
    </div>
</div>
```

### Step 3: Update Related Articles

1. Go through existing blog posts and update their "Related Articles" sections to include the new blog post where relevant

## Tips for Blog Post Content

1. **Images**: Use high-quality, royalty-free images from sites like Pixabay, Unsplash, or Pexels
2. **Content Structure**: Use clear headings (h2, h3, h4) to organize content logically
3. **Formatting**: Break text into short paragraphs and use bullet points for readability
4. **Keywords**: Include relevant forestry and conservation keywords naturally throughout the text
5. **Length**: Aim for 800-2000 words for comprehensive articles
6. **Calls to Action**: Always include calls to action directing readers to Savon's services

## Future Website Enhancement Ideas

1. Implement a content management system (CMS) for easier blog management
2. Add categories and tags to organize blog posts
3. Implement a search function for blog content
4. Add a comment system for user engagement
5. Integrate with Mailchimp or similar for a newsletter signup

For assistance with website updates, please contact your web developer.