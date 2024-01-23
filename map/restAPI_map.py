# serializers for the map from the model shutdownIn_India

from rest_framework import serializers
from map.models import ShutdownsIn_India

class RestAPI_map(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ShutdownsIn_India
        fields = ('author','state','district','description','shutdown_date','shutdown_end_date','source','nature','network_effected')
