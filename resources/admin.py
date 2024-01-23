from django.contrib import admin
from resources.models import PolicyTracker,RelevantResearch,Litigation,RtiAndOrders,Conferences

# Register your models here.
admin.site.register(PolicyTracker)
admin.site.register(RelevantResearch)
admin.site.register(Litigation)
admin.site.register(RtiAndOrders)
admin.site.register(Conferences)