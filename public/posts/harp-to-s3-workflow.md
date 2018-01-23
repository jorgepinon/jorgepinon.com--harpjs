
# HarpJs to Amazon s3 workflow

<p class="datestamp">December 13, 2017</p>

<div class="callout">
	<p>This is an update to a [previous post](automator-publishing-to-s3.html) where I explained how I used the Mac OS app, Automator, to upload a static site to s3</p> 
</div>

I just recently found out that the [aws-cli](http://docs.aws.amazon.com/cli/latest/reference/index.html#cli-aws) contains commands for [s3](http://docs.aws.amazon.com/cli/latest/reference/s3/index.html#), including [sync](http://docs.aws.amazon.com/cli/latest/reference/s3/sync.html). 

So after a bit of hacking on it, here’s my new harp-to-s3 workflow: 

1. Once you’re done with local changes in harp, open a terminal and ```cd``` into the root directory of your site
2. Run ```harp compile```
3. Then ```cd www``` (the directory where harp places the compiled html)
4. Here’s where we use the AWS command line tool. The sync command has a few flags you can use, but the two that are pertinent here are ```--include``` and ```--exclude```. Those can be used together to get the results you need.

	By default the sync command syncs all files in the directory, unless you flag them with exclude. So to sync the whole directory, here’s what I use: ```aws s3 sync . s3://www.jorgepinon.com --exclude "*.DS_Store" --dryrun``` — I like to exclude those dumb .DS_Store files and use the ```--dryrun``` flag first to see what would be uploaded.

	If you want to instead sync a single file, like say your main.css file, you have to first exclude everything and then include only that file:
	```aws s3 sync . s3://www.jorgepinon.com --exclude "*" --include "/css/site.css"```

	You can sync multiple files by adding extra includes as needed:
	```aws s3 sync . s3://www.jorgepinon.com --exclude "*" --include "/css/site.css" --include "/js/main.js" --include "/img/new-header-image.jpg"```

5. If you use the dryrun flag and the results look correct, then rerun the same command without dryrun.
6. Confirm live changes by pointing your browser to your site.

## Automated deployment

It would of course be ideal if I could automate this somehow. And since I also save the site files in a git repo, I looked into Bitbucket and found that they do indeed have an automated tool to upload to s3. 

The problem is that I’d rather not upload the entire site each time, only new or updated files, but ```harp compile``` generates an entire new static site which effectively destroys any chance of automated syncing. 

I’ll look into something else if I ever do get sick of this, but for now it’s up to me to know which files I edited and should be uploaded.