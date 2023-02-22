# Portfolio Site - Version 1

## Purpose
I'm creating this site as a baseline for showcasing my development skills and my past/current projects. Ultimately this is going to be pretty barebones, and I'll be focusing on just using the main 3 (HTML, CSS, JS) in some capacity. As I learn and grow as a developer, I'll be creating new repos to further refine this, such as using a JS framework to make this all component-based and 100% JS.

## Items in Progress
- Getting my contact form up and working to send responses to my email directly. I opted to host the site on Netlify to take advantage of their form API to do this.
- Getting screenshots of my projects up on the site
- Hooking up some sort of overlay or modal that fires when a user clicks on a project screenshot, which will have more info on the project and a link to the repo/site.

## Struggles
- Bootstrap's collapsible nav was a bit confusing with the different attributes that had to be placed in specific areas. I eventually got it up and working
- Bootstrap's scroll spy was also a bit of a pain to figure out. Their documentation points to some JS I can use, however I found that adding that was forcing the nav open on mobile when the page loaded, which wasn't what I wanted. It eventually ended up being that I had to disable the toggle on initializing, so now it's working as expected. I'm still tweaking the data offset to make sure the nav is being highlighted correctly on all devices.
