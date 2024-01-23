from django.contrib.syndication.views import Feed
from django.utils.feedgenerator import Atom1Feed
from django.template.defaultfilters import truncatewords
from blog.models import Post


class LatestPostsFeed(Feed):
	title = "Internet Shutdowns Blog"
	link = "/feed/"
	description = "Internet Shutdowns Tracker RSS feed"
	feed_type = Atom1Feed

	def items(self):
		return Post.objects.filter(status=1)

	def item_title(self, item):
		return item.title

	def item_description(self, item):
		return truncatewords(item.content, 50)

