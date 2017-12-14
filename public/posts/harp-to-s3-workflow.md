
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
4. Then ```aws s3 sync . s3://www.jorgepinon.com --exclude "*.DS_Store" --dryrun``` — I like to exclude those dumb .DS_Store files and use the ```--dryrun``` flag first to see what would be uploaded.
5. If the dry run list looks correct, then ```aws s3 sync . s3://www.jorgepinon.com --exclude "*.DS_Store"```
6. Confirm live changes by pointing your browser to your site.

## Automated deployment

It would of course be ideal if I could automate this somehow. And since I also save the site files in a git repo, I looked into Bitbucket and found that they do indeed have an automated tool to upload to s3. 

The problem is that I’d rather not upload the entire site each time, only new or updated files, but ```harp compile``` generates an entire new static site which effectively destroys any chance of automated syncing. 

I’ll look into something else if I ever do get sick of this, but for now it’s up to me to know which files I edited and should be uploaded.