# README

## Updating content

Short version:

1. In the branch `pelican-content`, make changes in the `content/` folder. 
2. git **add & commit** the changes locally.
3. Run `make gh_full`.

Slightly longer explanation

1. The `pelican-content` branch contains all of the raw files (mostly Markdown) that constitute content. It does **not** contain the rendered HTML files that Pelican produces via the selected theme - those will go in the `output/` folder. Since there's no need for the two to actually interact once they've been rendered, we keep the repo cleaner by separating the content and rendered files in separate branches.
2. Include a relevant commit message for git so that changes to the `pelican-content` branch have some context. The commit message for `mainline` branch with the rendered comment will always be the same ("Generate Pelican site").
3. `make gh_full` is defined in the [Makefile](./Makefile). This command:
    * cleans up the local installation by deleting everything in the output directory
    * runs pelican to convert all the Markdown articles and pages to static HTML, using the installed theme. This re-populates the output directory.
    * uses the `ghp-import` command to add the contents of the output directory to the local version of the github-pages branch (`master`) in this repo.
    * pushes the changes to `master` (the page itself) to GitHub. After it's pushed, GitHub Actions will deploy the webpage itself, usually within less than 1 minute.
    * push the changes in **content** to the `pelican-content` branch on GitHub. This doesn't affect any of the rendered content on the webpage (which is based only on `master`), but is best practice so that there's a remote version of the raw content.

Note: one downside of this setup is that GitHub tracks the status of all remote branches with respect to each others heads. So the more changes that are pushed, the more GitHub will report that the `pelican-content` branch is "X commits ahead, Y commits behind `master`". This doesn't affect functionality.

## To-dos for improving the site:

- [x] read FAQs, tips from [Pelican documentation](https://docs.getpelican.com/en/latest/index.html)
- [ ] migrate content for `scoop.html`
- [ ] migrate posts from old pelican blog?
- [x] set an automatic makefile for publishing, including pushing to master (see [tutorial](https://opensource.com/article/19/5/run-your-blog-github-pages-python)); possible [useful link](https://clamytoe.github.io/articles/2020/Feb/28/pelican/)
- [x] add documentation to this README
- [ ] add links to:
    * [elegant theme](https://elegant.oncrashreboot.com/)
    * [ghp-import](https://github.com/c-w/ghp-import)
    * [tablesort](https://github.com/tristen/tablesort/); could not get this to work correctly with submodules
- [ ] figure out how to properly switch themes from current directory

