# README

Quick steps for publishing any updates:

1. Check out the `pelican-content` branch on local machine. Make any changes to files in the `content/` folder.
2. Commit changes in the `content/` folder to the `pelican-content` branch using the usual git add/commit commands. Include a relevant commit message. 
3. Run `make gh_full`, which is defined in the Makefile. This command:
    * cleans up the local installation by deleting everything in the output directory
    * runs the pelican publish command to convert all the Markdown articles and pages to static HTML, using the installed theme. This re-populates the output directory.
    * uses the `ghp-import` command to add the contents of the output directory to the local version of the github-pages branch (`master`) in this repo.
    * pushes the changes to `master` (the page itself) to GitHub. After it's pushed, GitHub Actions will deploy the webpage itself, usually within less than 1 minute.
    * push the changes in *content* to the `pelican-content` branch on GitHub. This doesn't affect any of the rendered content on the webpage (which is based only on `master`), but is best practice so that there's a remote version of the raw content.

Note that one downside of this is that GitHub still tracks all branches with respect to their status. So the more changes that are pushed, the more GitHub will report that the `pelican-content` branch is "X commits ahead, Y commits behind `master`". 

## To-dos for improving the site:

- [ ] read FAQs, tips from [Pelican documentation](https://docs.getpelican.com/en/latest/index.html)
- [ ] migrate content for `scoop.html`
- [ ] migrate posts from old pelican blog?
- [ ] set an automatic makefile for publishing, including pushing to master (see [tutorial](https://opensource.com/article/19/5/run-your-blog-github-pages-python)); possible [useful link](https://clamytoe.github.io/articles/2020/Feb/28/pelican/)
- [ ] add documentation to this README
- [ ] add links to:
    * [elegant theme](https://elegant.oncrashreboot.com/)
    * [ghp-import](https://github.com/c-w/ghp-import)
    * [tablesort](https://github.com/tristen/tablesort/); could not get this to work correctly with submodules
- [ ] figure out how to properly switch themes from current directory

