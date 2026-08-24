For most of this year I've been building tools for exactly one user: me.

That's a real advantage right up until it isn't. A tool you run yourself can be
sharp and unfinished at the same time. You know which button lies. You know
which step to skip on Tuesdays. You know the config file by heart, so it never
needs a UI. All of that knowledge lives in your head, and none of it survives
contact with a second person.

The last two weeks were mostly spent dragging two projects across that line.

## What I shipped

**The Meta ads generator started becoming a product.** It began as a pipeline I
ran from my own terminal with my own API keys. Over the last week it grew the
things a tool doesn't need and a product can't skip: an interactive run loop
where every stage is editable, a feedback dock that takes voice or text, a
staleness cascade so editing an early stage correctly invalidates everything
downstream, spend caps, brand confirmation with real uploads, and colors, fonts,
and logo pulled from the actual site instead of guessed.

Then I built it a competitor-intelligence stage — design spec, implementation
plan, database tables, a resolution endpoint, a scrape queue with a cache
short-circuit and a control gate, and channel-state and quartile analysis on top.
Twenty-nine commits.

The part I'd point at: porting the scraper adapter to TypeScript meant two
implementations of the same thing, so I wrote cross-language conformance tests
against recorded fixtures. They caught the two sides disagreeing immediately.

**growth-map became Map & Mirror.** New name, new domain — mapandmirror.app is
live — and a working email pipe that lands in the inbox rather than spam, which
is not nothing for a domain that's a week old.

I iterated on the landing page and rewrote it several times, then promoted the
fifth version to the root so that the ads and the page they land on agree
without a URL caveat. The headline it settled on is "Reflection that actually
goes somewhere." Further down, one line changed from "It will not try to fix
you" to "We're not here to fix you" — which reads like a small edit and isn't:
one describes the software, the other is a person talking.

The decision behind all of that: I'd rather run an ad campaign than show it to
my friends.

While researching where to run those ads, I found something I didn't expect. The
AI-memoir products — StoryWorth, Remento, Storii — run sustained Meta campaigns,
hundreds of ads deep. The AI-journaling apps in my own category mostly don't run
any. I don't fully know what that means yet, but "the adjacent category has
figured out paid acquisition and mine hasn't" is the kind of thing worth knowing
before you spend money.

**Ubitel got 64 commits** across the app and the backend — a full username and
handle system end to end, a group-chat redesign, checkout and payments fixes, and
repairing the native build after the Xcode 26 upgrade.

**Two new repos opened.** One is an operations research project; the other is an
AI-native org cookbook — a leverage ladder, nine chapter outlines, and the first
seed recipes.

**And the paper trading system ran fourteen days unattended**, flagging its own
scheduler gaps on the days the machine was asleep. That one I mostly just watch
now, which was the point.

## What I've been thinking about

Underneath the product work is something less tidy.

I've been thinking about how to make my life more like a piece of art. How I
spend my time is a stroke of the brush. So the question on any given afternoon is
whether I'm making a beautiful stroke — whether this is contributing to the
tapestry — or whether I'm just on YouTube, not adding to the piece at all.

That's become an actual input to my decision-making, not just a nice thought I
have.

There's a second half of it I'm worse at. Making the thing is one skill.
Actually sharing the art — bringing it out into the world, figuring out how to
put it in front of people — is a different skill, and one I haven't spent much
time on. I want to learn it. It's where I want to put attention going forward.

## What's next

Staying in Durango. Continuing on Ubitel and the personal projects.

Getting Map & Mirror to a place where I can share it publicly or run a real
launch campaign around it. Productizing the Meta ads generator into something
genuinely usable by someone who isn't me. And continuing the small business
search, which has been running quietly underneath all of this.
