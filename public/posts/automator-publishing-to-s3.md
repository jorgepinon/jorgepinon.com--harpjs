*File the following under: “Mac Nerd”*

# Automator publishing to S3

<p class="datestamp">December 20, 2016</p>

I use [Harp JS](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&ved=0ahUKEwjT7PfJsITRAhWJ5yYKHW9UBxIQFggcMAA&url=https%3A%2F%2Fharpjs.com%2F&usg=AFQjCNHlLkKgZ5oYHpnFAr1sBMzwHPCBeg&sig2=lEeSZ7BreaF8JV3RJ9_JiA) for this site. (Harp is a static site generator with almost the perfect balance between simplicity and customization, and I hope it lives for a long time. Go check it out.) I then host the static html files in an Amazon s3 bucket. A fairly common setup these days for static sites.

The publishing flow involves running a compile command for harp to generate the static files. Then uploading all the html—and sometimes a few static assets—to s3 via some FTP client. It’s not very tedious but I’d like to make the publishing step as friction-less as possible to remove any excuses my lazy brain has against writing more.

What I’m going to try here is to use [Expandrive](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&ved=0ahUKEwjJu-T2t4TRAhXl64MKHQUbCn8QFggcMAA&url=http%3A%2F%2Fwww.expandrive.com%2F&usg=AFQjCNHgl5MadJZOqH0XzIPIdYVB79gK5w&sig2=uy3IZE40zINar2P3zbCxzw) to mount my S3 bucket as a volume on my Mac, then use Automator to rsync the local Harp-generated files to the mounted S3. It does remove an extra manual step, but perhaps more importantly, it removes my need of having to think about what files were changed. Rsync can figure that out and just upload the changed files. So my full flow will be:

- write post in markdown and update the data.json file in Harp
- Run <code>harp compile</code> from the command line within the Harp directory
- Double-click the desktop Automator script to trigger the sync to S3. 

My hope is that this is easy enough that I’ll write a little more.

As for Automator, here’s the action I used:

<figure class="standalone centered">
	<img src="/posts/img/automator-rsync-blog-161219.png" alt="Automator script">
	<figcaption>My super basic Automator script for publishing to S3</figcaption>
</figure>

Nothing much to it. Once the S3 bucket is mounted to my iMac using Expandrive (and it usually is), I can use it as the target in the rsync command. The <code>www</code> directory is where Harp outputs the static site files after a compile.