import operator

from django.db import models
from django.contrib.auth.models import User
from django.db.models import Q


class ProjectManager(models.Manager):
    def search(self, search_terms):
        terms = [term.strip() for term in search_terms.split()]
        q_objects = []
        for term in terms:
            q_objects.append(Q(name__icontains=term))

        # Start with a bare QuerySet
        qs = self.get_queryset()

        # Use operator's or_ to string together all of your Q objects.
        return qs.filter(reduce(operator.and_, [reduce(operator.or_, q_objects), Q(active=True)]))

class Project(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255,null=True)
    description = models.TextField(null=True)
    active = models.BooleanField(default=True)
    last_date_saved = models.DateTimeField(auto_now_add=True)
    objects = ProjectManager()
    owner = models.ForeignKey(User)

    '''
    Sets the last viewed time for a cohort
    '''
    def mark_viewed (self, request, user=None):
        if user is None:
            user = request.user

        last_view = self.project_last_view_set.filter(user=user)
        if last_view is None or len(last_view) is 0:
            last_view = self.project_last_view_set.create(user=user)
        else:
            last_view = last_view[0]

        last_view.save(False, True)

        return last_view

class Project_Last_View(models.Model):
    project = models.ForeignKey(Project, blank=False)
    user = models.ForeignKey(User, null=False, blank=False)
    last_view = models.DateTimeField(auto_now_add=True, auto_now=True)

class Study(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(null=True)
    active = models.BooleanField(default=True)
    last_date_saved = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(User)
    project = models.ForeignKey(Project)

    '''
    Sets the last viewed time for a cohort
    '''
    def mark_viewed (self, request, user=None):
        if user is None:
            user = request.user

        last_view = self.study_last_view_set.filter(user=user)
        if last_view is None or len(last_view) is 0:
            last_view = self.study_last_view_set.create(user=user)
        else:
            last_view = last_view[0]

        last_view.save(False, True)

        return last_view

class Study_Last_View(models.Model):
    study = models.ForeignKey(Study, blank=False)
    user = models.ForeignKey(User, null=False, blank=False)
    last_view = models.DateTimeField(auto_now_add=True, auto_now=True)