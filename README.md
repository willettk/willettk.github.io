My personal webpage, built with [Hyde](http://hyde.github.io/).

See the rendered version at https://willettk.github.io.

Adapted from work by [Jake VanderPlas](https://github.com/jakevdp/website).

Building
========
Requires hyde:

    pip install hyde

Also pdflatex (for CV to be auto-generated)

----

Media files need to be placed under `./media/` to be deployed to server when
publishing.

Optional resizing:

1. Place full-size version in `./media/images/{path}/original/{imagename}`. 
1. Resize: `convert ./media/images/{path}/original/{imagename}`. -resize 650x650 ./media/images/{path}/{imagename}`

Publishing:

1. make gen-production
1. make publish

----
Editing: with the exception of `racelist.html`, files should be edited in `content/`. Running `make publish` then will copy them for deployment. 

Why does this work with about.html, but not scoop.html?

----

Generate version for local development:

    make gen

Preview local version
(this is previewable in the browser at localhost:8080 -- kill with ctrl-C)

    make serve

Generate site for production:

    make gen-production

Publish to Github:

    make gen
    hyde publish -p github -m <COMMIT MESSAGE>
    
Or if you're feeling lazy and you want to skip the commit message:

    make publish

Publish to university servers (SSH publisher requires hyde version > 0.8.6):

    make publish-lucifer

License
=======
This work is under a [BSD 2-clause license](http://opensource.org/licenses/BSD-2-Clause)

