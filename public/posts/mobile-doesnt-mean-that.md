# You’re not still using the word “mobile”, right?

<p class="datestamp">February 24, 2013</p>

It seems we&rsquo;ve been talking about &ldquo;mobile&rdquo; as soon as the iPhone made its debut, when websites and apps were suddenly being used by people using their fat fingers on a small screen instead of a point-and-click precision on larger and larger screens.

The term “mobile” doesn’t really help in any practical way for most apps and yet we see it everywhere. To solve design problems, web designers and developers have responded incredibly (as they do) to find new methods, many of which are actually good practice for _any_ context: clear and simple content, bigger and easy-to-read font-sizes, cleaner code, lighter page weight, etc.

Ethan Marcotte showed us how to build responsive layouts and 320-and-up introduced &rdquo;mobile-first&rdquo;, and now everyone seems to think that whether your strategy is mobile-first or not, you need to consider mobile users.

Ethan’s demonstration of the power of media queries completely changed the way a lot of us build interfaces. We can tell what your browser’s pixel width is and respond accordingly. But the word “mobile” runs us into a logical problem. It’s safe enough to assume a small screen is a “mobile” device, but that ends abruptly at 768 pixels. Why?

Because Apple then made the iPad. And this thing was mobile but _not_ small.

When the iPad came out, it’s pixel dimensions were 1024 x 768 (landscape). That was also the most common desktop screen width at the time.

The iPad was immediately called a mobile device. Maybe because it was easy to see it as an embiggened iPod Touch? But it almost completely invalidated the idea that pixel width was an indicator of a “mobile” device.

## What to consider

If we stick to the good practices I mentioned above (clear and simple content, low filesizes), we can stop using the word “mobile” altogether and focus instead on other things that smartphones and tablets have made important:

### Input method:
* mouse
* touch
* voice

Probably the most important factor that smartphones and tablets have brought to web design is the touch interface. Luckily for many projects, touch and mouse can almost be considered equivalent. Stop using hover events and make link and button targets bigger.

### Screen size:
* single-column
* 2 or more columns (based on line-length)

From 320 to 5120, every pixel counts. There are more devices coming out all the time with different form factors and pixel dimensions. Design for every size—it’s possible with fluid layouts. Save yourself some grief and start with single-column CSS. Add min-width media queries for larger breakpoints. Use %-based widths in between breakpoints and always keep the line length in mind.

### Environment/physical context:
* handheld
* lap
* desk
* wall (TVs already have browsers)

These of course bring to mind their pixel widths, but I'm refering to the user’s physical method of interaction and their distance from the screen. Font sizes are a good thing to focus on when moving up or down that list.

Most combinations of InputMethod/ScreenSize/Environment represent real users in a practical sense. Forget “mobile”.
