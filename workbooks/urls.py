from django.conf.urls import patterns, url

import views

urlpatterns = patterns('',
    url(r'^$', views.workbook_list, name='workbooks'),
    url(r'^samples$', views.workbook_samples, name='workbook_samples'),

    url(r'^create$',                        views.workbook, name='workbook_create'),
    url(r'^(?P<workbook_id>\d+)/$',         views.workbook, name='workbook_detail'),
    url(r'^(?P<workbook_id>\d+)/edit$',     views.workbook, name='workbook_edit'),
    url(r'^(?P<workbook_id>\d+)/delete$',   views.workbook, name='workbook_delete'),
    url(r'^(?P<workbook_id>\d+)/share$',    views.workbook, name='workbook_share'),
    url(r'^(?P<workbook_id>\d+)/copy$',     views.workbook, name='workbook_copy'),

    url(r'^(?P<workbook_id>\d+)/worksheets/create$',                          views.worksheet, name='worksheet_create'),
    url(r'^(?P<workbook_id>\d+)/worksheets/(?P<worksheet_id>\d+)/copy$',      views.worksheet, name='worksheet_copy'),
    url(r'^(?P<workbook_id>\d+)/worksheets/(?P<worksheet_id>\d+)/delete',     views.worksheet, name='worksheet_delete'),
    url(r'^(?P<workbook_id>\d+)/worksheets/(?P<worksheet_id>\d+)/edit$',      views.worksheet, name='worksheet_edit'),

    url(r'^(?P<workbook_id>\d+)/worksheets/(?P<worksheet_id>\d+)/comments/create$',                       views.worksheet_comment, name='worksheet_comment_create'),
    url(r'^(?P<workbook_id>\d+)/worksheets/(?P<worksheet_id>\d+)/comments/(?P<comment_id>\d+)/edit$',     views.worksheet_comment, name='worksheet_comment_edit'),
    url(r'^(?P<workbook_id>\d+)/worksheets/(?P<worksheet_id>\d+)/comments/(?P<comment_id>\d+)/delete$',   views.worksheet_comment, name='worksheet_comment_delete')
)