/**
 *
 * Copyright 2015, Institute for Systems Biology
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
/**
 * Created by rossbohner on 12/9/15.
 */
require.config({
    baseUrl: '/static/js/',
    paths: {
        jquery: 'libs/jquery-1.11.1.min',
        bootstrap: 'libs/bootstrap.min',
        jqueryui: 'libs/jquery-ui.min',
        session_security: 'session_security',
        underscore: 'libs/underscore-min',
        assetscore: 'libs/assets.core',
        assetsresponsive: 'libs/assets.responsive',
        d3: 'libs/d3.min',
        d3tip: 'libs/d3-tip',

        search_helpers: 'helpers/search_helpers',
        vis_helpers: 'helpers/vis_helpers',
        tree_graph: 'visualizations/createTreeGraph',
        stack_bar_chart: 'visualizations/createStackedBarchart',
        d3parsets: 'libs/d3.parsets',
        draw_parsets: 'parallel_sets',
        base: 'base'
    },
    shim: {
        'bootstrap': ['jquery'],
        'jqueryui': ['jquery'],
        'session_security': ['jquery'],
        'assetscore': ['jquery', 'bootstrap', 'jqueryui'],
        'assetsresponsive': ['jquery', 'bootstrap', 'jqueryui']
    }
});

require([
    'jquery',
    'jqueryui',
    'bootstrap',
    'session_security',

    'd3',
    'd3tip',
    'search_helpers',
    'vis_helpers',

    'tree_graph',
    'stack_bar_chart',

    'assetscore',
    'assetsresponsive',
    'base'
], function ($, jqueryui, bootstrap, session_security, d3, d3tip, search_helpers, vis_helpers, parallel_sets, draw_parsets) {

    // Resets forms in modals on cancel. Suppressed warning when leaving page with dirty forms
    $('.modal').on('hide.bs.modal', function() {
        $(this).find('form')[0].reset();
    });

    var search_helper_obj = Object.create(search_helpers, {});

    $('#clin-accordion').on('show.bs.collapse', function (e) {
        $(e.target).siblings('a').find('i.fa-caret-down').show();
        $(e.target).siblings('a').find('i.fa-caret-right').hide();

    });

    $('#clin-accordion').on('hide.bs.collapse', function (e) {
        $(e.target).siblings('a').find('i.fa-caret-right').show();
        $(e.target).siblings('a').find('i.fa-caret-down').hide()
    });

    $('.show-more').on('click', function() {
        $(this).siblings('li.extra-values').show();
        $(this).siblings('.show-less').show();
        $(this).hide();
    });

    $('.show-less').on('click', function() {
        $(this).siblings('li.extra-values').hide();
        $(this).siblings('.show-more').show();
        $(this).hide();
    });

    // comments interactions
    $('.show-flyout').on('click', function() {
        $('.comment-flyout').animate({
            right: '-1px'
        }, 800);
    });
    $('.hide-flyout').on('click', function() {
        $(this).parents('.fly-out').animate({
            right: '-300px'
        }, 800);
    });

    //script to perform dropdowns on worksheet tabs
    $('.dropdown-toggle.worksheet-drop').click(function(){
        if($(this).next().css("display") == "block") {
           $(this).next().css("display", "none");
        } else {
            $(this).next().css("display", "block");
        }
    })

    $('.dropdown-menu').find("[data-toggle='modal']").click(function(){
        //$(this.getAttribute("data-target")).modal();
        console.log($(this.getAttribute("data-target")));
    })


    ////Model communications
    //$('.add_worksheet_comment_form').on('submit', function(event) {
    //    event.preventDefault();
    //    var form        = this;
    //    var workbookId  = $(form).find("#workbook_id_input").val();
    //    var worksheetId = $(form).find("#worksheet_id_input").val();
    //    var url         = base_url + '/workbooks/' + workbookId + '/worksheets/' + worksheetId + '/comments/create';
    //
    //    $.ajax({
    //        type : 'POST',
    //        url  : url,
    //        data : $(this).serialize(),
    //        success: function(data) {
    //            data = JSON.parse(data);
    //            $('.comment-flyout .flyout-body').append('<h5 class="comment-username">' + data['first_name'] + ' ' + data['last_name'] + '</h5>');
    //            $('.comment-flyout .flyout-body').append('<p class="comment-date">' + data['date_created'] + '</p>');
    //            $('.comment-flyout .flyout-body').append('<p class="comment-content">' + data['content'] + '</p>')
    //            form.reset();
    //        },
    //        error: function() {
    //            console.log('Failed to save comment.');
    //            form.reset()
    //        }
    //
    //    });
    //
    //    return false;
    //});

    //search_helper_obj.update_counts(base_api_url, 'metadata_counts', cohort_id);
    //search_helper_obj.update_parsets(base_api_url, 'metadata_platform_list', cohort_id);
});
